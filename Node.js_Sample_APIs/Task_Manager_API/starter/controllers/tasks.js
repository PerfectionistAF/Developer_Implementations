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
        const {id:taskID} = req.params; 
        const single_task = await Task.findOne({_id:taskID}).exec();//findById(taskID);
        if(!single_task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({single_task})  //200 is the code used for successful get request
    }
    catch(error){
        res.status(500).json({msg:error})
    }
    //if wrong id syntax then Cast Error
}
const deleteTask = async (req, res)=>{
    //res.send('Delete a single item from the controller')
    try{
        const {id:taskID} = req.params   //id is in the schema
        const single_task = await Task.findOne({_id:taskID}).exec();
        //const task = await Task.findByIdAndDelete(taskID);  //findByIdAndDelete is a mongoose method 
        if(!single_task){  //!task
            return res.status(404).json({msg:`No task with id or may have been deleted: ${taskID}`})
        }
        await Task.deleteOne({_id:taskID});  //_id is in the json
        //res.status(200).send()
        //res.status(200).json({single_task:null, status:'success'});
        res.status(200).json({single_task});
        //res.status(200).json({msg:`Task with id: ${taskID} has been deleted successfully`});
    }
    catch(error){
        res.status(500).json({msg:error})
    }
    
}
const updateTask = async (req, res)=>{
    //res.send('Update a single item from the controller')
    try{
        //setTimeout(()=>{res.send(res.json({id: req.params.id, data:req.body}))}, 10000);
        const {id:taskID} = req.params
        //findByIdAndUpdate: find by ID returns object, not compatible with AXIOS files in public/browser-app.js
        
        const task =  await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true, runValidators:true
        })
        if(!task){
            return res.status(404).json({msg:`No task with id: ${taskID}`})
        }
        res.status(200).json({task})//{msg:`Task with id: ${taskID} has been updated successfully`})//id:taskID, data:req.body})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}
//send it from controller to routes
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}