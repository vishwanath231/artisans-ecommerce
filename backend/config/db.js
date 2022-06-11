import mongoose from "mongoose";


const connectDB =  async () => {

    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen.black.underline);
        
    } catch (er) {
        
        console.log(`MongoDB connection failed: ${conn.connection.host}`.bgRed.black.underline);
        process.exit(1);
    }
}

export default connectDB;