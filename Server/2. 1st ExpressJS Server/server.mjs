import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res)=>{
    console.log('requested!')
    res.send('Hello this is express server!')
})

app.get('/users', (req, res)=>{
    console.log('requested!')
    res.send([
        {name:'abc',age:20}
    ])
})


app.listen(PORT, ()=>{
    console.log(`my server is running on port:${PORT}`)
})


