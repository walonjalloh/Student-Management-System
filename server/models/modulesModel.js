import mongoose from "mongoose";

const Schema = mongoose.Schema

const moduleSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    totalStudent: {
        type:Number,
        default: 0
    },
    teacherName: {
        type:String,
        required:true
    },
    grades: {
        type:Number,
        default:0
    }
})

const Modules = mongoose.model('Modules',moduleSchema)
export default Modules