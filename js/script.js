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

// //  Chapter 1
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

// // Chapter 2:
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

// // Chapter 3:
// strings. i already know everything about them

// Chapter 4:
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

// function lotteryWon() {
// 	let randomNumber = function() {
// 		return Math.floor(Math.random() * 100);
// 	};
// 	let firstNum = randomNumber();
// 	let secondNum = randomNumber();
// 	let thirdNum = randomNumber();
// 	let wonCombination = '\"' + firstNum + '-' + secondNum + '-' + thirdNum + '\"';
// 	return 'Your numbers of the Lottery are: ' + wonCombination;
// }
//
// console.log( lotteryWon() );

// Chapter 5: Boolean

// function canItoTakeChildrenSetPlease(ageChild) {
// 	let childrenSetsOnlyLess18 = 10;
// 	if (ageChild <= childrenSetsOnlyLess18) {
// 		console.log("Take your children set please!");
// 	} else {
// 		console.log("Sorry, but you need to do an order from the adult menu!");
// 	}
// }
//
// let littleChild = 5;
// canItoTakeChildrenSetPlease(10);

// function heightGiraffe(heightMeters, heightCentimeters) {
// 	let centimetersInOneMeter = 100;
// 	let heightGiraffe = heightMeters * centimetersInOneMeter;
// 		heightGiraffe += heightCentimeters;
// 	let minHeightGiraffe = 259;
// 	if ( heightGiraffe >= minHeightGiraffe ) {
// 		console.log("You are already ready for a carousel!");
// 	} else {
// 		console.log("You are small for this!");
// 	}
// }
//
// heightGiraffe(2, 89);

// function bigNumber(firstNumber, secondNumber) {
// 	if (firstNumber > secondNumber) {
// 		console.log(firstNumber + ' more ' + secondNumber);
// 	} else {
// 		if (firstNumber < secondNumber) {
// 			console.log(secondNumber + ' more ' + firstNumber);
// 		} else {
// 			console.log('They are equal!');
// 		}
// 	}
// }
//
// bigNumber('24', 24);

// function whatLess(firstNum, secondNum) {
// 	if (firstNum < secondNum) {
// 		console.log(firstNum + ' less!');
// 	} else {
// 		console.log(secondNum + ' less!');
// 	}
// }
//
// whatLess(3, 1);

// Chapter 6: logic
// function ableToArmy(age) {
// 	let armyAge = 18;
// 	if (age >= armyAge) {
// 		console.log('Able!');
// 	} else {
// 		console.log('Little!');
// 	}
// }
// let myAge = 18;
// ableToArmy(myAge);

// function ageForChurch(childAge) {
// 	let minAge = 6;
// 	let maxAge = 13;
// 	if (childAge > maxAge) {
// 		console.log('Sorry, you are so adult!');
// 	} else if (childAge >= minAge) {
// 		console.log('Welcome!');
// 	} else {
// 		console.log('Sorry, you are so small!');
// 	}
// }
//
// ageForChurch(13);

// let testCondition = null;
// if (testCondition) {
// 	console.log('So, it is look like ' + testCondition + ' is the truly');
// } else {
// 	console.log(testCondition + ' is the falsy');
// }

// function readyToSchool(readyBag, readyLunch, readyShoes) {
// 	if (readyBag && readyLunch && readyShoes) {
// 		console.log('1!');
// 	} else {
// 		console.log('You are not ready! Fast!!!')
// 	}
// }
//
// readyToSchool(true, true, true);
//
// function alreadyBreakfast(ateEggs, ateCereal) {
// 	if (ateEggs || ateCereal) {
// 		console.log('1!');
// 	} else {
// 		console.log('Go to eat!');
// 	}
// }
//
// alreadyBreakfast(true, true);

// function goToSchool(readyBag, readyLunch, readyShoes, ateEggs, ateCereal) {
// 	if (readyBag && readyLunch && readyShoes && (ateEggs || ateCereal)){
// 		console.log('Excellent! Go to the School!');
// 	} else {
// 		console.log('Try one more time! Fast!');
// 	}
// }
//
// goToSchool(true,true, true,true,false);

