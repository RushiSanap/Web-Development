class car {
	constructor(brand) {
		this.carname = brand;
	}

	present() {
		return "I have a " + this.carname;
	}
}

class model extends car {
	constructor(brand, model) {
		super(brand);
		this.model = model;
	}
	
	show() {
		return this.present() + ", it is a " +this.model;
	}
}

let myCar = new model("Ford", "Mustag");
console.log(myCar.show());

