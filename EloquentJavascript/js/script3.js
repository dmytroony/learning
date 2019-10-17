// Chapter 1: finished.

//Chapter 2:

// let theNumber = Number(prompt('Enter the number'));
// // console.log('This number is the square root of ' + (theNumber * theNumber));
//
// if (!Number.isNaN(theNumber)) {
// 	console.log('This number is the square root of ' + (theNumber * theNumber));
// } else {
// 	console.log('Why did you enter not a number?!?');
// }

// let num = Number(prompt('Enter the number!'));
//
// if (num < 10) {
// 	alert('Low');
// } else if (num < 100) {
// 	alert('Medium');
// } else {
// 	alert('High');
// }

// let num = 0;
//
// while (num <= 12) {
//
// 	console.log(num);
// 	num += 2;
//
// }

// let result = 1;
// let counter = 0;
//
// while (counter < 10) {
//
// 	result *= 2;
// 	counter++;
//
// 	console.log(counter + ') ' + result);
// }
//
// console.log(result);

// let yourName;
//
// do {
//
// 	yourName = prompt('Who are you?', '');
//
// } while (!yourName);
//
// console.log(yourName);

// let result = 1;
//
// for (let i = 0; i < 10; i++) {
// 	result *= 2;
// 	console.log(i + ') ' + result);
// }
//
// console.log(result);

// for (let current = 20; ; current++) {
//
// 	if (current % 7 === 0) {
//
// 		console.log(current);
// 		break;
//
// 	}
//
// }

//Triangle 1/3
// let a = '#';
// let i = 0;
//
// // v.1
// for (i; i <= 7; i++) {
//
// 	if (a.length === i) {
//
// 		console.log(a);
// 		a = a + '#';
//
// 	}
//
// }
//
// // v.2
// let row = '';
//
// for (let i = 1; i <= 7; i++) {
//
// 	row += '#';
// 	console.log(row);
//
// }

//FizzBuzz 2/3
//
// let a = 'Fizz', b = 'Buzz', result = 1;
//
// for (result; result <= 100; result++) {
//
// 	if ((result % 3 === 0) && (result % 5 === 0)) {
//
// 		console.log(result + ': ' + (a + b));
//
// 	} else if (result % 5 === 0) {
//
// 		console.log(result + ': ' + b);
//
// 	} else if (result % 3 === 0) {
//
// 		console.log(result + ': ' + a);
//
// 	} else {
//
// 		console.log(result + ': ' + result);
//
// 	}
//
// }

//ChessTable 3/3
//
// let i, j, row = '', size = 8;
//
// for (i = 0; i < size; i++) {
//
// 	for (j = 0; j < size / 2; j++) {
//
// 		if (i % 2 === 0) {
// 			row += " ";
// 			row += "#";
// 		} else {
// 			row += "#";
// 			row += " ";
// 		}
//
// 	}
//
// 	row += "\n";
// }
//
// console.log(row);

// Chapter 3:

// const square = function (x) {
// 	return (x * x);
// };
//
// console.log(square(12));

// const makeNoise = function () {
// 	console.log('YEAH-H-H-H!!!');
// };
//
// makeNoise();

// const power = function (base, exponent) {
//
// 	let result = 1;
//
// 	for (let count = 0; count < exponent; count++) {
//
// 		result *= base;
//
// 	}
//
// 	return result;
//
// };
//
// console.log(power(2, 10));

// let x = 10;
//
// if (x === false) {
// 	let y = 20;
// 	var z = 30;
// 	console.log(x + y + z);
// }
//
// console.log(x + z);

// const halve = function (n) {
// 	return n / 2;
// };
//
// let n = 10;
// console.log(halve(100));
// console.log(n);