// function amISick(myTemperature, sickWithoutInterruption) {
// 	let maxHealthyTemperature = 37.7;
// 	if (!(myTemperature > maxHealthyTemperature || sickWithoutInterruption)) {
// 		console.log('You are strong! Go to school!');
// 	} else {
// 		console.log('You need a doctor!!!')
// 	}
// }
//
// amISick(37.8, false);

// function reallyGoToSchool(readyBag, readyLunch, readyShoes, ateEggs, ateCereal, myTemperature, sickWithoutInterruption) {
// 	let maxHealthyTemperature = 37.7;
// 	if (!(myTemperature > maxHealthyTemperature || sickWithoutInterruption) && (ateEggs || ateCereal) && (readyBag && readyLunch && readyShoes)) {
// 		console.log('Excellent!!! Go to the School!');
// 	} else {
// 		console.log('WTF baby? What happened with you?')
// 	}
// }
//
// reallyGoToSchool (1, 1, 1, 1, 0, 37.7, 1);

// Alarm clock
// function timeWakeUp(dayOfWeek) {
// 	if (dayOfWeek === 'saturday') {
// 		return null; // without alarm clock
// 	} else if ( (dayOfWeek === 'sunday') ) {
// 		console.log('7:30');
// 	} else {
// 		console.log('6:30');
// 	}
// }
//
// timeWakeUp('sunday');

// function goORno(myTemperature, sickWithoutBreak, ateEggs, ateCereal, readyBag, readyLunch, readyShoes) {
// 	let maxHealthyTemperature = 37.7;
// 	let message; // undefined
//
// 	if (myTemperature > maxHealthyTemperature) {
// 		message = 'You are in fire! Go to in a bed!';
// 	} else if (sickWithoutBreak) {
// 		message = 'No-no-no! Go to in the bed!';
// 	} else {
// 		if (ateEggs || ateCereal) {
// 			if (!readyBag) {
// 				message = 'Prepare the bag!';
// 			} else if (!readyLunch) {
// 				message = 'You have lost a lunch';
// 			} else if (!readyShoes) {
// 				message = 'Stop! Where are your shoes?';
// 			} else {
// 				message = 'Excellent! Go to the School!';
// 			}
// 		} else {
// 			message = 'A breakfast it is important!';
// 		}
// 	}
// 	console.log(message);
// }
//
// goORno(37.2, false, true, true, true, true, true);

// function canIGetTicketToTheCinema(filmRating, childAge, withAdult) {
// 	let minAgeForR = 17;
// 	let minAgeForPg13 = 13;
// 	let  message = null;
//
// 	if (filmRating === 'R' && childAge >= minAgeForR || withAdult) {
// 		message = 'Take your ticket with a rating \'R\' please';
// 	} else if (filmRating === 'PG-13' && !(childAge < minAgeForPg13 || withAdult)) {
// 		message = 'Take your ticket with a rating \'PG-13\' please!';
// 	} else if (filmRating === 'G') {
// 		message = 'For films with \'G\' category the enter is open for all!';
// 	} else {
// 		message = 'Sorry!';
// 	}
// 	console.log(message);
// }
//
// canIGetTicketToTheCinema('R', 15, true);

// function whoIsOlderThatAndFirst(ageFirstMan, ageSecondMan) {
// 	let whoFirst;
//
// 	if ((!ageSecondMan && ageFirstMan) || ageFirstMan > ageSecondMan) {
// 		whoFirst = 1;
// 	} else if ((!ageFirstMan && ageSecondMan) || ageSecondMan > ageFirstMan) {
// 		whoFirst = 2;
// 	} else {
// 		whoFirst = null;
// 	}
//
// 	if (whoFirst) {
// 		console.log(whoFirst + '-й человек' + ' старше, а значит, ходит первым.');
// 	} else if (!(ageFirstMan || ageSecondMan)) {
// 		console.log('Нужно предложить возрасты этих двоих в качестве аргументов!');
// 	} else {
// 		console.log("Да они же ровесники! \nRandom: " + (Math.floor(Math.random() * 2) + 1) + '-й ходит первым!');
// 	}
//
// }
//
// whoIsOlderThatAndFirst(20, 20);

