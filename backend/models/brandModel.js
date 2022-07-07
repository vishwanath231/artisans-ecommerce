import mongoose from "mongoose";
const Schema = mongoose.Schema;



const brandSchema = new Schema({

    check:{
        type: Boolean,
        required: true,
        default: false
    },
    name: {
        type: String,
        required: true
    }
})

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;
