// index.js
import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'


const prisma = new PrismaClient()
const app = express()

console.log(app)

app.use(cors({
  origin: 'http://192.168.1.87:3000'
}));

app.use(express.json({limit: '50mb'}))

/** 
* logic for our api will go here
*/

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
      where: where,
      orderBy: {
        date: 'asc'
      }
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


app.post('/upload', async (req, res) => {
  
  let date = new Date(req.body.date);

  let data = {
    user_id: req.body.id,
    weight: req.body.weight,
    video: Buffer.from(req.body.video),
    date: req.body.date,
    day: date.getDate(),
    data: '',
    score: 0,
    month: date.getMonth() + 1,
    year: date.getFullYear(),
    processed: false
  } 

  const post = await prisma.videos.create({
    data: data
  });

  res.status(200).json(post);
})

app.post('/update', async (req, res) => {
  
  let data = {
    user_id: 1,
    weight: parseInt( req.body.weight ),
  } 

  const post = await prisma.videos.update({
    data: data,
	where: { video_id: parseInt( req.body.id ) }
  });

  res.status(200).json(post);
})

export default {
    path: '/api',
    handler: app
  }
