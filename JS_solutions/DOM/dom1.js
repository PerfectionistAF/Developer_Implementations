// The Document Object Model (DOM) lets JavaScript interact with the structure of a webpage, making it more dynamic and interactive

// A good analogy is thinking of the DOM as a tree where each element (like a <div>, <p>, or <button>) is a branch or leaf. JavaScript allows you to reach into this tree and change things: add new branches, change leaves, or remove parts of the tree.

// The DOM is useful whenever you want to update or interact with the user interface dynamically. For example, when you:
// Click a button and a popup appears.
// Submit a form and see an error message without the page refreshing.
// Load new content as you scroll down (like on social media).

// console.log("Hello from the console!");

// document.write("Hello from Javascript!")

const extraText = document.getElementById("extra-text").textContent;
let result = "";

for (let i = 0; i < 10; i++) {
  result += extraText + " " + i;
}

prompt("result");
console.log(result);
prompt("extraText");
console.log(extraText);
document.getElementById("extra-text").textContent = result;
