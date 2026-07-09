import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRouter from './routes/userRouter.js';
import connectDB from './configs/mongodb.js';
import imageRouter from './routes/imageRouter.js';

//APP CONFIG
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors(
  {
    origin: process.env.FRONTEND_URL
  }
));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

try {
  await connectDB();
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}


// API routes
app.get('/',(req,res) => res.send("API Working for Clear Bg"))
app.use('/api/user',userRouter ); 
app.use('/api/image', imageRouter);

