function Person(first, last, age, eyecolor) {
	this.firstname = first;
	this.lastname = last;
	this.age = age;
	this.eyeColor = eyecolor;
}

Person.prototype.nationality = "Indian";
let father = new Person("Vinod", "Sanap", 42, "blue");
console.log(father.nationality);