// Chapter 7:

// function convertFahrenheitToCelsius(degFahrenheit) {
//
// 	const CONVERSIONRATE = 1.8;
// 	const FREEZINGOFWATERONFAHRENHEIT = 32;
// 	let degCelsius = ( (degFahrenheit - FREEZINGOFWATERONFAHRENHEIT) / CONVERSIONRATE);
//
// 	console.log(degCelsius.toFixed(1));
//
// }
//
// convertFahrenheitToCelsius(132);
//
//
// function convertCelsiusToFahrenheit(degCelsius) {
//
// 	const CONVERSIONRATE = 1.8;
// 	const FREEZINGOFWATERONFAHRENHEIT = 32;
// 	let degFahrenheit = ( (degCelsius * CONVERSIONRATE) + FREEZINGOFWATERONFAHRENHEIT );
//
// 	console.log(degFahrenheit.toFixed(1));
//
// }
//
// convertCelsiusToFahrenheit(0);

// function didYouBrushedTeeth() {
// 	if (confirm('Did you brush your teeth?') && confirm('Did you clean your mouth with dental floss?')) {
// 		console.log("Nice! Come in!");
// 	} else {
// 		console.log('Sorry! Go to brush, now!');
// 	}
// }
//
// didYouBrushedTeeth();

// function cookMe() {
// 	const lovelyFood = prompt('What is your lovely food?', 'Potato under double cheese');
//
// 	if (lovelyFood){
// 		console.log(lovelyFood + '? Excellent! I\'m already cook it!');
// 	} else {
// 		console.log('You don\'t have a lovely food? O_o');
// 	}
// }
//
// cookMe();

// do it yourself
//
// function mysteryDrink() {
// 	let ingredient1 = prompt('Enter the name of the first ingredient', '');
// 	let ingredient2 = prompt('Enter the name of the second ingredient', '');
// 	let ingredient3 = prompt('Enter the name of the third ingredient', '');
//
// 	if (ingredient1 && ingredient2 && ingredient3) {
// 		console.log('Nice! Now we cook this mysterious drink!');
// 	} else {
// 		console.log('Sorry! No have ingredients.');
// 	}
// }
//
// mysteryDrink();

// const TAX = 0.09;
// const CHARACTERSAFTERTHEDOT = 2;
// console.log( (2.35 * TAX).toFixed(CHARACTERSAFTERTHEDOT) );

// function leaveTip() {
// 	const TIPS = 0.18;
// 	const CHARACTERSAFTERTHEDOT = 2;
// 	let sumFood = prompt('Input the summary cost yours lunch please', '');
// 	console.log('We recommend leaving $' + (sumFood * TIPS).toFixed(CHARACTERSAFTERTHEDOT) + ' tips. Thanks!');
// }
//
// leaveTip();

// do it yourself

// function leaveTipsRandom() {
// 	const CHARACTERSAFTERTHEDOT = 2;
// 	let sumFood = +prompt('Input the summary cost yours lunch please', '');
// 	let percentOfTips = +prompt('Input tip\'s percent of yours lunch, which you want to leave for us please', '');
// 		percentOfTips = (percentOfTips/100) * sumFood;
// 	let summaryCost = sumFood + percentOfTips;
//
// 	console.log('Your lunch cost $' + sumFood + '.'
// 		+ '\n' + 'We recommend leaving $' + percentOfTips.toFixed(CHARACTERSAFTERTHEDOT)
// 		+ ' tips. Thanks!' + '\n' + 'Summary cost is $' + summaryCost.toFixed(CHARACTERSAFTERTHEDOT) + '.');
// }
//
// leaveTipsRandom();

