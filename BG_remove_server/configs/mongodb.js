import mongoose from "mongoose";

const connectDB = async () => {
    console.log("Before connect")
    await mongoose.connect(`${process.env.MONGO_URI}/bg-removal`)
    console.log("MongoDB connected");
};

export default connectDB;