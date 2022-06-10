let text = '{"employees" : [' + 
	'{"firstname": "John", "lastname":"Doe"},' +
	'{"firstname": "Anna", "lastname":"Smith"},' +
	'{"firstname": "Peter", "lastname":"Jones"}]}'
const obj = JSON.parse(text);
console.log(obj);
