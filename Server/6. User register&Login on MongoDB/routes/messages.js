import express from 'express';
import Message from '../models/message.js'
let route = express.Router();
import jwt from 'jsonwebtoken';
import 'dotenv/config'

let authenticate = (req, res, next) => {
    console.log(req.headers);
    if (!req.headers.authorization.split(' ')[1]) {
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
        console.log("decoded: " + decodedUser);
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

route.post('/:id', authenticate, async (req, res) => {
    try {
        const { to, text, from } = req.body;
        const { id } = req.params;
        if (!to || !text) {
            return res.status(400).json({
                error: true,
                message: 'Recipient ID (to) and message text are required!'
            });
        }

        const newMessage = new Message({
            from: from || id, // Assuming 'from' is the sender's ID, or use 'id' from params
            to: to, // Assuming 'to' is the recipient's ID
            text: text,
        });
        await newMessage.save();
        req.app.get('io').emit('messagesUpdated');

        res.status(201).json({
            error: false,
            message: 'Message sent successfully!',
            data: newMessage
        });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({
            error: true,
            message: 'Internal server error!',
        });
    }
});

route.get('/:id', authenticate, async (req, res) => {
    try {
        const { to } = req.query;
        const { id } = req.params;
        let query = {};

        if (!to) {
            return res.status(400).json({
                error: true,
                message: 'Recipient ID (to) is required!'
            });
        }
        query.to = to; // Assuming 'to' is the recipient's ID
        query.from = id; // Assuming req.user contains the authenticated user's ID

        const messages = await Message.find(query);


        res.status(200).json({
            error: false,
            message: 'Messages data fetched!',
            data: messages
        });

    } catch (error) {
        console.error('Error fetching messages:', error);
        res.status(500).json({
            error: true,
            message: 'Internal server error!',
        });
    }
});

// route.delete('/:id', authenticateAdmin, async(req, res) => {
//     try {
//         let { id } = req.params;
//         let deleteUser = await User.findByIdAndDelete(id);

//         req.app.get('io').emit('usersUpdated');

//         res.status(200).json({
//             error: false,
//             message: 'user successfully deleted!',
//         })
//     } catch (error) {
//         console.log("Error:", error);
//         res.status(201).json({
//             error: true,
//             message: error,
//             data: null,
//         })
//     }
// });

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