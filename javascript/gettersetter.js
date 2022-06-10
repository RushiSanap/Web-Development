class Car {
	constructor(brand) {
		this._carname = brand;
	}

	get carname() { 
		return this._carname;
	}

	set carname(x) {
		this._carname = x;
	}

}

let myCar = new Car("Ford");
console.log("Before calling the setter\ncarname =  " + myCar.carname);
myCar.carname = "Volvo";
console.log("After calling the setter\nCarname =  " + myCar.carname);	

