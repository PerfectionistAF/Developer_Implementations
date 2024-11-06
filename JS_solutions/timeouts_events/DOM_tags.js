// Select all p elements from our HTML document
// and form a collection

let paragraphs = document.getElementsByTagName("h1");

// Loop trough the collection of p elements
// and change their colour and font family
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "green";
  paragraphs[i].style.fontFamily = "sans-serif";
}

//try with an image
let image = document.getElementById("img"); //getElementsByTagName("img");
//getElementById("img").item(0); or innerHTML
image.style.border = "thick solid red"; //"thick solid #0000FF";
//"width style color|initial|inherit"
