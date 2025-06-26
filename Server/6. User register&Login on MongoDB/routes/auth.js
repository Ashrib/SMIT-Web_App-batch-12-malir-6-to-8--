import express from 'express';
import Joi from 'joi';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

let route = express.Router();

const registerSchema = Joi.object({
    username: Joi.string()
        .trim() 
        .min(3)
        .max(30)
        .pattern(/^[A-Za-z0-9]+(?: [A-Za-z0-9]+)*$/)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'dev'] } })
        .required(),
    password: Joi.string()
        .min(6)
        .required(),
    age: Joi.number()
        .strict()
        .integer()
        .min(1)
        .required(),
    marks: Joi.array()
        .items(Joi.number().min(0).max(100))
        .required(),
    isAdmin: Joi.boolean()
        .required(),
});

const loginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'dev'] } })
        .required(),
    password: Joi.string()
        .min(6)
        .required(),
});

route.post('/register', async (req, res) => {
    try {
        const { username, email, age, password, marks, isAdmin } = req.body;

        const { error, value } = registerSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                error: true,
                message: error.details[0].message,
            });
        }

        let findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).json({
                error: true,
                message: 'User already exists with this email!',
            });
        }

        // bcrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // create user
        let newUser = new User({
            username,
            email,
            age,
            marks,
            password: hashPassword,
            isAdmin,
        });
        newUser = await newUser.save();
        req.app.get('io').emit('usersUpdated'); // notify all connected clients
        res.status(200).json({
            error: false,
            message: 'User registered successfully!',
            data: newUser,
        });
    } catch (error) {
        console.error('Error in user registration:', error);
        return res.status(500).json({
            error: true,
            message: 'Internal server error!',
        });
    }
});

route.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        let { error, value } = loginSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                error: true,
                message: error.details[0].message,
            });
        }

        // find user by email
        let findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(400).json({
                error: true,
                message: 'User not found with this email!',
            });
        }
        // compare password
        const isPasswordValid = await bcrypt.compare(password, findUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                error: true,
                message: 'Invalid credentials!',
            });
        }
        // create jwt token
        let token = jwt.sign(
            {
                username: findUser.username,
                email: findUser.email,
                age: findUser.age,
                isAdmin: findUser.isAdmin,
                _id: findUser._id,
            },
            process.env.JWT_SECRET
        );

        res.status(200).json({
            error: false,
            message: 'User logged in successfully!',
            data: {
                username: findUser.username,
                email: findUser.email,
                age: findUser.age,
                isAdmin: findUser.isAdmin,
                _id: findUser._id,
            },
            token: token,
        });
    } catch (error) {
        console.error('Error in user login:', error);
        return res.status(500).json({
            error: true,
            message: 'Internal server error!',
        });
    }
});

route.get('/user', (req, res) => {
    if (!req.headers.authorization) {
        return res.status(401).json({
            error: true,
            message: 'Token not provided, please login first!',
        });
    }
    const token = req.headers.authorization.split(' ')[1];

    let decodedUser = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedUser) {
        return res.status(401).json({
            error: true,
            message: 'Invalid token!',
        });
    }
    res.status(200).json({
        error: false,
        message: 'User data fetched successfully!',
        data: decodedUser,
    });
});

export default route;