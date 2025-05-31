import express from 'express';
import morgan from 'morgan';
import 'dotenv/config'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use('/auth',authRoutes)


 mongoose.connect(process.env.MONGOBD_URL).then(()=>{
    console.log('mongodb connected!')
}).catch((err)=>{
    console.error('error in mongodb connection!:',err)
})


app.get('/',(req, res)=>{
    res.send('get api')
})



app.listen(PORT, ()=>{
    console.log(`my server is running on port:${PORT}`)
})


