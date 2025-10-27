import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();

app.use(cors({
  origin: ['http://localhost:3000'],
  methods: ['GET','POST','DELETE','PUT','PATCH'],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/', userRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => console.log('Server on http://localhost:' + process.env.PORT));
}).catch(console.error);
