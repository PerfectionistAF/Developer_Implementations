const express = require('express')
const {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask,
    deleteTask } = require('../controllers/tasks')
//not practical to work on the app drive
const router = express.Router()

router.route('/').get(//(req, res)=>{
    //res.send('All items')
    getAllTasks).post(createTask);  //function written in controllers
//});
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

//send it from routes to app.js
module.exports = router;