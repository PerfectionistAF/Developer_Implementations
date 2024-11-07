//test print
//START WITH----------------------- NPM START
//console.log('Task Manager App')

//set up basic express server
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const images = require('./routes/routers2'); //TEST SECOND ROUTER TO SEND IMAGE

//to access data via middleware as json
app.use(express.json())

//routes
//get request in js
app.get('/hello', (req, res) => {    //request, response
    res.send('Task Manager App') //send hardcoded response
});

app.use('/', images) //either use an alias in the endpoint routes or use it in the app routes 

//REST API
//get api/v1/tasks
//post api/v1/tasks
//get api/v1/tasks/:id
//put/patch api/v1/tasks/:id
//delete api/v1/tasks/:id

//get request to view everything
app.use('/api/v1/tasks', tasks)  //comment to show response under each route
app.get('/api/v1/tasks', (req, res) => {
    res.send('get request') //low priority to the routes/tasks.js
});

//SET UP POSTMAN TO TEST API---GET {{URL}}/tasks----DONE

//post to add a task
app.post('/api/v1/tasks', (req, res) => {
    res.send('post request')
})

//get a single task by id----TEST ON POSTMAN


//edit task by id  //put vs patch 
//delete by id if applicable



const port = 3000;

app.listen(port, 'localhost', console.log('server is listening on port', port));