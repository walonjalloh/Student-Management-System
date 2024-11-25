import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema

const deanSchema = new Schema({
    fullname: {
        type:String,
        required:True
    },
    faculty: {
        type:String,
        required:true
    },
})

const Dean = mongoose.model('Dean', deanSchema)

export default Dean