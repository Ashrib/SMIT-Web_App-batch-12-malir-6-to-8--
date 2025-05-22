import express from 'express'

let route = express.Router()
let products = [
    {
     name:'shirt'
    },
    {
     name:'shoes'
    },
    {
     name:'pant'
    },
]

route.get('/', (req, res) => {

    res.status(200).json({
            error: false,
            message: 'products data successfully fetch!',
            data: products
        })
})

// params
route.get('/:id', (req, res) => {
    
    console.log(req.params.id)
    let filter = users.filter((user) => user.id == req.params.id);

    if (filter.length < 1) return res.status(404).send('user not found!')

    res.status(200).json({
        error: false,
        message: 'user found!',
        data: filter
    })
})


export default route;

