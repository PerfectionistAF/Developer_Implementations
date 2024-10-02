//DOM: document object model
//console.log("Hello from week 4")
//document.write("Hello")  //on the screen itself

//get element by id from html and change it in the JS (static content can be dynamically changed)
//const extra_text = document.getElementById('extratext');
//console.log(extra_text);

function convertCurrency(){
	//console.log("Convert my currency")
	
	//first how much do we have in money
	const GBP = document.getElementById("gbp").value   ////textContent only for strings
	//console.log("GBP Amount:" , GBP);
	
	const exchangeRate = 38
	const EGP = GBP * exchangeRate
	//console.log(EGP);
	document.getElementById("egp").textContent = EGP;
}

///Create your own elements
//function createHeading(){
    let heading = document.createElement("h2");
    heading.textContent = "Page Title";
    heading.style.color = "red";
    document.body.appendChild(heading);
//}