// const humus = function (factor) {
//
// 	const ingredient = function (amount, unit, name) {
//
// 		let ingredientAmount = amount * factor;
// 		if (ingredientAmount > 1) {
// 			unit += 's';
// 		}
// 		console.log(`${ingredientAmount} ${unit} ${name}`);
//
// 	};
//
// 	ingredient(1, 'bank', 'chickpeas');
// 	ingredient(0.25, 'glass', 'sesame paste');
// 	ingredient(0.25, 'glass', 'lemon juice');
// 	ingredient(1, 'teeth', 'garlic');
// 	ingredient(2, 'tablespoon', 'olive oil');
// 	ingredient(0.5, 'teaspoon', 'cumin');
//
// };
// humus(1);

// Arrow functions

// let launchMissiles = function () {
// 	missileSystem.launch('now');
// };
// if (safeMode) {
// 	launchMissiles() = function () {/* do it nothing */}
// }

// const power = (base, exponent) => {
// 	let result = 1;
// 	for (let count = 0; count < exponent; count++) {
// 		result *= base;
// 	}
// 	return result;
// };
// console.log(power(3, 3));

// const square1 = (x) => {return x * x};
// const square2 = x => x * x;
// // square1 === square2;

// const horn = () => {
// 	console.log('Toot');
// };
// horn();

// console.log('A voice from the past:', future());
// function future() {
// 	return 'There will be no flying cars!';
// }

// Call stack

// function greet(who) {
// 	console.log('Hello, ' + who + '!');
// }
//
// greet('Garry');
// console.log('Bye!');

// Maximum call stack size exceeded
// function chicken() {
// 	return egg();
// }
// function egg() {
// 	return chicken();
// }
// console.log(chicken() + ' was the first.');

// function square(x) {
// 	return x * x;
// }
// console.log(square(4, true, 'hedgehog'));

// function minus(a, b) {
//
// 	if (b === undefined) {
// 		return -a;
// 	} else {
// 		return a - b;
// 	}
//
// }
// console.log(minus(10));
// console.log(minus(10, 5));

// function power(base, exponent = 2) {
//
// 	let result = 1;
//
// 	for (let count = 0; count < exponent; count++) {
// 		result *= base;
// 	}
//
// 	return result;
//
// }
// console.log(power(4));
// console.log(power(2, 6));

// Closure

