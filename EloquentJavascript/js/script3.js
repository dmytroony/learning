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

function findSolution(target) {

	function find(start, history) {

		if (start === target) {
			return history;
		} else if (start > target) {
			return null;
		} else {
			return find(start + 5, '(' + history + ' + 5)') || find(start * 3, '(' + history + ' * 3)');
		}

	}
	return find(1,'1');

}

console.log(findSolution(24));

