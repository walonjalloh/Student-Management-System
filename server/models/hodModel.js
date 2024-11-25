import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema

const hodSchema = new Schema({
    fullname: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    department: {
        type:String,
        required:true
    },
    faculty: {
        type:String,
        required:true
    },
    refreshToken: {
        type:String,
        default: ""
    },
    numberOfTeacher: {
        type:Number,
        default: 0
    },
    numberOfModules:{
        type:Number,
        default: 0
    },
    numberOfStudent: {
        type:String,
        default: 0
    }

})

const HOD = mongoose.model('HOD',hodSchema)
export default HOD