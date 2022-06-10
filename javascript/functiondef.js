//defined using function keyword
function myFunction(a, b) {
	return a*b;
}

//defined using an expression
//stored in some variable 
//that variable can be used as a function
//function without name is known as anonymous function
//function below is an anonymous function
const x = function (a, b) {return a*b;}

console.log(myFunction(3, 5));
console.log(x(3,5));

//arrow functions
const y = (x, y) => x*y;
//good practise of writing arrow functions
const r = (x, y) => {return x*y};
console.log(y(3,5));

