import mongoose from "mongoose";
 
// Create the User Schema
const TaskSchema = mongoose.Schema({

    date: {
        type: Date,
        required: true,
    },
    descripition: {
        type: String,
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: null
    },
    deletedDate: {
        type: Date,
        default: null
    }
});
 
const Task = mongoose.model('task', TaskSchema)
export default Task