// function convertRatingToAbcSystem() {
//
// 	const yourRating = prompt('What is your rating? Enter a number from 0 to 100.', '');
// 	let yourAbcRate;
//
// 	if (yourRating >= 90) {
// 		yourAbcRate = 'A';
// 	} else if (yourRating >= 80 ) {
// 		yourAbcRate = 'B';
// 	} else if (yourRating >= 70) {
// 		yourAbcRate = 'C';
// 	} else if (yourRating >= 60) {
// 		yourAbcRate = 'D';
// 	} else if (!yourRating) {
// 		yourAbcRate = 'You did not enter your rating!';
// 	} else {
// 		yourAbcRate = 'F';
// 	}
//
// 	console.log(yourAbcRate);
// }
//
// convertRatingToAbcSystem();


//Chapter 8:

// const animalsInZoo = ['lion', 'tiger', 'bear'];
// console.log(animalsInZoo.length);

// const instrumentsForMusicalParty = ['guitar', 'drums', 'bass'];
// instrumentsForMusicalParty[2] = 'bass-guitar';
// instrumentsForMusicalParty[3] = 'keys';
// instrumentsForMusicalParty.push('microphone');
// instrumentsForMusicalParty.pop();
//
// const angelaWillPlayOn = instrumentsForMusicalParty.pop();
// const neaWillPlayOn = instrumentsForMusicalParty.pop();
// const tonyWillPlayOn = instrumentsForMusicalParty.pop();
// const andIWillPlayOn = instrumentsForMusicalParty.pop();
//
// console.log( 'Our party have four members : Angela(' + angelaWillPlayOn + '), Nea('
// 	+ neaWillPlayOn +'), Tony(' + tonyWillPlayOn + '), and I(' + andIWillPlayOn + ').' );

// let basketWithLinen = ['pants', 't-shirt', 'trousers', 'socks'];
// const canStillWorn = basketWithLinen.shift();
// basketWithLinen.unshift('towel');
//
// const yesterdayWashing = ['sweatshirt', 'yesterday\'s trousers', 'striped socks', 'bandanna'];
// basketWithLinen = basketWithLinen.concat(yesterdayWashing);
// console.log(basketWithLinen.sort());

// function formatDegrees(allDegrees) {
// 	allDegrees = allDegrees.toUpperCase().split(',').sort().join(' | ');
// 	console.log(allDegrees);
// }
//
// formatDegrees('d,b,b,a,a,c,f,d,b,f,a,b,b,c,a,d');

// let resultsRace = [];
// resultsRace[0] = 'Alan';
// resultsRace = resultsRace.concat(['Bernardo', 'Cesar', 'Derek', 'Emilio']);
// resultsRace.push('Frederic');
// resultsRace.push('Gordon');
//
// resultsRace.pop();
// const deletedCheater = resultsRace.shift();
//
// console.log('There are ' + resultsRace.length + ' runners in our list. In ' + deletedCheater + ' found traces of doping, and he dropped out.');
//
// resultsRace[2] = 'Derril';
//
// console.log('Here is our new command of runners: ' + resultsRace.join(', ') + '. Go to the race!');

// do it yourself

// let myBasket = ['Kit-Kat', 'Skittles'];
// myBasket = myBasket.concat(['Nuts', 'Bounty']);
// myBasket.unshift('M&Ms');
// myBasket.pop();
// myBasket[2] = 'Starburst';
//
// myBasket = myBasket.concat(['Milky Way', 'M&Ms "peanut"', 'Mars', 'Hersheys']);
// myBasket.shift();
// myBasket.sort();
// console.log('Mom, look at my basket! I\'ve received ' + myBasket.length + ' sweets!');
// console.log('I have: ' + myBasket.join(' and ') + '.');

// Chapter 9:

// function takingCubes(cubeAll, cubeLiftingCapacity) {
//
// 	let i = 0;
// 	console.log('There are ' + cubeAll + ' cubes on the floor.');
//
// 	while (cubeAll > 0) {
//
// 	cubeAll -= cubeLiftingCapacity;
// 	console.log('I take up from the floor already ' + cubeLiftingCapacity + ' cubes. Now here is ' + cubeAll + ' on the floor.');
// 	i++;
//
// 	}
//
// console.log('Yeah!!! All cubes already in the box! I came for ' + i + ' times.');
//
// }
//
// takingCubes(prompt('Enter the amount of cubes on the floor.', ''), prompt('What is your lifting capacity?', ''));

