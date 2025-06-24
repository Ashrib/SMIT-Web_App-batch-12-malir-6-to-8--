import express from 'express';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from 'http';

const app = express();
const PORT = process.env.PORT || 4000;
const server = createServer(app);
const io = new Server(server,{
    cors:{
        origin: '*', // replace with your client URL
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
});

app.set('io',io) // to assess io in routes
app.use(cors());
app.use(express.json())
app.use('/auth',authRoutes)
app.use('/users',usersRoutes)

 mongoose.connect(process.env.MONGOBD_URL).then(()=>{
    console.log('mongodb connected!')
}).catch((err)=>{
    console.error('error in mongodb connection!:',err)
})


app.get('/',(req, res)=>{
    res.send('get api')
})


io.on('connection', (socket) => {
  console.log('a user connected',socket.id);
});


server.listen(PORT, ()=>{
    console.log(`my server is running on port:${PORT}`)
})


