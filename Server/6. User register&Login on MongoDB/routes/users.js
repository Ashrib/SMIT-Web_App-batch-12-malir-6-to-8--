import express from 'express';
import User from '../models/user.js';
import Order from '../models/order.js';
let route = express.Router();
import jwt from 'jsonwebtoken';
import 'dotenv/config'

let authenticate = (req, res, next) => {
    console.log(req.headers.authorization.split(' ')[1]);
    if (!req.headers.authorization) {
        return res.status(401).json({
            error: true,
            message: 'Unauthorized access, please login first!'
        });
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedUser) {
            return res.status(401).json({
                error: true,
                message: 'Invalid token!'
            });
        }
        req.user = decodedUser;
        console.log('User authenticated');
        next();
    } catch (error) {
        console.error('Error in authentication:', error);
        return res.status(401).json({
            error: true,
            message: 'Invalid token!',
        });
    }
};

let authenticateAdmin = (req, res, next) => {
    try {
        let token = req.headers.authorization.split(' ')[1];
        if (!req.headers.authorization) {
            return res.status(401).json({
                error: true,
                message: 'Unauthorized access, please login first!'
            });
        }
    
        let decodedUser = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded: "+decodedUser);
        if (!decodedUser) {
            return res.status(401).json({
                error: true,
                message: 'Invalid token!'
            });
        }

        if (!decodedUser.isAdmin) {
            return res.status(403).json({
                error: true,
                message: 'Forbidden access, admin only!'
            });
        }
        req.user = decodedUser; 
        next();
    } catch (error) {
        console.error('Error in admin authentication:', error);
        return res.status(500).json({
            error: true,
            message: 'Internal server error!'
        });
    }
}

route.get('/', authenticate, async (req, res) => {
    try {
        const { age, username } = req.query;
        let query = {};
        if (age) query.age = age;
        if (username) query.username = username;

        // const users = await User.find(query);
        // const users = await User.find({
        //     age: 22
        // }).select('username email _id');

        // aggregation example

        const users = await User.find();

        // const users = await User.aggregate([
        //     {
        //         $match: {
        //             ...query,
        //             age: {
        //                 $gte: 18, 
        //                 $lte: 30
        //             }
        //         }
        //     },
        //     {
        //         $sort: {
        //             age: -1
        //         }
        //     },
        //     {
        //         $addFields: {
        //             total: {
        //                 $sum: '$marks'
        //             },
        //         }
        //     },
        //     {
        //         $lookup: {
        //             from: 'smit_orders',
        //             localField: '_id',
        //             foreignField: 'uid',
        //             as: 'orders'
        //         }
        //     }
        //     {
        //         $project:{
        //             username: 1,
        //             age:1,
        //             email:1,
        //         }
        //     },
        // ]);

        // const usersGroup = await User.aggregate([
        //     {
        //         $match: {
        //             age: {
        //                 $gte: 18, 
        //                 $lte: 30
        //             }
        //         }
        //     },
        //     {
        //         $group: {
        //             _id: '$age',
        //             totalUsers: { $sum: 1 },
        //         }
        //     },
        // ]);

        res.status(200).json({
            error: false,
            message: 'Users data fetched!',
            data: users
        });

    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({
            error: true,
            message: 'Internal server error!',
        });
    }
});

route.delete('/:id', authenticateAdmin, async(req, res) => {
    try {
        let { id } = req.params;
        let deleteUser = await User.findByIdAndDelete(id);

        req.app.get('io').emit('usersUpdated');

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
});

// route.post('/user', async(req,res)=>{
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