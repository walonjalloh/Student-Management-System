import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    faculty: {
        type:String,
        required:true
    }
})

const Department = mongoose.model('Department',departmentSchema)
export default Department