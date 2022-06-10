const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

for(const x of fruits.keys()) {
	console.log(x);
}

for(const x of fruits.values()) {
	console.log(x);
}
