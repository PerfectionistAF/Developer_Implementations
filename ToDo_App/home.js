document.getElementById('create-task').addEventListener('click', function (e) {
    e.preventDefault(); 
// Creates a new task on click event and performs function that will prevent form submission when in its default state (not filled in)
//For future development of project, could replace getElementByID for querySelectorAll '.create-task'. This would mean other code could be written to restore a recently deleted task, using the same 'create task' code by referencing the create task function.

// Get task details from the input fields
const taskName = document.getElementById('task-name').value;
const taskDesc = document.getElementById('task-desc').value;
const dueDate = document.getElementById('due-date').value;

// Create a new task box
const taskBox = document.createElement('div');
taskBox.classList.add('task-box');

// Task header with checkbox and title
const taskHeader = document.createElement('div');
taskHeader.classList.add('task-header');

const checkbox = document.createElement('input');
checkbox.type = 'checkbox';

const taskTitle = document.createElement('div');
taskTitle.classList.add('task-title');
taskTitle.innerText = taskName;

taskHeader.appendChild(checkbox);
taskHeader.appendChild(taskTitle);

// Due date
const dueDateElement = document.createElement('div');
dueDateElement.classList.add('due-date');
dueDateElement.innerText = 'Due by: ' + dueDate;

// Task details
const details = document.createElement('div');
details.classList.add('details');
details.innerText = taskDesc;

///////////////

// Toggle strip for task details with arrow SVG
const toggleStrip = document.createElement('div');
toggleStrip.classList.add('toggle-strip');
toggleStrip.innerHTML = `
<svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 16l-6-6h12z"/>
</svg>
`;

toggleStrip.addEventListener('click', function () {
if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    toggleStrip.querySelector('.arrow').style.transform = 'rotate(180deg)';
} else {
    details.style.display = 'none';
    toggleStrip.querySelector('.arrow').style.transform = 'rotate(0deg)';
}
});

///////////////

// Assemble the task box
taskBox.appendChild(taskHeader);
taskBox.appendChild(dueDateElement);
taskBox.appendChild(details);
taskBox.appendChild(toggleStrip);

// Add the task box to the task list
document.querySelector('.task-list').appendChild(taskBox);

// Clear input fields after creating the task
document.getElementById('task-name').value = '';
document.getElementById('task-desc').value = '';
document.getElementById('due-date').value = '';
});

///////////////

const storedTodos = localStorage.getItem("todos");

let todos;

if (storedTodos) {
todos = JSON.parse(storedTodos);
} else {
todos = []
}

function saveTodos() {
localStorage.setItem("todos", JSON.stringify(todos));
}

//Render items
function renderTodos() {
const todoList = document.getElementById("todo-input");
} 
//Change to be compatible with tasks in the code and finish to function properly