//if function which is passed as an argument to the another function is not having any argument 

setTimeout(myFunction, 3000);

function myFunction() {
	console.log("I Love You!");
}

//if the function is having the argument

setTimeout(function() {myfunction("I Love You!");}, 3000);


function myfunction(value) {
	console.log(value);
}
