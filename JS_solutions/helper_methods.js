//array stores multiple items, use []
//index arrays to access array elements, start at 0
let fruits = ["apple", "plum", "cherry", "banana", "pear", "kiwi"];

//ACCESSING ELEMENTS
//primitive or reference datatypes, arrays are reference data types because they occupy addresses in the memory and we just access the values there 
console.log(fruits[3]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); //print last element

//HELPER OR IMPUTE METHODS: PUSH: add element to array, POP: remove element from array, SHIFT, LENGTH
//we can implement them manually (ie without PUSH and POP)

function push(array, element){
	length = array.length + 1;
	array[length - 1] = element;
	console.log(array);
}
//IMPLEMENT PUSH AND USE HELPER FUNCTION USING THE SAME NAME 
push(fruits, "avocado");
fruits.push("mango");
console.log("AFTER PUSH:" + fruits);

function pop(array){
	//length = array.length - 1;
	//delete array[length]; 
	array.pop(); // This removes the last element
	console.log(array); // Logs the updated array
}

//The delete keyword is used to remove properties from objects, but it's not used to remove elements from arrays

pop(fruits);
fruits.pop();
//EXPECT TO POP LAST 2 ELEMENTS, AVOCADO AND MANGO
console.log("AFTER POP:" + fruits);

//REFERENCE DATATYPES: ARRAYS, FUNCTIONS, OBJECTS
//OBJECTS

//Constant Objects
const apple = 
			{
				name: "Granny Smith",
				colour: "Green",
				country: "China"
			};

//Dot notation to access data memebers
console.log(apple.name + " APPLES");

//Nested Objects
let girl = //FIRST GIRL
			{
				name: "Sohayla",
				age: 23,
				friends: ["A", "B", "C"],
				haircolour: "brown"
			};

console.log("First friend: " + girl.friends[0]);

let HUMAN =
		{
			girl : 
			{
				name: "Sohayla",
				age: 23,
				friends: ["A", "B", "C"],
				haircolour: "brown"
			},
			boy :
			{
				all: 
				["name: Albert", " age: 33 ", "haircolour: pink"]
			},
		};
console.log("My girl:\n" + HUMAN.girl.friends[2]);
console.log("My boy:\n" + HUMAN.boy.all);

//console.log(human.boy.name, human.boy.age, human.boy.haircolour);

//FOR LOOPS
for(let i = 0; i < fruits.length; i++){
	//On new lines:
	//console.log(fruits[i]);
	//On same line several times:
	let str = fruits.join('**')+'.';  //delimiter is *
	console.log(str);
}

//WHILE LOOPS
let countdown = 5;
while(countdown > 0){
	console.log(countdown);
	console.log(fruits[countdown]);
	--countdown;//--;   //try to decrement first before checking condition, 0 will not be printed because condition is false before even printing 
	//if ++ then infinite loop because condition is forever true
}