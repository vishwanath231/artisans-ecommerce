import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import color from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRouter from './routes/authRoutes.js';
import productRouter from './routes/productRoutes.js';
import makerRouter from './routes/makerRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import { notFound, errorHandler} from './middleware/errorMiddleware.js';


dotenv.config();


connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
}

app.use('/api/auth', authRouter);
app.use('/api/products', productRouter);
app.use('/api/maker', makerRouter);
app.use('/api/orders', orderRouter)


app.get('/get-razorpay-key', (req, res) => {
    
    res.send({ key: process.env.RAZORPAY_KEY })
})



app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || PORT;

app.listen(PORT, console.log(`server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.black.underline));
