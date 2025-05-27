import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/users.js'
import productRoutes from './routes/products.js'
import 'dotenv/config'
import mongoose from 'mongoose';


const app = express();
const PORT = process.env.PORT || 4000;

// firebase
console.log("key: ",process.env.MONGOBD_URL)

app.use(express.json())
// app.use('/users',userRoutes)
// app.use('/products',productRoutes)


 mongoose.connect(process.env.MONGOBD_URL).then(()=>{
    console.log('mongodb connected!')
}).catch((err)=>{
    console.error('error in mongodb connection!:',err)

})


app.get('/', (req,res)=>{
    console.log('get api')
    res.send('Get aPI');
})


app.listen(PORT, ()=>{
    console.log(`my server is running on port:${PORT}`)
})


