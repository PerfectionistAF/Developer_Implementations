//test print
//START WITH----------------------- NPM START
//console.log('Task Manager App')

//set up basic express server
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

//to access data via middleware as json
app.use(express.json())

//routes
//get request in js
app.get('/hello', (req, res) => {    //request, response
    res.send('Task Manager App') //send hardcoded response
});
//get request to view everything
app.use('/api/v1/tasks', tasks)

//SET UP POSTMAN TO TEST API----DONE


//get a single task by id
//post to add a task
//edit task by id  //put vs patch 
//delete by id if applicable



const port = 3000;

app.listen(port, 'localhost', console.log('server is listening on port', port));