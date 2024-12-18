import mongoose from "mongoose";
const Schema = mongoose.Schema

const adminSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    refreshToken: {
        type:String,
        default:" "
    }
})
const Admin = mongoose.model('Admin',adminSchema)
export default Schema