document.getElementById('create-task').addEventListener('click', function (e) {
    e.preventDefault(); 
// Creates a new task on click event and performs function that will prevent form submission when in its default state (not filled in)
//For future development of project, could replace getElementByID for querySelectorAll '.create-task'. 
//This would mean other code could be written to restore a recently deleted task, using the same 'create task' code by referencing the create task function.

// Get task details from the input fields
// Create a unique ID for each task
const taskId = "task-" + new Date().getTime(); // this creates unique id based on timestamp
// then procee with the rest of the details
const taskName = document.getElementById('task-name').value;
const taskDesc = document.getElementById('task-desc').value;
const d = new Date(document.getElementById('due-date').value);
const dueDate = d.toDateString();

// Generate error message
const errorMessage = document.getElementById("error-message");
//Clear previous error message
errorMessage.textContent = "";

//Check if task name is provided. If not, display error message.
if (taskName === "") {
    errorMessage.textContent = "Error: Task name is required.";
    return; // Stop the execution if the task name is missing
}

//Create a new task box
const taskBox = document.createElement("div");
taskBox.classList.add("task-box");
taskBox.setAttribute("draggable", "true");
taskBox.setAttribute("id", taskId); // Set unique ID
//Function
taskBox.ondragstart = function (ev) {
    dragstart_handler(ev);
    taskBox.ondragstart = dragstart_handler(ev);
};

// Create the delete button per task
const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-task');
deleteButton.innerText = 'Delete';

// Create the edit button per task
const editButton = document.createElement('button');
editButton.classList.add('edit-task');
editButton.innerText = 'Edit';

//Creating task header
const taskHeader = document.createElement("div");
taskHeader.classList.add("task-header");

//Creating checkbox
const checkbox = document.createElement("input");
checkbox.type = "checkbox";

//creating task title portion
const taskTitle = document.createElement("div");
taskTitle.classList.add("task-title");
taskTitle.innerText = taskName;

//Add checkbox and add task title to the task header section of the task box created by the user
taskHeader.appendChild(checkbox);
taskHeader.appendChild(taskTitle);

// Due date
const dueDateElement = document.createElement('div');
dueDateElement.type = 'date';
dueDateElement.classList.add('due-date');
dueDateElement.innerText = 'Due by: ' + dueDate;

// Task details
const details = document.createElement('div');
details.classList.add('details');
details.innerText = taskDesc;

///////////////

// Cannot call functions unless create action works

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

// Delete button
deleteButton.addEventListener('click', function () {
    deleteTask(deleteButton);
});
// Edit button
editButton.addEventListener('click', function () {
    editTask(editButton);
});

///////////////

// Assemble the task box
taskBox.appendChild(taskHeader);
taskBox.appendChild(dueDateElement);
taskBox.appendChild(details);
taskBox.appendChild(toggleStrip); 
taskBox.appendChild(deleteButton);
taskBox.appendChild(editButton);

// Check innerHTML of task, can later use input verification to check characters and length
/*taskBox.innerHTML = `
            <h3>${taskName}</h3>
            <p>${taskDesc}</p>
            <p>Due: ${dueDate}</p>
            <button class="delete-task" onclick="deleteTask(this)">Delete</button>
            <button class="edit-task" onclick="editTask(this)">Edit</button>
        `;*/       

// Add the task box to the task list
document.querySelector('.task-list').appendChild(taskBox);

// Clear input fields after creating the task
document.getElementById('task-name').value = '';
document.getElementById('task-desc').value = '';
document.getElementById('due-date').value = '';

/**********************************************************************************/
    // AJAX request to send data to the server
    fetch('/create-task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task_id: taskId, task_title: taskName, task_description: taskDesc })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Optionally, you can add code here to update the UI or notify the user
		console.log('Task added to database');
    })
    .catch(error => console.error('Error:', error));
//});
/**********************************************************************************/
});  // End of create task listener




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

// DONE: Change to be compatible with tasks in the code and finish to function properly

//delete task function
function deleteTask(button) {
    //get the parent element of the delete button such that it can be deleted
    const task = button.parentElement;
    task.remove();
}

//edit task function
function editTask(button) {
    //get parent element, which is taskBox
    const task = button.parentElement;
    //set the elements within the task box, all h3, all p tags
    const taskName = task.querySelector('div').innerText;
    const dueDate = task.querySelectorAll('div')[2].innerText;
    const taskDesc = task.querySelectorAll('div')[3].innerText;
    var newDate = new Date(dueDate);
    const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(newDate.getDate()).padStart(2, '0');
    const year = newDate.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;
    //newDate = Date.parse(newDate);
    //prompt(formattedDate);
    //get each tag value and set it to the first element that matches
    document.getElementById('task-name').value = taskName;
    document.getElementById('task-desc').value = taskDesc;
    document.getElementById('due-date').value = formattedDate;
    //remove the task such that it can be edited then recreated
    task.remove();
}

//drag and drop functions
function dragstart_handler(ev) {
	console.log("dragStart");
	ev.dataTransfer.setData("text/plain", ev.target.id); // Pass the task id
	ev.currentTarget.style.border = "outset"; // Visual cue that drag has started
	var dti = ev.dataTransfer.items;
	if (dti === undefined || dti == null) {
		console.log("Browser does not support DataTransferItem interface");
		return;
	}
	// Change the source element's background color to signify drag has started
	ev.currentTarget.style.border = "dashed";
	// Add the id of the drag source element to the drag data payload so
	// it is available when the drop event is fired
	dti.add(ev.target.id, "text/plain");
	// Tell the browser both copy and move are possible
	ev.effectAllowed = "copyMove";
}

document.querySelectorAll(".column").forEach((column) => {
	column.addEventListener("dragover", function (ev) {
		ev.preventDefault(); // allow dropping
		column.classList.add("drag-over"); // visual cue when dragging over
	});

	column.addEventListener("dragleave", function (ev) {
		column.classList.remove("drag-over");
	});

	column.addEventListener("drop", function (ev) {
		ev.preventDefault();
		column.classList.remove("drag-over");
		const taskId = ev.dataTransfer.getData("text"); // Get the id of the dragged task
		const taskElement = document.getElementById(taskId);
		column.appendChild(taskElement); // Move the task to the new column
		taskElement.style.border = "solid"; // Reset border after drop
	});
});

/* Toggle the dropdown menu visibility */
function filterFunction() {
	document.getElementById("filterDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	// Check if the click is outside the filter button or dropdown content
	if (
		!event.target.matches(".filterdropbtn") &&
		!event.target.closest(".filter-content")
	) {
		var dropdowns = document.getElementsByClassName("filter-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

/* Toggle the dropdown menu visibility */
function sortFunction() {
	document.getElementById("sortDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	// Check if the click is outside the filter button or dropdown content
	if (
		!event.target.matches(".sortdropbtn") &&
		!event.target.closest(".sort-content")
	) {
		var dropdowns = document.getElementsByClassName("sort-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains("show")) {
				openDropdown.classList.remove("show");
			}
		}
	}
};

renderTodos();
saveTodos();