// let i = 0;
// for (i; i < 10; i++) {
//
// 	console.log('i = ' + i + ';');
//
// }
// console.log('Stop! Here is ' + i + ' iterations.');

// let i = 0;
// function circleRun(circlesAmount) {
//
// 	for (i; i < circlesAmount; i++) {
// 		console.log((i + 1) + ' circle done!');
// 	}
// 	console.log('I have finished! ' + i + ' circles done!' );
//
// }
//
// circleRun(12);

// function tenMonkeys(i) {
//
// 	for (i; i > 0; i--) {
// 		console.log('Here is the ' + i + ' monkeys!');
// 	}
// 	console.log('Here is ' + i + ' monkeys :(');
//
// }
//
// tenMonkeys(10);

// TODO

// function lotteryNumbers(amountNumbers, minValue, maxValue) {
//
// 	const result = [];
// 	let randomNumber;
//
// 	while (minValue < amountNumbers) {
//
// 		randomNumber = Math.floor(Math.random() * (maxValue + 1));
// 		result.push(randomNumber);
// 		minValue++;
//
// 	}
//
// 	console.log('Numbers of the lottery (' + result.length + '): \n' + result.join(' - '));
//
// }
//
// lotteryNumbers(5, 0, 5);

// /TO DO

// function letsCount(finishNumber) {
//
// 	const allNumbers = [];
// 	for (let i = 0; i < finishNumber; i++) {
//
// 		allNumbers.push(i + 1);
//
// 	}
//
// 	console.log(allNumbers.join(' - '));
// 	console.log('I\'ve already counted! Can i take an Ice cream? :)');
// }
// letsCount(100);

// let forLetsPlay = ['TV on the Wall',
// 	'Put the console X-box below',
// 	'Connect the TV and X-box with a HDMI cable',
// 	'turn on the TV', 'turn on the X-box',
// 	'Double click on the MyCraft icon',
// 	'Lets play!'];

// console.log(forLetsPlay.join(';\n'));

// while (forLetsPlay.length > 0) {
// 	const nextStep = forLetsPlay.shift();
// 	console.log(nextStep);
// }

// ==

// while (forLetsPlay.length) {
// 	console.log(forLetsPlay.shift());
// }
// console.log(forLetsPlay);

// const cookCookies = [
// 	'Preheat the oven to 175 degrees',
// 	'Mix margarine, white sugar, dark sugar, vanilla and eggs',
// 	'Sprinkle flour, starch, salt, baking soda and chocolate crumb',
// 	'Put on a baking tray',
// 	'Leave in the oven for 12 minutes',
// 	'Remove the tray',
// 	'Bon appetite!'
// 	];
//
// for (let i = 0; i < cookCookies.length; i++) {
//
// 	const stepNumber = i + 1;
// 	const step = cookCookies[i];
//
// 	console.log(stepNumber + '. ' + step);
//
// }
//
// // ==
//
// for (let i = 0; i < cookCookies.length; i++) {
//
// 	console.log((i + 1) + '. ' + cookCookies[i]);
//
// }

// Comparison of the indexes of the two arrays

// function spoilerator(myFilm) {
//
// 	const films = ['The Lord of the Rings',
// 		'Shrek',
// 		'Toy Story',
// 		'Star Wars',
// 		'Cold heart',
// 		'Hamlet',
// 		'Cinderella'];
// 	const spoilers = ['The Almighty\'s Ring is destroyed.',
// 		'Fiona remained huge Ogr.',
// 		'Buzz Lighter realized he was a toy.',
// 		'The death star exploded.',
// 		'Elsa stopped destroying everything around her.',
// 		'All died.',
// 		'And they lived happily ever after.'];
//
// 	for (let i = 0; i < films.length; i++) {
//
// 		if (films[i] === myFilm) {
//
// 			return spoilers[i];
//
// 		}
//
// 	}
//
// 	return 'I\'m sorry! But we don\'t have the film \'' + myFilm +'\' on the list.'
//
// }
//
// spoilerator();

//	.
//	|
// \|/
//	'