// function wrapValue(n) {
//
// 	let local = n;
// 	return () => local;
//
// }
//
// let wrap1 = wrapValue(1);
// let wrap2 = wrapValue(2);
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor) {
//
// 	return number => number * factor;
//
// }
//
// let twice = multiplier(2);
// console.log(twice(5));
// // 10

// function person() {
// 	let name = 'Peter';
//
// 	return function displayName() { // displayName() - is the Closure
// 		console.log(name);
// 	};
// }
// let peter = person();
// peter();

// function getCounter() {
//
// 	let counter = 0;
//
// 	return function () {
//
// 		return counter++;
//
// 	}
// }
// let count = getCounter();
// console.log(count()); // 0
// console.log(count()); // 1
// console.log(count()); // 2
// count() - is the Closure

// function init() {
//
// 	let name = "Dmytro"; // name - local variable created 'init()'
//
// 	function displayName() { // displayName() - internal function, a closure
//
// 		console.log(name); // we use a variable declared in the parent function
//
// 	}
//
// 	displayName();
//
// }
// init();

// function makeFunc() {
//
// 	let name = "Dmytro";
//
// 	function displayName() {
//
// 		console.log(name);
//
// 	}
//
// 	return displayName;
//
// }
// let myFunc = makeFunc();
// myFunc();

// function makeAdder(x) {
//
// 	return function (y) {
//
// 		return x + y;
//
// 	};
//
// }
//
// let add5 = makeAdder(5);
// let add10 = makeAdder(10);
//
// console.log(add5(2)); // 7
// console.log(add10(2)); // 12

// function makeSizer(size) {
//
// 	return function () {
// 		document.body.style.fontSize = size + 'px';
// 	};
//
// }
//
// let size12 = makeSizer(12);
// let size14 = makeSizer(14);
// let size16 = makeSizer(16);
//
// document.getElementById('size-12').onclick = size12;
// document.getElementById('size-14').onclick = size14;
// document.getElementById('size-16').onclick = size16;

// let counter = (function() {
//
// 	let privateCounter = 0;
//
// 	function changeBy(val) {
//
// 		privateCounter += val;
//
// 	}
//
// 	return {
// 		increment: function() {
// 			changeBy(1);
// 		},
// 		decrement: function() {
// 			changeBy(-1);
// 		},
// 		value: function() {
// 			return privateCounter;
// 		}
// 	};
//
// })();
//
// console.log(counter.value()); // logs 0
// counter.increment();
// counter.increment();
// console.log(counter.value()); // logs 2
// counter.decrement();
// console.log(counter.value()); // logs 1

// let a = 3;
// function addTwo(x) {
// 	let result;
// 		result = x + 2;
// 	return result;
// }
// let  b = addTwo(a);
// console.log('Example context: ', b);

// function createCalcFunction(n) {
//	
// 	return function () {
// 		console.log(1000 * n);
// 	};
//	
// }
// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
// 	return function (num) {
// 		return n + num;
// 	};
// }
//
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
//
// console.log(addOne(12));
// console.log(addTen(12));

// function urlGenerator(domain) {
// 	return function (url) {
// 		return `https://${url}.${domain}`;
// 	};
// }
// const comUrl = urlGenerator('com');
// const comUaUrl = urlGenerator('ua');
//
// console.log(comUrl('google'));
// console.log(comUrl('netflix'));
//
// console.log(comUaUrl('imena'));
// console.log(comUaUrl('olx'));

// function bind(context, fn) {
// 	return function (...args) {
// 		fn.apply(context, args)
// 	}
// }
//
// function logPerson() {
// 	console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }
//
// const person1 = {name: 'Dmytro', age: 29, job: 'Frontend'};
// const person2 = {name: 'Vasyl', age: 32, job: 'Frontend-Backend'};
//
// bind(person1, logPerson)();
// bind(person2, logPerson)();

// // Lexical Environment
// lexicalEnvironment = {
// 	environmentRecord: {
// 		<identifier> : <value>,
// 		<identifier> : <value>
// 		}
// 	outer: < Reference to the parent lexical environment>
// }

// Prototype
// const person = new Object({
// 	name: 'Dmytro',
// 	age: 25,
// 	greet: function () {
// 		console.log('Greet!');
// 	}
// });
//
// Object.prototype.sayHello = function () {
// 	console.log('Hello!');
// };
//
// const ira = Object.create(person);
// ira.name = 'Iryna';
//
// const str = new String('I am string');
// console.log(str);

// const array = [1, 2, 3, 4, 5];
// // function multBy(arr, n) {
// // 	return arr.map(function (i) {
// // 		return i * n;
// // 	});
// // }
//
// Array.prototype.multBy = function(n) {
// 	return this.map(function (i) {
// 		return i * n;
// 	});
// };
// console.log(array.multBy(2));

// console.log(multBy(array, 15));

// THIS
// function hello() {
// 	console.log('Hello', this);
// }
//
// const person = {
//
// 	name: 'Dmytro',
// 	age: 29,
// 	sayHello: hello,
// 	sayHelloWindow: hello.bind(window),
// 	logInfo: function (job, phone) {
// 		console.group(`${this.name} info:`);
//
// 		console.log(`Name: ${this.name}`);
// 		console.log(`Age: ${this.age}`);
// 		console.log(`Job: ${job}`);
// 		console.log(`Job: ${phone}`);
//
// 		console.groupEnd();
// 	}
//
// };
//
// person.logInfo();
//
// const ira = {
//
// 	name: 'Iryna',
// 	age: 25,
//
// };
//
// // const fnIraInfoLog = person.logInfo.bind(ira, 'Frontend', '+3809999999')();
// // person.logInfo.call(ira, 'Frontend', '+3809999999');
// person.logInfo.apply(ira, ['Frontend', '+3809999999']);

// Recursion

// function power(base, exponent) {
// 	if (exponent === 0) {
// 		return 1;
// 	} else {
// 		return base * power(base, exponent - 1);
// 	}
// }
//
// console.log(power(2, 3));

// function findSolution(target) {
//
// 	function find(start, history) {
//
// 		if (start === target) {
// 			return history;
// 		} else if (start > target) {
// 			return null;
// 		} else {
// 			return find(start + 5, '(' + history + ' + 5)') || find(start * 3, '(' + history + ' * 3)');
// 		}
//
// 	}
// 	return find(1,'1');
//
// }
//
// console.log(findSolution(24));

// Functions

// Calc Farm Inventory

// v.1
// function printFarmInventory(cows, chickens) {
// 	let cowsString = String(cows);
// 	for (; cowsString.length < 3; cowsString = '0' + cowsString){
// 	}
// 	console.log(cowsString + ' Cows');
//
// 	let chickenString = String(chickens);
// 	while (chickenString.length < 3) {
// 		chickenString = '0' + chickenString;
// 	}
// 	console.log(chickenString + ' Chickens');
// }
// printFarmInventory(7, 11);

// v.2
// function printZeroPaddedWidthLabel(number, label) {
//
// 	let numberString = String(number);
// 	while (numberString < 3) {
// 		numberString = '0' + numberString;
// 	}
// 	console.log(numberString + ' ' + label);
//
// }
//
// function printFarmInventory(cows, chickens, pigs) {
//
// 	printZeroPaddedWidthLabel(cows, 'Cows');
// 	printZeroPaddedWidthLabel(chickens, 'Chickens');
// 	printZeroPaddedWidthLabel(pigs, 'Pigs');
//
// }
//
// printFarmInventory(7, 11, 3);

// v.3
// function zeroPad(number, width) {
// 	let string = String(number);
// 	while (string.length < width) {
// 		string = '0' + string;
// 	}
// 	return string;
// }
//
// function printFarmInventory(cows, chickens, pigs) {
// 	console.log(zeroPad(cows, 3) + ' Cows');
// 	console.log(zeroPad(chickens, 3) + ' Chickens');
// 	console.log(zeroPad(pigs, 3) + ' Pigs');
// }
//
// printFarmInventory(7, 16, 3);

// Homework
// Task 1/3
// const minOrMax = (first, second) => first < second ? first : second;
// console.log(minOrMax(32, 212));
//
// Task 2/3
// function isEven(number) {
//
// 	if (number % 2 === 0) {
// 		return true;
// 	} else if (number % 2 === 1) {
// 		return false;
// 	} else if (number % 2 === number * isEven(number, number - 2)) {
// 		return 'recursion';
// 	} else {
// 		return 'The value is not a number!';
// 	}
//
// }
// console.log(isEven(-1));
//
// Task 3/3
//
// 1)
// function countBs(str) {
//
// 	let i = 0, j = 0;
// 	while (i < str.length) {
//
// 		if (str[i] === 'B') {
// 			j += 1;
// 		}
// 		i++;
// 	}
// 	console.log(j);
//
// }
// countBs('Baobab of the Botanic item in Botswana!');
//
// 2)
// function countChar(str, symbol) {
//
// 	let i = 0, j = 0;
// 	while (i < str.length) {
//
// 		if (str[i] === symbol) {
// 			j += 1;
// 		}
// 		i++;
// 	}
// 	console.log(j);
//
// }
// countChar('Baobab of the Botanic item in Botswana!', 'B');

// Chapter 4:

// let listOfNumbers = [2, 3, 5, 7, 11];
// for (let i = 0; i < listOfNumbers.length; i++) {
// 	let num = listOfNumbers[i];
//
// 	console.log(Math.min(num));
// }

// let maximum = Math.max(2, 3, 5);
// let minimum = Math.min(2, 3, 5);
// let sumMaxMin = maximum + minimum;
// console.log(sumMaxMin);
// console.log(typeof sumMaxMin);

// let mack = [];
// mack.push('Trust');
// mack.push('which', 'that', 'has', 'broken');
// let didIt = mack.pop();
// console.log(mack + ' ' + didIt);

// let day1 = {
// 	squirrel: false,
// 	events: ['work', 'touch a three',
// 		'pizza', 'running', 'TV']
// };
// console.log(day1.squirrel);
// day1.wolf = false;
// console.log(day1.wolf);
//
// let descriptions = {
// 	work: 'go to the work',
// 	three : 'touched the three'
// };
// console.log(descriptions.three);

// let anObject = {
// 	left: 1,
// 	right: 2
// };
// console.log(anObject.left);
// delete anObject.left;
// console.log(anObject.left);
// console.log('left' in anObject);
// console.log('right' in anObject);

// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};
// console.log(object1 === object3);
// object1.value = 15;
// console.log(object2.value);
// console.log(object3.value);

// let journal = [
// 	{
// 		events: ['work', 'touched a three',
// 			'pizza', 'running', 'TV'],
// 		squirrel: false
// 	},
// 	{
// 		events: ['work', 'ice cream',
// 			'cauliflower', 'lasagna',
// 			'touched a three', 'brushed teeth'],
// 		squirrel: false
// 	},
// 	{
// 		events: ['outgoing', 'bicycle',
// 			'break', 'peanut', 'beer'],
// 		squirrel: true
// 	},
// ];

// let journal = [];
// function addEntry(events, didITurnIntoASquirrel) {
//
// 	journal.push({
// 		events: events,
// 		squirrel: didITurnIntoASquirrel
// 	});
//
// }
// addEntry(['work', 'touched a three',
// 	'pizza', 'running', 'TV'],
// 	false);
// addEntry(['work', 'ice cream',
// 		'cauliflower', 'lasagna',
// 		'touched a three', 'brushed teeth'],
// 	false);
// addEntry(['outgoing', 'bicycle',
// 		'break', 'peanut', 'beer'],
// 	true);

// function phi(table) {
//
// 	return ( table[3] + table[0] - table[2] * table[1]) /
// 		Math.sqrt(
// 		 (table[2] + table[3]) *
// 			(table[0] + table[1]) *
// 			(table[1] + table[3]) *
// 			(table[0] + table[2])
// 		);
//
// }
// console.log(phi([76, 9, 4, 1]));
//
// let journal = [
// 	{"events":["carrot","exercise","weekend"],
// 		"squirrel":false},
// 	{"events":["bread","pudding","brushed teeth","weekend","touched tree"],
// 		"squirrel":false},
// 	{"events":["carrot","nachos","brushed teeth","cycling","weekend"],
// 		"squirrel":false},
// 	{"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],
// 		"squirrel":false},
// 	{"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],
// 		"squirrel":false},
// 	{"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],
// 		"squirrel":false},
// 	{"events":["pizza","brushed teeth","computer","work","touched tree"],
// 		"squirrel":false},
// 	{"events":["bread","beer","brushed teeth","cycling","work"],
// 		"squirrel":false},
// 	{"events":["cauliflower","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["pizza","brushed teeth","cycling","work"],
// 		"squirrel":false},
// 	{"events":["lasagna","nachos","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["brushed teeth","weekend","touched tree"],
// 		"squirrel":false},
// 	{"events":["lettuce","brushed teeth","television","weekend"],
// 		"squirrel":false},
// 	{"events":["spaghetti","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["brushed teeth","computer","work"],
// 		"squirrel":false},
// 	{"events":["lettuce","nachos","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["carrot","brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["cauliflower","reading","weekend"],
// 		"squirrel":false},
// 	{"events":["bread","brushed teeth","weekend"],
// 		"squirrel":false},
// 	{"events":["lasagna","brushed teeth","exercise","work"],
// 		"squirrel":false},
// 	{"events":["spaghetti","brushed teeth","reading","work"],
// 		"squirrel":false},
// 	{"events":["carrot","ice cream","brushed teeth","television","work"],
// 		"squirrel":false},
// 	{"events":["spaghetti","nachos","work"],
// 		"squirrel":false},
// 	{"events":["cauliflower","ice cream","brushed teeth","cycling","work"],
// 		"squirrel":false},
// 	{"events":["spaghetti","peanuts","computer","weekend"],
// 		"squirrel":true},
// 	{"events":["potatoes","ice cream","brushed teeth","computer","weekend"],
// 		"squirrel":false},
// 	{"events":["potatoes","ice cream","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["peanuts","brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["potatoes","exercise","work"],
// 		"squirrel":false},
// 	{"events":["pizza","ice cream","computer","work"],
// 		"squirrel":false},
// 	{"events":["lasagna","ice cream","work"],
// 		"squirrel":false},
// 	{"events":["cauliflower","candy","reading","weekend"],
// 		"squirrel":false},
// 	{"events":["lasagna","nachos","brushed teeth","running","weekend"],
// 		"squirrel":false},
// 	{"events":["potatoes","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["carrot","work"],
// 		"squirrel":false},
// 	{"events":["pizza","beer","work","dentist"],
// 		"squirrel":false},
// 	{"events":["lasagna","pudding","cycling","work"],
// 		"squirrel":false},
// 	{"events":["spaghetti","brushed teeth","reading","work"],
// 		"squirrel":false},
// 	{"events":["spaghetti","pudding","television","weekend"],
// 		"squirrel":false},
// 	{"events":["bread","brushed teeth","exercise","weekend"],
// 		"squirrel":false},
// 	{"events":["lasagna","peanuts","work"],
// 		"squirrel":true},
// 	{"events":["pizza","work"],
// 		"squirrel":false},
// 	{"events":["potatoes","exercise","work"],
// 		"squirrel":false},
// 	{"events":["brushed teeth","exercise","work"],
// 		"squirrel":false},
// 	{"events":["spaghetti","brushed teeth","television","work"],
// 		"squirrel":false},
// 	{"events":["pizza","cycling","weekend"],
// 		"squirrel":false},
// 	{"events":["carrot","brushed teeth","weekend"],
// 		"squirrel":false},
// 	{"events":["carrot","beer","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["pizza","peanuts","candy","work"],
// 		"squirrel":true},
// 	{"events":["carrot","peanuts","brushed teeth","reading","work"],
// 		"squirrel":false},
// 	{"events":["potatoes","peanuts","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["carrot","nachos","brushed teeth","exercise","work"],
// 		"squirrel":false},
// 	{"events":["pizza","peanuts","brushed teeth","television","weekend"],
// 		"squirrel":false},
// 	{"events":["lasagna","brushed teeth","cycling","weekend"],
// 		"squirrel":false},
// 	{"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],
// 		"squirrel":false},
// 	{"events":["lettuce","brushed teeth","television","work"],
// 		"squirrel":false},
// 	{"events":["potatoes","brushed teeth","computer","work"],
// 		"squirrel":false},
// 	{"events":["bread","candy","work"],
// 		"squirrel":false},
// 	{"events":["potatoes","nachos","work"],
// 		"squirrel":false},
// 	{"events":["carrot","pudding","brushed teeth","weekend"],
// 		"squirrel":false},
// 	{"events":["carrot","brushed teeth","exercise","weekend","touched tree"],
// 		"squirrel":false},
// 	{"events":["brussel sprouts","running","work"],
// 		"squirrel":false},
// 	{"events":["brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["lettuce","brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["candy","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["brussel sprouts","brushed teeth","computer","work"],
// 		"squirrel":false},
// 	{"events":["bread","brushed teeth","weekend"],
// 		"squirrel":false},
// 	{"events":["cauliflower","brushed teeth","weekend"],
// 		"squirrel":false},
// 	{"events":["spaghetti","candy","television","work","touched tree"],
// 		"squirrel":false},
// 	{"events":["carrot","pudding","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["lettuce","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["carrot","ice cream","brushed teeth","cycling","work"],
// 		"squirrel":false},
// 	{"events":["pizza","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["spaghetti","peanuts","exercise","weekend"],
// 		"squirrel":true},
// 	{"events":["bread","beer","computer","weekend","touched tree"],
// 		"squirrel":false},
// 	{"events":["brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["lettuce","peanuts","brushed teeth","work","touched tree"],
// 		"squirrel":false},
// 	{"events":["lasagna","brushed teeth","television","work"],
// 		"squirrel":false},
// 	{"events":["cauliflower","brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["carrot","brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["carrot","reading","weekend"],
// 		"squirrel":false},
// 	{"events":["carrot","peanuts","reading","weekend"],
// 		"squirrel":true},
// 	{"events":["potatoes","brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["lasagna","ice cream","work","touched tree"],
// 		"squirrel":false},
// 	{"events":["cauliflower","peanuts","brushed teeth","cycling","work"],
// 		"squirrel":false},
// 	{"events":["pizza","brushed teeth","running","work"],
// 		"squirrel":false},
// 	{"events":["lettuce","brushed teeth","work"],
// 		"squirrel":false},
// 	{"events":["bread","brushed teeth","television","weekend"],
// 		"squirrel":false},
// 	{"events":["cauliflower","peanuts","brushed teeth","weekend"],
// 		"squirrel":false}
// ];
//
// function hasEvent(event, entry) {
//
// 	return entry.events.indexOf(event) !== -1;
//
// }
//
// function tableFor(event, journal) {
//
// 	let table;
// 	table = [0, 0, 0, 0];
//
// 	for (let i = 0; i < journal.length; i++) {
//
// 		let entry = journal[i], index = 0;
//
// 		if (hasEvent(event, entry)) index +=1;
// 		if (entry.squirrel) index += 2;
//
// 		table[index] += 1;
//
// 	}
//
// 	return table;
//
// }
// console.log(tableFor('pizza', journal));
//
// let map = {};
// function storePhi(event, phi) {
// 	map[event] = phi;
// }
//
// storePhi('pizza', 0.069);
// storePhi('touched a tree', -0.081);
// console.log('pizza' in map);
// console.log(map['touched a tree']);
//
// for (let event in map)
// console.log("Correlation for '" + event + "' = " + map[event]);
//
// function gatherCorrelations(journal) {
// 	let phis = {};
// 	for (let entry = 0; entry < journal.length; entry++) {
// 		let events = journal[entry].events;
// 		for (let i = 0; i < events.length; i++) {
// 			let event = events[i];
// 			if (!(event in phis))
// 				phis[event] = phi(tableFor(event, journal));
// 		}
// 	}
// 	return phis;
// }
//
// let correlations = gatherCorrelations(journal);
// console.log(correlations.pizza);

// This

// function test() {
// 	return this;
// }
// test();

// function abc() {
// 	console.log(this);
// 	console.log('Hello world!');
// 	this.style.background = 'red';
// }

// // document.querySelector('.lorem').onclick = abc;

// let p = document.querySelectorAll('p');

// // p.forEach(function (element) {
// // 	element.onclick = abc;
// // });
// // console.log(this);

// // document.querySelector('.lorem')
// // 	.addEventListener('click', abc);

// p.forEach(function (element) {
// 	element.addEventListener('click', abc);
// });

// console.log(this);

// let test = {
//     prop: 42,
//     func: function () {
//         return this.prop;
//     },
// };
// console.log(test.func());

// console.log(this.document === document); // true
// console.log(this === window); // true
// console.log(this.document !== window); // true

// this.a = 37;
// console.log(window.a); //37

// function f1() {
//     return this;
// }
// console.log(f1() === undefined);

// function f2() {
//     'use strict';
//     return this;
// }
// console.log(f2() === undefined);

// var obj = {
//     a: 'Custom'
// };
// var a = 'Global';
//
// function whatsThis() {
//     return this.a;
// }
//
// console.log(whatsThis());
// console.log(whatsThis.call(obj));
// console.log(whatsThis.apply(obj));

// in

// let trees = ['redwood', 'bay', 'cedar', 'oak', 'maple'];
// let obj = {
//     a: 1,
//     b: 2
// };
// let c = obj.a;
// console.log(0 in trees);
// console.log(3 in trees);
// console.log(6 in trees);
// console.log('bay' in trees);
// console.log(c in trees);
// console.log(Symbol.iterator in trees);
// console.log('PI' in Math);
//
// let myCar = {
//     make: 'Honda',
//     model: 'Accord',
//     year: 1998
// };
// console.log('model' in myCar);

// let a = [2, 9, 9];
// console.log(a.indexOf(2));
// console.log(a.indexOf(9));
// console.log(a.indexOf(9, -1));
// console.log(a.indexOf(7));

// map

// const map = new Map();

// map.set(23, 'Best number');
// map.set('23', 'Best number');
// console.log(map.size); // size of map
// console.log(map.get(23)); // get value
// console.log(map.has(23)); // check key
// console.log(map.delete('23'));
// console.log(map.size);
// map.clear();
// console.log(map.size);
// console.log(map);

// map.set('HTML', 'Hyper Text Markup Language')
//     .set('CSS', 'Cascading Style Sheets')
//     .set('JS', 'Javascript');
// // console.log([...map.entries()]);
//
// // const map2 = new Map(map.entries());
// // const [first, second, third] = map;
// // console.log(first, second, third);
// // const [[key, value], second, third] = map;
// // console.log(key, value);
//
// // for (let kv of map) {
// // 	console.log(kv);
// // }
//
// // for (let [key, value] of map) {
// // 	console.log(key, value);
// // }
//
// map.forEach((value, key, map) =>
// 	console.log(value, key, map));

// Multiply each element of the array by 2.
// 1)
// let a = [3, 4, 5]; // 6, 8, 10
// let b = [];
// // for (let i = 0; i < a.length; i++) {
// // 	b[i] = a[i] * 2;
// // }
// console.log(a);
// // console.log(b);
//
// // 2)
// // let b = a.map(function(currentValue, index, array){
// // return blablabla;
// // });
//
// let c = a.map(function (x, y, z) {
// 	// console.log(y);
// 	// console.log(z);
// 	return x * 2;
// });
// console.log(c);

const people = [
	{name: 'Vlad', age: 29, budget: 40000},
	{name: 'Lena', age: 17, budget: 3400},
	{name: 'Igor', age: 49, budget: 50000},
	{name: 'Michael', age: 15, budget: 1800},
	{name: 'Vasyl', age: 24, budget: 25000},
	{name: 'Victoria', age: 38, budget: 2300},
];

// ES 5
// for (let i = 0; i < people.length; i++) {
// 	console.log(people[i]);
// }

// ===

// ES 6
// for (let person of people) {
// 	console.log(person);
// }

// ForEach
// people.forEach(function (person) {
// 	console.log(person.name);
// });

// people.forEach((person) =>
// 	console.log(person.name));

// Map
// const newPeople = people.map((person) =>
// 	`${person.name} (${person.age})`);
// console.log(newPeople);

// Filter
// const adults = [];
// for (let i = 0; i < people.length; i++) {
// 	if (people[i].age >= 18) {
// 		adults.push(people[i]);
// 	}
// }
// console.log(adults);

// ====

// const adults = people.filter(person =>
// 	person.age >= 18);
// console.log(adults);

// Reduce
// let amount = 0;
// for (let i = 0; i < people.length; i++) {
// 	amount += people[i].budget;
// }

// ===

// const amount = people.reduce((total, person) =>
// 	total + person.budget, 0);
// console.log(amount);

// Find
// let igor = people.find(person => person.name === 'Igor');
// console.log(igor);

// FindIndex
// let igorIndex = people.findIndex(person => person.name === 'Igor');
// console.log(igorIndex);

// Summary
const amount = people.filter(person => person.budget > 3000)
	.map(person => {
		return {
			info: `${person.name} (${person.age})`,
			budget: Math.floor(Math.sqrt(person.budget))
		}
	})
	.reduce((total, person) => total + person.budget, 0);
console.log(amount);