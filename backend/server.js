import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import color from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';



dotenv.config();

connectDB();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan("dev"))
}

app.use('/api/users', userRouter);

app.use(errorHandler);
app.use(notFound);



const PORT = process.env.PORT || PORT;

app.listen(PORT, console.log(`server running ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.bgYellow.black.underline));
