// Select all elements from our HTML document
// with the class name "my-class"

let myClass = document.getElementsByClassName("my-class");

// Loop trough the "my-class" elements
// and change their colour and font style
for (let i = 0; i < myClass.length; i++) {
  myClass[i].style.color = "red";
  myClass[i].style.fontStyle = "italic";
}
