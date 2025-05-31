import express from 'express';
import Joi from 'joi';
import User from '../models/user.js';
import bcrypt from 'bcryptjs';

let route = express.Router();


route.post('/register', async(req, res) => {
   try {
     const { username, email, age, password } = req.body;
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
    const { error,value } = registerSchema.validate(req.body);

    if(error){
        // console.error('error in validation:', error);
        return res.status(400).json({
            error:true,
            message: error.details[0].message 
        });
    }

    let findUser = await User.findOne({email});
    if(findUser){
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
res.send('user registered successfully!')

   } catch (error) {
    console.error('error in user registration:', error);
    return res.status(500).json({
        error: true,
        message: 'internal server error!'
    })
   }







res.send('register api working!')



})



route.get('/login', (req, res) => { })


export default route;