import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },

password:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fcool-profile-pictures&psig=AOvVaw1PkIvzQf-K_RJ8CO2__9T9&ust=1706134871022000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCNiwvPLF9IMDFQAAAAAdAAAAABAE"
    },

},{timestamps: true});
 const User = mongoose.model('User', userSchema);

 export default User;