# Task Scheduler

## Overview

Task Scheduler is a web application that allows users to create, manage, and organize tasks. Users can add tasks with descriptions and due dates, and categorize them into different columns such as "Urgent", "In Progress", "Complete", and "Backlog". The application also supports drag-and-drop functionality for easy task management.

## Features

- Create tasks with a title, description, and due date using DOM manipulation.
- Edit and delete tasks.
- Drag and drop tasks between different columns using DataTransfer Objects.
- Filter and sort tasks based on different criteria.
- Store tasks as JSON objects in the current session. 
- Store tasks in a MySQL database using a Node.js server. (Persistent storage not ready)
- Responsive design with a clean and intuitive user interface.

## Technologies Used

- Frontend: HTML, CSS, JavaScript
- Backend: Javascript, and extra features in Node.js, Express
- Database: MySQL (extra)
- Styling: CSS Flexbox

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL server (e.g., XAMPP) running on your machine.

### Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/task-scheduler.git
   cd task-scheduler
**You can directly access the home.html file to test it out, just clone the repo:** 

2. **Install dependencies:**
   ```sh
   npm install express mysql body-parser

3. **Import or create database:**
   Import the .sql file or create a database from the XAMPP shell as follows:
   ```sh
   CREATE DATABASE js_mysql;
   USE js_mysql;
   CREATE TABLE tasks (
    task_id VARCHAR(255) PRIMARY KEY,
    task_title VARCHAR(255) NOT NULL,
    task_description TEXT,
    due_date DATE
    );

4. **Test the NodeJs server:**
   ```sh
   node server.js


## Acknowledgements
Thanks to the developers of the libraries and tools used in this project. Thank you to @ale11ik for contributing. 🖤
