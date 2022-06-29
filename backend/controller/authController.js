import asyncHandler from 'express-async-handler';
import User from '../models/authModel.js'
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';


/**
 * @method       POST 
 * @routes       /api/users/register
 * @description  Register
 * @access       User
 */

const register = asyncHandler(async (req, res) => {

    const { username, email, phone, password, repeatPassword } = req.body;

    if (!username || !email || !phone || !password || !repeatPassword) {
        res.status(400)
        throw new Error('please add all fields!')
    }

    if (password !== repeatPassword){
        res.status(400) 
        throw new Error("Password doesn't match");
    }

    const isEmail = await User.findOne({ email:  email });
    if (isEmail) {
        res.status(400)
        throw new Error('Email already exists!')
    }

    const isPhone = await User.findOne({ phone: phone })
    if (isPhone) {
        res.status(400)
        throw new Error('Phone number already exists!')
    }

    const salt = await bcrypt.genSalt(10);
    if (!salt) {
        res.status(400)
        throw new Error('somthing went wrong with bcrypt')
    }

    const hashPassword = await bcrypt.hash(password, salt)
    if (!hashPassword) {
        res.status(400)
        throw new Error('something went wrong with hashing')
    }

    const userData = User({
        username,
        email,
        phone,
        password: hashPassword
    })

    const savedUser = await userData.save();

    if (savedUser) {
        res.status(201).json({
            msg: 'Register successful',
            success: true,
            token: generateToken(savedUser._id),
            user: {
                id: savedUser._id,
                username:  savedUser.username,
                email: savedUser.email,
                phone: savedUser.phone,
                isAdmin: savedUser.isAdmin
            }
        })
    }
})



/**
 * @method       POST 
 * @routes       /api/users/login
 * @description  Login 
 * @access       User, Admin
 */

const login = asyncHandler(async (req, res) => {


    const { phoneOrEmail, password } = req.body;

    if (!phoneOrEmail || !password) {
        res.status(400)
        throw new Error('please add all fields!')
    }

    // const user = await User.findOne({ $or: [{ email: phoneOrEmail }, { phone: phoneOrEmail }] });

    let user;
    try {
    
        user = await User.findOne({ email: phoneOrEmail });
        if (!user){ 
            user = await User.findOne({ phone: phoneOrEmail });

            if (!user) {
                res.status(400)
                throw new Error('User not found')
            }
                
        }

    } catch (error) {
        res.status(400)
        throw new Error('Invalid phone or email')
    }
    
    const isCheck = await bcrypt.compare(password, user.password)
    if (!isCheck) {
        res.status(400)
        throw new Error('Invalid credentials')
    }
    

    res.status(200).json({
        msg: 'Login successful',
        success: true,
        token: generateToken(user._id),
        user: {
            id: user._id,
            name:  user.name,
            email: user.email,
            phone: Number(user.phone),
            isAdmin: user.isAdmin
        }
    })

})



/**
 * @method       GET 
 * @routes       /api/users/login
 * @description  user profile
 * @access       User, Admin
 */

const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id);
    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }

    res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin
    })
})


export { register, login, getUserProfile };