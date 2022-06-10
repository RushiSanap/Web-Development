const person = {
	name: "Rushikesh", 
	age: 30, 
	city: "Nashik"
};

//displaying the object using name
console.log(person.name + " " + person.age + " " + person.city);

//displaying the object in a loop

for(let prop in person) {
	console.log(prop + " = " + person[prop]);
}

//converting object to array
const myArray = Object.values(person);
console.log(myArray);

//convert object into a string
let myString = JSON.stringify(person);
console.log(myString);
