import express from 'express';
import User from '../models/user.js';

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


route.delete('/', authenticate, (req, res) => {
    res.send('users api working!');
});

export default route;