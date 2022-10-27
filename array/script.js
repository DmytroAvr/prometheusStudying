let numbers = [4, 10, 23, 100, 80, 35, 0, 11];
let result = [];
let numFilter = numbers.filter((item) => {
	return item > 10;
	// *.filter() - будет наполнять массив item которыу true
	// *.find() - принцып такойже но вернет ПЕРВЫЙ true
	// *.findIndex - вернет index ПЕРВого true... если нет, вернет -1
});

//console.log(result);

numFilter.forEach(function (item, index, array) {
	const obj = {
		num: item
	}
	result.push(obj); 
})

console.log(result);




//let numbers = [4, 10, 23, 100, 80, 35, 0, 11];
//let result = numbers.filter(item => item > 10).map(item => ({ num: item }));

//
//
//
//
//

const str = "hello";
let reverseString = str.split('').reverse().join('');

console.log(reverseString);
//const reverseString = array1.;
//console.log(reverseString.join(''));
