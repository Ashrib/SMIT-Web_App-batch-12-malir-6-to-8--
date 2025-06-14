import express from 'express';
import User from '../models/user.js';
import Order from '../models/order.js'; // Assuming you have an Order model
let route = express.Router();

let authenticate = (req, res, next) => {
    console.log(req.headers.authorization.split(' ')[1]);
    if (!req.headers.authorization) {
        return res.status(401).json({
            error: true,
            message: 'Unauthorized access, please login first!'
        });
    }
    console.log('User authenticated');
    next();
};

route.get('/', authenticate, async (req, res) => {
    try {
        const { age, username } = req.query; // Destructure query parameters if needed
        let query = {};
        if (age) query.age = age;
        if (username) query.username = username;

        // const users = await User.find(query);
        // const users = await User.find({
        //     age: 22
        // }).select('username email _id');


        // aggregation example
        const users = await User.aggregate([
            {
                $match: { //query condition
                    age: {
                        $gte: 18, 
                        $lte: 30
                    }
                }
            },
            {
                $sort:{
                    age:-1 // sort by age in descending order
                }
            },
            {
                $addFields: { // add field 
                    total: {
                        $sum: '$marks'
                    },
                }
            },
            {
                $lookup:{
                    from:'smit_orders', // collection name in mongodb
                    localField: '_id', // field from the current collection
                    foreignField: 'uid', // field from the foreign collection
                    as: 'orders' // name of the new field to add
                }
            }
            // {
            //     $project:{
            //         username: 1,
            //         age:1,
            //         email:1,
            //     }
            // },
        ]);

const usersGroup = await User.aggregate([ // to group data
            {
                $match: { //query condition
                    age: {
                        $gte: 18, 
                        $lte: 30
                    }
                }
            },
            
            {
                $group:{ 
                    _id: '$age',
                    totalUsers:{ $sum: 1 }, // count of users in each age group
                }
            },
            
        ]);

        res.status(200).json({
            error: false,
            message: ' users data fetched!',
            data: users
        });

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }

})

route.delete('/', authenticate, (req, res) => {
    res.send('users api working!');
});





// route.post('/order', async(req,res)=>{
//     try {
//         let newOrder = new Order(req.body);
//         await newOrder.save()
    
//         res.status(201).json({
//             error: false,
//             message: 'Order created successfully!',
//             data: newOrder
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             error: true,
//             message: 'Failed to create order',
//             details: error.message
//         });
//     }

// })


export default route;