// index.js
import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

/** 
* logic for our api will go here
*/

// To update shiet

// // index.js
// app.post('/post', async (req, res) => {
//     const { title, content, authorEmail } = req.body
//     const post = await prisma.post.create({
//       data: {
//         title,
//         content,
//         author: {
//           connectOrCreate: {
//             email: authorEmail
//           }
//         }
//       }
//     })
//     res.status(200).json(post)
//   })

app.get('/graphed', async (req, res) => {
  const user_id = parseInt( req.query.uid );
  let groups = [];
  
  switch( parseInt( req.query.mode ) )
  {
    case 0:
      groups = ['year','month','day'];
      break;
    case 1:
      groups = ['year','month'];
      break;
    case 2:
      groups = ['year'];
      break;
  }

  const posts = await prisma.videos.groupBy({
      by: groups,
      where: { user_id: user_id },
      avg : {
          score: true
      }
  });

  res.json(posts);
})

app.get('/exercises', async (req, res) => {
  const user_id = parseInt(req.query.uid);
  const day = parseInt(req.query.day);
  const month = parseInt(req.query.month);
  const year = parseInt(req.query.year);

  let where = {};

  where.user_id = parseInt(req.query.uid);
  if (req.query.day)
    where.day = parseInt(req.query.day);
  if (req.query.month)
    where.month = parseInt(req.query.month);
  where.year = parseInt(req.query.year);

  const posts = await prisma.videos.findMany({
      where: where
  });

  res.json(posts);
})


app.get('/video', async (req, res) => {
  const id = parseInt(req.query.id);

  const posts = await prisma.videos.findUnique({
      where: {
        video_id: id
      }
  });

  res.json(posts);
})


export default {
    path: '/api',
    handler: app
  }