// function severalSpoilers(filmsList) {
//
// 	console.log('Warning!'.toUpperCase() + ' Spoilers!');
//
// 	for (let i = 0; i < filmsList.length; i++) {
//
// 		const name = filmsList[i];
// 		console.log(name + ': ' + spoilerator(name));
//
// 	}
//
// }
//
// console.log(severalSpoilers(['Toy Story', 'Cold heart', 'Randa hotel', 'The Lord of the Rings']));

// TODO

// const alphabetLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
// let k = alphabetLetters.length;
// const alphabetReverse = [];
//
// for (k; k > 0; k--) { // отсчитываем "вниз"
//
// 	alphabetReverse.push(alphabetLetters[k - 1]); // добавим буквы в массив
//
// }
//
// console.log(alphabetReverse.join(' | '));
//
// const vowels = 'aeiouy '.toUpperCase().split('');
// // const consonants = "bcdfghjklmnpqrstvwxy";
// while (alphabetReverse.length) { // продолжим цикл, пока массив не опустеет
//
// 	const thisLetter = alphabetReverse.pop(); // убираем буквы из массива
//
// 	for (let m = 0; m < vowels.length; m++) { // цикл по всем гласным
//
// 		if (vowels[m] === thisLetter) { // проверим, является ли буква гласной
//
// 			console.log(thisLetter + ' — vowel!');
//
// 		}
// 	}
// }

// /TO DO

// for (let i = 0; i < 30; i+= 3) {
//
// 	console.log(i);
//
// }

// function whatNumberIsDivisibleBy(maxNumber, divider) {
//
// 	console.log('What number less than ' + maxNumber + ' is divisible by ' + divider + '?');
//
// 	for (let n = 0; n < maxNumber; n++) {
//
// 		if (!(n % divider)) {
//
// 			console.log(n + ' is divisible by ' + divider + '!');
//
// 		}
//
// 	}
//
// }
//
// whatNumberIsDivisibleBy(100, 10);
// whatNumberIsDivisibleBy(60, 5);
// whatNumberIsDivisibleBy(90, 3);

// let p = 0;
//
// while (p < 52) {
//
// 	console.log(p);
// 	p += 5;
//
// }

// TODO

// function numericRow(mainNumber) {
//
// 	const row = [];
//
// 	for (let i = 1; i <= 10; i++) {
//
// 		row.push(mainNumber * i);
//
// 	}
// 	console.log( row.join(' | ') + '\n\n');
//
// }
// numericRow(9);
//
// function fullTable(mainNumber) {
//
// 	const rows = [];
//
// 	for (let i = 1; i <= mainNumber; i++) {
//
// 		rows.push(numericRow(i));
//
// 	}
//
// 	return rows.join('\n');
//
// }
// fullTable(2);

// /TO DO

// let signalsTrafficLights = 'red-yellow-green'.split('-');
//
// for (let r = 0; r < signalsTrafficLights.length; r++) {
//
// 	console.log(signalsTrafficLights[r]);
//
// }

// function allColorsRainbow() {
//
// 	const colors = 'red,orange,yellow,green,azure,blue,violet'.split(',');
//
// 	for (let i = 0; i < colors.length; i++) {
//
// 		console.log('One of the colors: ' + colors[i]);
//
// 	}
//
// 	console.log("Here are all the colors of the Rainbow!");
//
// }
//
// allColorsRainbow();

// function weCountTwos() {
//
// 	for (let r = 0; r <= 10; r += 2) {
//
// 		console.log(r);
//
// 	}
//
// }
//
// weCountTwos();

// function weCountTwos() {
//
// 	for (let s = 0; s <= 10; s++) {
//
// 		if (s % 2) {
//
// 			console.log(s);
//
// 		}
//
// 	}
//
// }
//
// weCountTwos();

// RandomIndex

// const inCold = ['Antarctica', 'North Pole', 'Canada'];
// const randomIndex = Math.floor(Math.random() * inCold.length);
// const coldPlace = inCold[randomIndex];
//
// console.log('If you want to live in ' + coldPlace + ', you need to have warm clothes!');

