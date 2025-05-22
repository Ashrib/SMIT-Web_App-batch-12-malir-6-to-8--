import express from 'express';
import morgan from 'morgan';
import userRoutes from './routes/users.js'
import productRoutes from './routes/products.js'

const app = express();
const PORT = 4000;

let users = [
    {
        username: 'bilal',
        email:'abc@xyz.com',
        id:1,

    },
    {
        username: 'anas',
        email:'abc@xyz.com',
        id:2,
        
    }
]

app.use('/users',userRoutes)
app.use('/products',productRoutes)


app.get('/', (req,res)=>{
    console.log('get api')
    res.send('Get aPI');
})


app.listen(PORT, ()=>{
    console.log(`my server is running on port:${PORT}`)
})


