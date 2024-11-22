import mongoose from "mongoose";
import Student from "./studentModel";

const Schema = mongoose.Schema

const gpaSchema = new Schema({
    level: {
        type:String,
        required:true
    },
    gpa: {
        type:Number,
        required:true
    },
    studentName: {
        type:String,
        required:true
    }
})

const GPA = mongoose.model('GPA',gpaSchema)

export default GPA