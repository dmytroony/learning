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

let row = '';
let size = 8;

for (let j = 1; j <= size; j++) {

	for (let i = 1; i <= size; i++) {

		if (i === size) {
			row += '\n';
		} else if (i % 2 === 0) {
			row += '#';
		} else if (i % 2 === 1) {
			row += ' ';
		}

	}

}

console.log(row);


// for (let j = 1; j <= size; j++) {

// if (row.length === size) {
// 	console.log('\n');
// }