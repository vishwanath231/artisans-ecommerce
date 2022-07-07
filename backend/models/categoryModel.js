import mongoose from "mongoose";
const Schema = mongoose.Schema;


const categorySchema = new Schema({

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

const Category = mongoose.model('Category', categorySchema);

export default Category;
