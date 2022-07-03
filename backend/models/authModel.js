import mongoose from "mongoose";


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'  
    }

},{

    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;