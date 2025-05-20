import express from 'express';

const app = express();
const PORT = 4000;
//192.168.203.175
app.get('/', (req, res)=>{
    console.log('request ip: ' + req.ip)
    res.send('Hello this is express server!')
})
app.post('/', (req, res)=>{
    console.log('requested!')
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


app.get('/users', (req, res)=>{
    console.log('requested!')
    res.send([
        {name:'abc',age:20}
    ])
})





app.listen(PORT, ()=>{
    console.log(`my server is running on port:${PORT}`)
})


