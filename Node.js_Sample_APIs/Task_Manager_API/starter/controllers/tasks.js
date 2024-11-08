//dont double require
const Task = require('../models/task'); //import the model

//create controller function
const getAllTasks = async (req, res)=>{
    //res.send('All items from the controller')
    try{
        const tasks = await Task.find({});//tasks});
        res.status(200).json({tasks})  //200 is the code used for successful get request
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
const createTask = async (req, res)=>{
    //res.send('Create item from the controller')
    //res.json(req.body) //send json data from postman, whatever from the client
    try{
        const task = await Task.create(req.body);//{name:'Test', completed:true})  
        res.status(201).json({task})  //201 is the code used for successful post request
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
const getTask = async (req, res)=>{
    //res.send('Get a single item from the controller')
    //res.json({id: req.params.id})  //get id from given path and pass it as a parameter
    try{
        const single_task = await Task.findById({id: req.params.id}).exec();
        const {id:taskID} = req.params.id;
        //const task = await Task.findOne({_id:taskID});
        if(!single_task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({single_task})  //200 is the code used for successful get request
    }
    catch(error){
        res.status(500).json({msg:error})
    }
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