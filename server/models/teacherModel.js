import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema

const teacherSchema = new Schema({
    fullname:{
        type:String,
        required:true
    },
    isHod: {
        type:Boolean,
        required:true
    },
    modules: [{
        type:String,
        default: []
    }],
    isDean: {
        type:Boolean,
        required:true
    },
    department: {
        type:String,
        required:true
    }

})

const Teacher = mongoose.model('Teacher', teacherSchema)
export default Teacher