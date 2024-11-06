//dont double require
//create controller function
const getAllTasks = (req, res)=>{
    res.send('All items from the controller')
}
const createTask = (req, res)=>{
    res.send('Create item from the controller')
}
const getTask = (req, res)=>{
    res.send('Get a single item from the controller')
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