import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema

const deanSchema = new Schema({
    fullname: {
        type:String,
        required:True
    },
    password:{
        type:String,
        required: true
    },
    refreshToken: {
        type:String,
        default:""
    },
    faculty: {
        type:String,
        required:true
    },
    numberOfHod :{ 
        type:Number,
        default: 0
    },
    numberOfDepartment : {
        type:Number,
        default:0
    }
})

const Dean = mongoose.model('Dean', deanSchema)

export default Dean