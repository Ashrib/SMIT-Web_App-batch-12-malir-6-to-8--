import express from 'express'
import User from '../models/user.js'

let route = express.Router()

route.get('/', async(req, res) => { // all users

    try {
        let users = await User.find();
        res.status(200).json({
            error: false,
            message: ' users data fetched!',
            data: users
        })

    } catch (error) {
        console.log(error)
        res.status(201).json({
            error: true,
            message: 'error in users data fetching!',
            data: null
        })
    }

    res.status(200).json({
        error: false,
        message: 'users data successfully fetch!',
        data: filterData
    })

})

// params
route.get('/:id', async (req, res) => {
    try {
        let { id } = req.params;
        let findUser = await User.findById(id);
        if (findUser) {
            res.status(200).json({
                error: false,
                message: 'user found!',
                data: findUser
            })
        }
        /// if user not found
        res.status(404).json({
            error: false,
            message: 'user not found!',
            data: null,
        })

    } catch (error) {
        console.log(error)
         res.status(201).json({
            error: false,
            message: 'something went wrong!',
            data: null,
        })
    }
})

// create user
route.post('/', async (req, res) => {
    try {
        let data = req.body;
        let newUser = new User({ ...data })
        newUser = await newUser.save()// ,mongodb store
        res.status(200).json({
            error: false,
            message: 'user successfully added!',
            data: newUser,
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(201).json({
            error: true,
            message: error,
            data: null,
        })
    }

})

// delete
route.delete('/:id', async(req,res)=>{
    try {
        let { id } = req.params;
        let deleteUser = await User.findByIdAndDelete(id);
        res.status(200).json({
            error: false,
            message: 'user successfully deleted!',
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(201).json({
            error: true,
            message: error,
            data: null,
        })
    }
})


// updates
route.put('/:id', async(req,res)=>{
    try {
        let { id } = req.params;
        let updatedData = req.body;
        let updateUser = await User.findByIdAndUpdate(id, {
            ...updatedData
        })
        res.status(200).json({
            error: false,
            message: 'successfully updated!',
            data: updateUser,
        })
    } catch (error) {
        console.log("Error:", error);
        res.status(201).json({
            error: true,
            message: error,
            data: null,
        })
    }
})




export default route;

