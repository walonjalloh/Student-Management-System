import mongoose from "mongoose";
const Schema = mongoose.Schema

const gradeSchema = new Schema({
    totalGrade: {
        type:Number,
        default:0
    }
})

const Grade = mongoose.model('Grade',gradeSchema)

export default Grade