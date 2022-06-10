let x = "ABC";
let arr = [];
let index = 0;
for(let y of x) {
	let t = y.charCodeAt() - 64;
	console.log(t);
	arr[index++] = t;
}

