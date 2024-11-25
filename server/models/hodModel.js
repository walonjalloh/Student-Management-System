import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema

const hodSchema = new Schema({
    fullname: {
        type:String,
        required:true
    },
    department: {
        type:String,
        required:true
    },
})

const HOD = mongoose.model('HOD',hodSchema)
export default HOD