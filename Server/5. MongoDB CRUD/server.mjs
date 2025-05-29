import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/users.js'
import 'dotenv/config'
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use('/users',userRoutes)


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


