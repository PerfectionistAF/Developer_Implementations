const mongoose = require('mongoose');

//schema is how the tables 
const TaskSchema = new mongoose.Schema({ ///no set structure so requires external schema
//Database Schema(Mongoose): The actual structure of the database, including tables, columns, data types, and constraints.
//Data Model(SQL): A conceptual representation of the data and its relationships, used to design the database schema.
    name:{
        type:String,
        required:[true, 'Must provide name'],
        trim:true,
        length:[20, 'Name cannot be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    },
    //ONLY PROPERTIES HERE WILL BE PASSED TO DATABASE
});
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task; //go to controller then start using the model