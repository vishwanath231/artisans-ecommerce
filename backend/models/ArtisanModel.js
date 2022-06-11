import mongoose from "mongoose";


const artisanSchema = mongoose.Schema({

    name: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    isArtisan: {
        type: Boolean,
        required: true,
        default: true 
    }

},{

    timestamps: true
})

const Artisan = mongoose.model('Artisan', artisanSchema)

export default Artisan;