import express from 'express'

let route = express.Router()
let users = [
    {
        username: 'bilal',
        email: 'abc@xyz.com',
        id: 1,
        age: 30,
        depart: 'IT'
    },
    {
        username: 'anas',
        email: 'abc@xyz.com',
        id: 2,
        age: 20,
        depart: 'Medical'
    },
    {
        username: 'faiq',
        email: 'abc@xyz.com',
        id: 2,
        age: 20,
        depart: 'none'
    },
    {
        username: 'siraj',
        email: 'abc@xyz.com',
        id: 2,
        age: 25,
        depart: 'none'
    }
]

route.get('/', (req, res) => {
    let { age, depart } = req.query // query
    let filterData = users;
    
    if (age) {
        let filter = filterData.filter(user => user.age == age)
        filterData = filter;
    }
    if(depart){
        let filter = filterData.filter(user => user.depart == depart)
        filterData = filter;
    }

    res.status(200).json({
            error: false,
            message: 'users data successfully fetch!',
            data: filterData
        })

})

// params
route.get('/:id', (req, res) => {
    let filter = users.filter((user) => user.id == req.params.id);
    if (filter.length < 1) return res.status(404).send('user not found!')

    res.status(200).json({
        error: false,
        message: 'user found!',
        data: filter
    })
})


export default route;

