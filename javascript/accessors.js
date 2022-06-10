const person = {
	firstname: "Rushikesh", 
	lastname: "Sanap", 
	language: "en",
	//get the language property
	get lang() {
		return this.language.toUpperCase();
	}
};

console.log(person.lang);
