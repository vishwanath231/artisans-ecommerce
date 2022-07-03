import mongoose from "mongoose";



const connectDB =  async () => {
    
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI)
        
        // console.log('connected');
        console.log(`MongoDB connected: ${conn.connection.name}`.bgGreen.black.underline);
        
    } catch (err) {

        console.log(err);
        // console.log(`MongoDB connection failed: ${conn.connection.name}`.bgRed.black.underline);
        process.exit(1);
    }
}

export default connectDB;