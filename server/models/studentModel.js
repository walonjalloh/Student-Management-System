import mongoose from "mongoose";

const Schema = mongoose.Schema

const studentSchema = new Schema({
    fullname: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    refreshToken: {
        type:String,
        default:""
    },
    level: {
        type:String,
        required: true
    },
    department: {
        type:String,
        required:true
    },
    enrollementDate: {
        type:Date,
        required:true
    },
    faculty: {
        type:String,
        required:true
    },
    grades: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Grades',
    },
    email: {
        type:String,
        required:true
    },
    gpa: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Gpa'
    }],
    profilePicture: {
        type:String,
        required:true
    },
    modules: [{
        type:String,
        default: []
    }]


})

const Student = mongoose.model('Student', studentSchema)
export default Student