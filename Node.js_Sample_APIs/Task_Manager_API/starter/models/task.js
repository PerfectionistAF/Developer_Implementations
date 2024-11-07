const mongoose = require('mongoose');

//schema is how the tables 
const TaskSchema = new mongoose.Schema({ ///no set structure so requires external schema
//Database Schema(Mongoose): The actual structure of the database, including tables, columns, data types, and constraints.
//Data Model(SQL): A conceptual representation of the data and its relationships, used to design the database schema.
    name:String, completed:Boolean
    //ONLY PROPERTIES HERE WILL BE PASSED TO DATABASE
});

module.exports = mongoose.model('Task', TaskSchema); //go to controller then start using the model