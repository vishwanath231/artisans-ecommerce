import asyncHandler from 'express-async-handler';
import User from '../models/UserModel.js'
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';


/**
 * @method       POST 
 * @routes       /api/users/register
 * @description  Register
 * @access       User
 */

const register = asyncHandler(async (req, res) => {

    const { name, email, password, password2 } = req.body;

    if (!name || !email || !password || !password2) {
        res.status(400)
        throw new Error('please add all fields!')
    }

    if (password !== password2){
        res.status(400) 
        throw new Error("Password doesn't match");
    }

    const user = await User.findOne({ email:  email });
    if (user) {
        res.status(400)
        throw new Error('Email already exists!')
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
        name,
        email,
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
                name:  savedUser.name,
                email: savedUser.email,
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

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400)
        throw new Error('please add all fields!')
    }


    const user = await User.findOne({ email:  email });
    if (!user) {
        res.status(400)
        throw new Error('Invalid Email')
    }


    const isCheck = await bcrypt.compare(password, user.password)
    if (!isCheck) {
        res.status(400)
        throw new Error('Invalid Password')
    }


    res.status(200).json({
        msg: 'Login successful',
        success: true,
        token: generateToken(user._id),
        user: {
            id: user._id,
            name:  user.name,
            email: user.email,
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