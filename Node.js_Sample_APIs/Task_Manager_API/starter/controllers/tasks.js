//dont double require
const Task = require('../models/task'); //import the model

//create controller function
const getAllTasks = (req, res)=>{
    res.send('All items from the controller')
}
const createTask = async (req, res)=>{
    //res.send('Create item from the controller')
    //res.json(req.body) //send json data from postman, whatever from the client
    const task = await Task.create(req.body);//{name:'Test', completed:true})  
    res.status(201).json({task})  //201 is the code used for successful post request
}
const getTask = (req, res)=>{
    //res.send('Get a single item from the controller')
    res.json({id: req.params.id})  //get id from given path and pass it as a parameter
}
const updateTask = (req, res)=>{
    res.send('Update a single item from the controller')
}
const deleteTask = (req, res)=>{
    res.send('Delete a single item from the controller')
}
//send it from controller to routes
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}