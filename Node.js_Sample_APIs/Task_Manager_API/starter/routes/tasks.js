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
    //res.send('All items')         //get and post paths are the same //CHAIN CONTROLLERS
    getAllTasks).post(createTask);  //function written in controllers
//});

//TEST SECOND ROUTER TO SEND IMAGE---USING MULTIPLE ALIASES
const router2 = express.Router()
router2.route('/img_1').get((req, res)=>{
    res.send('Image_1')
});
router2.route('/img_2').get((req, res)=>{
    res.send('Image_2')
});

router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
//get, patch, delete paths are the same per task id

//send it from routes to app.js
module.exports = router;
module.exports = router2; //TEST SECOND ROUTER TO SEND IMAGE