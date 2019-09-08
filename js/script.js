// // Chapter 1:
// let comboA = 6.75;
// let comboB = 7.5;
// let comboC = 5.75;
// let comboD = 8;
//
// let sumCombo = comboA + comboB + comboC + comboD;
// //let amountOfCombo = 4;
// // let averagePrice = sumCombo / amountOfCombo;
//
// let comboE = 8.25;
// sumCombo = sumCombo + comboE;
// amountOfCombo = 5;
// averagePrice = sumCombo /amountOfCombo;
//
// console.log(averagePrice);

// //  Chapter 2
// Variables
// // Example 1:
// let favoriteSupplement = 'pepperoni';
// let secondFavoriteSupplement = 'sausages';
// let classyPizza = favoriteSupplement + ' and ' + secondFavoriteSupplement;
// console.log(classyPizza);
//
// // Example 2:
// var total = 6 + 7 + 8;
// console.log(total);
//
// // Example 3:
// console.log((8 * 3) / 6);
//
// // Example 4:
// var ageBrother = 11;
// var ageSister = 13;
// var amountOfBrothersOrSisters = 2;
// var averageAge = (ageBrother + ageSister) / amountOfBrothersOrSisters;
// console.log(averageAge);
//
// // Example 5:
// let coolNumber = 5;
// let coolAnswer = (20 / coolNumber) + ( (8 * coolNumber) / (6-2) );
// console.log(coolAnswer);
//
// // Example 6:
// console.log( 6 + ' feet' + 7 + ' feet' );
//
// // Example 7:
// console.log('Working from ' + 9 + ' to' + 5);
//
// // Example 8:
// console.log(7 + '3');
//
// // Example 9:
// console.log(12 / 0);

// // Chapter 3:
// Numbers
// let amountCommands = 3;
// let numberId = 1;
// console.log(numberId % amountCommands);
//
// numberId = 2;
// console.log(numberId % amountCommands);
//
// numberId = 3;
// console.log(numberId % amountCommands);
//
// numberId = 4;
// console.log(numberId % amountCommands);
//
// numberId = 5;
// console.log(numberId % amountCommands);
//
// numberId = 6;
// console.log(numberId % amountCommands);
//
// numberId = 7;
// console.log(numberId % amountCommands);
//
// numberId = 8;
// console.log(numberId % amountCommands);
//
// numberId = 9;
// console.log(numberId % amountCommands);
//
// numberId = 10;
// console.log(numberId % amountCommands);
//
// numberId = 11;
// console.log(numberId % amountCommands);
//
// numberId = 12;
// console.log(numberId % amountCommands);

// // Chapter 4:
// strings. i already know everything about them

// Chapter 5:
// Functions
// function enterTheNumberFive() {
//     return 5;
// }
//
// console.log( enterTheNumberFive() );
//
// function toAddThree(beginNumber) {
//     return beginNumber + 3;
// }
//
// console.log( toAddThree(4) );
//
// function sincereCompliment(name, feature) {
//     let compliment;
//         compliment = 'Wow, ' + name + '! your ' + feature + ' looks excellent!';
//     return compliment;
// }
//
// console.log( sincereCompliment('Anthony', 'hair') );

// function WhatIsCarColor(color) {
//     color = prompt('What is color?', '_ color');
//     return 'So, if her doors - ' + color +
//         ', hood - ' + color +
//         ', trunk - ' + color +
//         ', and all the body - ' + color +
//         ', then you may to think that the car have the ' + color + '.';
// }
//
// console.log( WhatIsCarColor() );

// a Bear
// console.log(" c___c\n /. .\\\n \\_T_/\n /' '\\\n(/ . \\)\n/';‐;'\\\n()/ \\ ()");

// function logRandomNumber() {
//     let randomNumberBetween0and1 = Math.random();
//     let bigRandomNumber = randomNumberBetween0and1 * 100;
//     let bigRandomInteger = Math.floor(bigRandomNumber);
//     let chooseNumber = 'Choose a number between 0 and 100: ';
//     console.log(chooseNumber + bigRandomInteger);
// }
//
// logRandomNumber();

// function travelInTime(pet) {
//     let maxYear = 2500;
//     let year = Math.random() * maxYear;
//     return 'Your ' + pet + ' go to the ' + Math.floor(year) + ' year!';
// }
//
// travelInTime('dog');

// // a pair of dice
// function throwGameQ() {
//     return Math.floor(Math.random() * 6) + 1;
// }
//
// function pairGameQ() {
//     let q1 = throwGameQ();
//     let q2 = throwGameQ();
//     let sum = q1 + q2;
//     console.log('You have ' + sum + '! (' + q1 + ' and ' + q2 + ')');
//     return sum;
// }
//
// pairGameQ();

// function randomNumber() {
// 	let maxNumber = 99;
// 	return Math.floor(Math.random() * maxNumber + 1);
// }
//
// function lotteryWon() {
// 	let firstNum = randomNumber();
// 	let secondNum = randomNumber();
// 	let thirdNum = randomNumber();
// 	return 'Your numbers of the Lottery are \"'+ firstNum + '-' + secondNum + '-' + thirdNum + '\"!';
// }
//
// console.log( lotteryWon() );

function lotteryWon() {
	let randomNumber = function() {
		return Math.floor(Math.random() * 100);
	};
	let firstNum = randomNumber();
	let secondNum = randomNumber();
	let thirdNum = randomNumber();
	let wonCombination = '\"' + firstNum + '-' + secondNum + '-' + thirdNum + '\"';
	return 'Your numbers of the Lottery are: ' + wonCombination;
}

console.log( lotteryWon() );
