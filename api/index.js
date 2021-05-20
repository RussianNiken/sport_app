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

  // Also ask for fromat (monthly, weekly, daily)

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

  // let where = (day?)
  
  // Also ask for fromat (monthly, weekly, daily)

  const posts = await prisma.videos.findMany({
      where: { 
        user_id: user_id,
      }
  });

  res.json(posts);
})


export default {
    path: '/api',
    handler: app
  }