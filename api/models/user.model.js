import mongoose, { Mongoose, Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },

    Email:{
        type: String,
        required: true,
        unique: true,
    },

    username:{
        type: String,
        required: true,
    }

},{timestamps: true});
 const User = Mongoose.model('User', userSchema);

 export default User;