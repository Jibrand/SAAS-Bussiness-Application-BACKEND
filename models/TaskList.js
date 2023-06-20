import mongoose from "mongoose";
const TaskListSchema = mongoose.Schema({
 
    projectName: {
        type: String,
    },
    task: { 
        type: String,
    },
     taskNotes: {
        type: String,
    },
     taskStatus: { 
        type: String,
        required: true
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


 
const TaskList = mongoose.model('taskList', TaskListSchema)
export default TaskList
