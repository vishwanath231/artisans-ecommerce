import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import User from '../models/authModel.js';

const protect = asyncHandler(async (req, res, next) =>{

    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        
        try {

            token = req.headers.authorization.split(' ')[1];

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select('-password')

            next()
            
        } catch (err) {
            res.status(401)
            throw new Error('Not Authorized, Token Failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not Authorized, No Token')
    }


})


const adminProtect = asyncHandler(async (req, res, next) => {

    if (req.user && req.user.role === 'admin') {
        next()
    }else {
        res.status(401)
        throw new Error('Not authorized as an admin')
    }
})


const makerProtect = asyncHandler(async (req, res, next) => {

    if (req.user && req.user.role === 'maker') {
        next()
    }else{
        res.status(401)
        throw new Error('Not authorized as an maker')
    }

})



export { protect, adminProtect, makerProtect };