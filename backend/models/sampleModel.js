import mongoose from "mongoose";
const Schema = mongoose.Schema;

const sampleSchema = new Schema({

    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }

})

const Sample = mongoose.model('Sample', sampleSchema);

export default Sample;
