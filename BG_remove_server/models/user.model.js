import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    photo:{
        type: String,
        required: false,
    },
    firstName: {
        type: String,
        required: false 

    },
    lastName: {
        type: String,
        required: false
    },
    creditBalance: {
        type: Number,
        required: false,
        default: 2
    },
});


const UserModel = mongoose.models.user || mongoose.model('User', userSchema) ;

export default UserModel;