// function moneyNeed(wallet) {
//
// 	const price = 10.30;
//
// 	if ( wallet >= price) {
//
// 		console.log('Вам хватит денег!');
//
// 	} else {
//
// 		console.log("Боюсь, вы не можете себе этого позволить!");
//
// 	}
//
// }
// moneyNeed(10.30);

// let x = 10;
// while (x > 0) {
// 	console.log('value x is ' + x);
// 	x--;
// 	console.log(x);
// }

// const colors = ['red', 'yellow', 'blue', 'orange', 'green', 'violet'];
//
// for (let i = 0; i < colors.length; i++) {
//
// 	const color = colors [i];
//
// 	// if (colors.length >= 7) {
//
// 		console.log(colors);
//
// 	// }
//
// }

// yourself

// function canITake() {
//
// 	const sweets = ['Nuts', 'Hershey\'s', 'Kit‐Kat', 'Milky Way', 'M&M\'s', 'Snickers', 'Starburst', 'Bounty'];
//
// 	for (let i = 0; i < sweets.length; i++) {
//
// 		const deliciousness = sweets[i];
// 		const lastLetterNameSweet = deliciousness.split('').pop();
//
// 		if ( lastLetterNameSweet === 's') {
//
// 			console.log("NOPE!!! " + deliciousness + "! You are allergic!");
//
// 		} else {
//
// 			console.log('Yeah! ' + deliciousness + '! Bon appetite!');
//
// 		}
//
// 	}
//
// }
// canITake();

// Chapter 10:

function answerForGallows() {

	const possibleAnswers = [
		'reciprocity',
		'applicant',
		'stopwatch',
		'car',
		'adventurer',
		'cloudiness',
		'observation',
		'plaster',
		'tamer',
		'cello',
		'conspirator',
		'strawberry',
		'antarctica'
	];
	const randomIndex = Math.floor(Math.random() * (possibleAnswers.length) );

	return possibleAnswers[randomIndex].toUpperCase();
	
}

function gameOver(answer, winning) {

	const asciiGallows = '____\n|/ |\n| @\n| /|\\\n| / \\\n|\n=====';
	let message = '';

	if (winning) {

		message = 'CONGRATULATIONS! You won!';

	} else {

		message = 'GAME OVER! You lose!\n\n' + asciiGallows;

	}

	message += '\n\nRight answer: ' + answer + '!';
	alert(message);

	return message;

}

function playGallows() {

	const answer = answerForGallows();
	const lettersAnswer = answer.split('');
	const wrongGuess = [];
	const maxWrongGuesses = 7;
	const gameProgress = '_'.repeat(answer.length).split('');
	const confirmation = confirm('Go to play the "Gallows"!\n\n' +
		'I thought of the word; you can start guessing the letters!\n' +
		'This is a regular word of ' + answer.length + ' letters.\n' +
		'Are you ready to begin the Game?');

	if (!confirmation) {

		return gameOver(answer, false);

	}

	while (wrongGuess.length < maxWrongGuesses) {

		const messageProgress = 'At the moment, you have achieved: \n' +
			gameProgress.join(' ') + '\n' +
			'Errors: [' + wrongGuess.toString() + ']\n\n' +
			'Choose the next letter!';
		const answerPlayer = prompt(messageProgress);

		if (!answerPlayer) {

			return gameOver(answer);

		}

		const guess = answerPlayer.toUpperCase();
		let trueGuess = false;

		for (let i = 0; i < lettersAnswer.length; i++) {
			if (lettersAnswer[i] === guess) {

				trueGuess = true;
				gameProgress[i] = guess;

			}
		}

		if (trueGuess) {

			if (gameProgress.join('') === answer) {

				return gameOver(answer, true);

			}

			alert('It\'s true!');

		} else {

			wrongGuess.push(guess);
			alert('Sorry, the letter ' + guess + ' no have here. ' +
			'You have ' + (maxWrongGuesses - wrongGuess.length) +
			' more attempts, before this poor man is hanged.');

		}

	}

	return gameOver(answer, false)

}
playGallows();

// const temporarySolution = answerForGallows();
// gameOver(temporarySolution, 1);

