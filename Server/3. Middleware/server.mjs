import express from 'express';
import morgan from 'morgan';

const app = express();
const PORT = 4000;


// application-level
let middleware = (req,res,next)=>{
    if(true){
        // res.send('not available')
    }
    next();
}

// router-level
let postMiddleware = (req,res,next)=>{
    console.log('post router-level')

    next();
}

app.use(express.json())
app.use(morgan('common'))

app.get('/', (req, res)=>{
    console.log('request ip: ' + req.ip)
    res.send({
        type: 'get api'
    })
})

app.post('/',postMiddleware, (req, res)=>{ // router-level
    console.log('post requested!')
    console.log(req.body)
    res.send('Post api')
})
app.put('/', (req, res)=>{
    console.log('requested!')
    res.send('put api')
})
app.delete('/', (req, res)=>{
    console.log('requested!')
    res.send('delete api')
})







app.listen(PORT, ()=>{
    console.log(`my server is running on port:${PORT}`)
})


