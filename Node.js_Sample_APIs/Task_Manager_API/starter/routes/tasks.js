const express = require('express')
//not practical to work on the app drive
const router = express.Router()
const {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask,
    deleteTask } = require('../controllers/tasks')

router.route('/').get(//(req, res)=>{
    //res.send('All items')         //get and post paths are the same //CHAIN CONTROLLERS
    getAllTasks).post(createTask);  //function written in controllers
//});
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
//get, patch, delete paths are the same per task id

//send it from routes to app.js
module.exports = router;
