import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './configs/mongodb.js';

//APP CONFIG
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

await connectDB();


// API routes
app.get('/',(req,res) => res.send("API Working for Clear Bg"))


