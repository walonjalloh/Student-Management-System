import mongoose from "mongoose";
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    numberOfStudent: {
        type:Number,
        default: 0
    },
    modules: [{
        type:String,
        default:[]
    }],
    numberOfTeacher: {
        type:Number,
        default:0
    }
})
const Department = mongoose.model('Department',departmentSchema)
export default Department