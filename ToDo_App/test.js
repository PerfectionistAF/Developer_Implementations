const dueDate = task.getElementByClass('due-date').innerText;
var newDate = dueDate.substr(8, dueDate.length);
newDate = Date.parse(newDate);
console.log(newDate);