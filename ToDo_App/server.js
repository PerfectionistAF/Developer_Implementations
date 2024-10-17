// Server side file to handle requests from client side
// prepare MySQL extension and create a connection to the database
// then check this file

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const db = mysql.createConnection({  //with xampp server running
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'js_mysql'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to database');
});

app.post('/create-task', (req, res) => {
    const { task_id, task_title, task_description } = req.body;
    const sql = 'INSERT INTO tasks (task_id, task_title, task_description) VALUES (?, ?, ?)';
    db.query(sql, [task_id, task_title, task_description], (err, result) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error executing query');
            return;
        }
        res.send('Task added to database');
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});