const person = {
	firstname: "Rushikesh",
	lastname: "Sanap", 
	id: 5566, 
	fullname: function() {
		return this.firstname + " " + this.lastname;
	}
};
console.log(person.fullname());
