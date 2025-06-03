import express from 'express';
import Joi from 'joi';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config'


let route = express.Router();

const registerSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'dev'] } }).required(),
    password: Joi.string().min(6)
        .required(),
    age: Joi.number().strict().integer().min(1).required(),
})
const loginSchema = Joi.object({
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'dev'] } }).required(),
    password: Joi.string().min(6)
        .required(),
})



route.post('/register', async (req, res) => {
    try {
        const { username, email, age, password } = req.body;

        const { error, value } = registerSchema.validate(req.body);

        if (error) {
            // console.error('error in validation:', error);
            return res.status(400).json({
                error: true,
                message: error.details[0].message
            });
        }

        let findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).json({
                error: true,
                message: 'user already exists with this email!'
            })
        }

        // bcrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        console.log('salt:', salt);

        // create user
        let newUser = new User({
            username,
            email,
            age,
            password: hashPassword, // store hashed password
        });
        newUser = await newUser.save();
        res.status(200).json({
            error: false,
            message: 'user registered successfully!',
            data: newUser,
        })

    } catch (error) {
        console.error('error in user registration:', error);
        return res.status(500).json({
            error: true,
            message: 'internal server error!'
        })
    }

    res.send('register api working!')

})



route.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        const { error, value } = loginSchema.validate(req.body);
        if (error) {
            // console.error('error in validation:', error);
            return res.status(400).json({
                error: true,
                message: error.details[0].message
            });
        }

        // find user by email
        let findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(400).json({
                error: true,
                message: 'user not found with this email!'
            });
        }
        // compare password
        const isPasswordValid = await bcrypt.compare(password, findUser.password); //decrypt password
        console.log('isPasswordValid:', isPasswordValid);
        if (!isPasswordValid) {
            return res.status(400).json({
                error: true,
                message: 'invalid credentials!'
            });
        }
        // create jwt token
        let token = jwt.sign({
                username: findUser.username,
                email: findUser.email,
                age: findUser.age,
            }, process.env.JWT_SECRE); // secret key from .env file
        // console.log('token:', token);

        res.status(200).json({
            error: false,
            message: 'user logged in successfully!',
            data: {
                username: findUser.username,
                email: findUser.email,
                age: findUser.age,
            },
            token: token
        });

    } catch (error) {
        console.error('error in user login:', error);
        return res.status(500).json({
            error: true,
            message: 'internal server error!'
        })
    }
})


export default route;