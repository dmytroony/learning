// function sum(a, b) {
//     return a + b;
// }

// function cube(a) {
//     return a**3;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// const cube = a => a**3;

// setTimeout(function(){
//     console.log('After 10 second');
// }, 10000);

// setTimeout(() => console.log('After 10 second'), 10000);

// Context
// function log() {
//     console.log(this);
// }
// const arrowLog = () => console.log(this);
//
// const person = {
//     name: 'Elena',
//     age: 20,
//     log: log,
//     arrowLog: arrowLog,
// };
//
// console.log(person.name);

// getHiddenCard
// need to receive 16digits card's number, and to hide the first 12 digits and add the (*)x4 before the new number
// const getHiddenCard = (cardNumber, symbolsAmount = 4) => {
//
// 	const hiddenCardNumber = cardNumber.toString().slice(-4);
// 	return hiddenCardNumber.padStart(symbolsAmount + hiddenCardNumber.length, '*');
//
// };
//
// console.log(getHiddenCard(1234569999999999));

// to do a first letter toUpperCase
// ф-я: 1) приймає слово; 2) першу букву слова робить великою; 3) повертає нове слово;
// const capitalize = name => {
//
// 	const firstLetter = name.slice(0, 1).toUpperCase();
// 	return name.slice(1).padStart(name.length, firstLetter);
//
// };
//
// EQUAL
// const capitalize2 = text => `${text[0].toUpperCase()}${text.slice(1)}`;
// console.log(capitalize2('arya'));

// const isCastle = type => type === 'Castle';
// console.log(isCastle('Sea'));

// const hasTargaryenReference = (secondName) => {
//     return secondName.substring(0, secondName.length) === 'Targaryen';
// };
// console.log(hasTargaryenReference('Targaryen'));

// isCorrectPassword
// const isCorrectPassword = (password) => {
//     const length = password.length;
//     return length >= 8 && length <= 16 && password[0] === password[0].toUpperCase();
// };
// console.log(isCorrectPassword('qwerty'));

// const isLannisterSoldier = (isRedArmor, isLionShield) => {
//
//     return isRedArmor === 'red' && isLionShield === null || isLionShield === 'lion' || isRedArmor === null;
//
// };
// // console.log(isLannisterSoldier('blue', 'lion'));
//
//
// const isNotLannisterSoldier = (isRedArmor, isLionShield) => {
//
//     return !isLannisterSoldier(isRedArmor, isLionShield);
//
// };
// console.log(isNotLannisterSoldier('red', 'lion'));
// console.log(isNotLannisterSoldier('blue', null));

// const isLeapYear = year => year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
// console.log(isLeapYear(1988));
//
// const isNeutralSoldier = (armor, shield) => {
//     return armor !=='red' && shield === 'black';
// };
// console.log(isNeutralSoldier('yellow', 'black')); // true
// console.log(isNeutralSoldier('red', 'black'));    // false
// console.log(isNeutralSoldier('red', 'red'));      // false

// const getTypeOfSentence = sentence => {
//     const lastChar = sentence.substr(-1);
//
//     if (lastChar === '?') {
//         return 'question';
//     } else {
//         return 'normal';
//     }
// };
// console.log(getTypeOfSentence('Hodor'));
// console.log(getTypeOfSentence('Hodor?'));

// const getTypeOfSentence = sentence => {
//     const lastChar = sentence[sentence.length - 1];
//
//     let sentenceType;
//     if (lastChar === '?') {
//         sentenceType = 'question';
//     } else {
//         sentenceType = 'normal';
//     }
//
//     return `Sentence is ${sentenceType}`;
// };
// console.log(getTypeOfSentence('Hodor'));
// console.log(getTypeOfSentence('Hodor?'));

// normalizeUrl to the https:// protocol
// const normalizeUrl = url => {
//     const oldProtocol = 'http://',
//         newProtocol = 'https://';
//
//     if (url.startsWith(oldProtocol)) {
//         return url.slice(oldProtocol.length).padStart(url.length + 1, newProtocol);
//     } else if (url.startsWith(newProtocol)) {
//         return url;
//     } else if (!(url.startsWith(oldProtocol))) {
//         return newProtocol + url;
//     }
//
// };
// console.log(normalizeUrl('google.com'));
// console.log(normalizeUrl('http://ai.fi'));
// console.log(normalizeUrl('https://www.site.com'));

// const whoIsThisHouseToStarks = secondName => {
//     let isWho;
//     if (secondName === 'Karstark' || secondName === 'Tally') {
//         isWho = 'friend';
//     } else if (secondName === 'Lannister' || secondName === 'Frey') {
//         isWho = 'enemy';
//     } else {
//         isWho = 'neutral';
//     }
//
//     return `This family is ${isWho}!`;
// };
// console.log(whoIsThisHouseToStarks('Lannister'));

// const abs = number => {
//     if (number >=0) {
//         return number;
//     }
//
//     return -(-number);
// };
// console.log(abs(-5));
// // EQUAL
// const abs1 = number => (number >= 0 ? number : -(-number));
// console.log(abs1(-2));

// const getTypeOfSense = sentence => {
//     const lastChar = sentence.substr(-1);
//
//     return (lastChar === '?') ? 'question' : 'normal';
// };
// console.log(getTypeOfSense('Hodor'));
// console.log(getTypeOfSense('Hodor?'));

// REVERSE STRING
//
// First method with an array
// const convertText = text => text.split("").reverse().join("");
//
// Second method with a cycle FOR
// const convertText = text => {
//     let newString = "";
//     for (let i = text.length -1; i >= 0; i--) {
//         newString += text[i];
//     }
//     return newString;
// };
//
// Third method with a Recursion
// const convertText = text => (text === "") ? "" : convertText(text.substr(1)) + text.charAt(0);
//
// console.log(convertText('Hello'));
// console.log(convertText('hello'));

// 1) переприсвоїти значення а = 5; b = 7;
// 2) без використання додаткових змінних;
// 3) не простим переприсвоюванням;
// let a = 7, b = 5;
// console.log(`a = ${a}\nb = ${b}`);

// const isFalsy = (value) => value == false;
// console.log(isFalsy(3));

// const printNumbers = lastNumber => {
//     let i = lastNumber;
//     while (i) {
//         console.log(i);
//         i--;
//     }
//     console.log(`finished! ${lastNumber} is the last number of this counter!`);
// };
// printNumbers(5);

// const reverse = text => {
//     let index = text.length - 1;
//     let reversedText = '';
//     while (index >= 0) {
//
//         const currentChar = text[index];
//         reversedText = `${reversedText}${currentChar}`;
//         index--;
//     }
//     return reversedText;
//
// };
// console.log(reverse('Game of Thrones'));

// const mysubstr = (str, length) => {
//     let i = 0;
//     let result = '';
//     while (i < length) {
//         const currentChar = str[i];
//         result = `${result}${currentChar}`;
//         i++;
//     }
//
//     return result;
// };
// // equal
// const mysubstr = (incomText, amongSymbols) => {
//     let extracted = incomText.substr(0, amongSymbols);
//     return extracted;
// };
// console.log(mysubstr('If I look back I am lost', 8));

// const isArgumentsForSubstrCorrect = (str, index, length) => {
//     if (index < 0) {
//         return false;
//     }
//     if (length < 0) {
//         return false;
//     }
//     if (index > str.length - 1) {
//         return false;
//     }
//     if (index + length > str.length) {
//         return false;
//     }
//
//     return true;
// };
// //
// const isArgumentsForSubstrCorrect = (incomText, startIndex, lengthSubstr) => {
//     let extractedText = incomText.substr(startIndex, lengthSubstr);
//
//     return (lengthSubstr < 0 || startIndex < 0 || startIndex > incomText.length - 1 || (lengthSubstr + startIndex) > (incomText.length - 1)) ? false : true;
// };
//
// const incomText = 'Sansa Stark';
// console.log(isArgumentsForSubstrCorrect(incomText, -1, 3));  // false
// console.log(isArgumentsForSubstrCorrect(incomText, 4, 100)); // false
// console.log(isArgumentsForSubstrCorrect(incomText, 10, 10)); // false
// console.log(isArgumentsForSubstrCorrect(incomText, 11, 1));  // false
// console.log(isArgumentsForSubstrCorrect(incomText, 3, 3));   // true
// console.log(isArgumentsForSubstrCorrect(incomText, 0, 5));   // true

// const countChars = (str, symb) => {
//     let i = 0, counter = 0;
//
//     while (i <= str.length - 1) {
//         let currentSymb = str[i];
//
//         if (currentSymb === symb) {
//             counter++;
//         }
//
//         i++;
//     }
//
//     return counter;
// };
// const str = 'If I look back I am lost';
// console.log(countChars(str, 'I')); // 3
// console.log(countChars(str, 'z')); // 0
// console.log(countChars(str, 'o')); // 3

// const shouter = text => {
//     let result = '';
//
//     if (text.length > 5) {
//         let counter = 0;
//
//         while (counter !== 100) {
//             result = `${result}${text}`;
//             counter++;
//         }
//     } else if (text.length === 0) {
//         return result;
//     } else if (text.length > 0 && text.length < 5) {
//         return text;
//     } else if (text.length === 5) {
//         let counter = 0;
//
//         while (counter !== 10) {
//             result = `${result}${text}`;
//             counter++;
//         }
//     }
//
//     return result;
// };
// console.log(shouter('HELLO'));

// const getEvenNumbersUpTo = num => {
//     let counter = 1,
//         result = '';
//
//     while (counter <= num) {
//         if (counter % 2 === 0) {
//             result += counter;
//         } else if (counter % 2 === 1 && counter !== 1 && counter !== num) {
//             result += ',';
//         }
//
//         counter++;
//     }
//
//     return result += '.';
// };
// console.log(getEvenNumbersUpTo(9));

// const getEvenNumbersUpTo = num => {
//     let counter = 1;
//     let result = '';
//
//     while (counter <= num) {
//         if (counter % 2 === 0) {
//             result = `${result}${counter},`;
//         }
//
//         counter++;
//     }
//
//     return result;
// };
// console.log(getEvenNumbersUpTo(9));

// const filterString1 = (str, char) => {
//     let index = 0;
//     let result = '';
//     while (index < str.length) {
//         const currentChar = str[index];
//         if (currentChar !== char) {
//             result = `${result}${currentChar}`;
//         }
//         index += 1;
//     }
//
//     return result;
// };
// console.log(filterString1('this is a new star', 's'));
// //
// const filterString = (str, symb) => {
//     let i = 0;
//
//     while (i <= str.length - 1) {
//         let rewrite = new RegExp(symb, 'g');
//
//         if (str[i] === symb) {
//             str = str.replace(rewrite, '');
//         }
//         i++;
//     }
//
//     return str;
// };
// console.log(filterString('this is a new star', 's'));

// const isPrime = number => {
//     if (number < 2) {
//         return false;
//     }
//
// let divider = 2;
//
// while (divider <= number / 2) {
//     if (number % divider === 0) {
//         return false;
//     }
//     divider += 1;
// }
// return true;
// };
// console.log(isPrime(1)); // false
// console.log(isPrime(2)); // true
// console.log(isPrime(3)); // true
// console.log(isPrime(4)); // false

// const doesContain = (str, symb) => {
//     let i = 0;
//
//     while (i <= str.length - 1) {
//         if (str[i] === symb) {
//             return true;
//         }
//         i++;
//     }
//     return false;
// };
// console.log(doesContain('Renly', 'R'));
// console.log(doesContain('Renly', 'r'));
// console.log(doesContain('Tommy', 'm'));
// console.log(doesContain('Tommy', 'd'));

// const reverseString = str => {
//     let i = str.length - 1,
//         result = '';
//
//     for (i; i >= 0; i--) {
//         const currentChar = str[i];
//         result = `${result}${currentChar}`;
//     }
//
//     return result;
// };
// console.log(reverseString('This is a new Star!'));

// const sumOfSeries = (startNum, finishNum) => {
//     if (startNum === finishNum) {
//         return startNum;
//     }
//
//     let result = 0, i = startNum;
//     for (i; i <= finishNum; i++) {
//         result += i;
//     }
//
//     return result;
// };
// console.log(sumOfSeries(2, 4));

// let proc = (fn, ...args) => {
//     let result = 0;
//
//     for (let index of args) {
//         result += index;
//     }
//     fn(result);
// };

// ;(function () {
//     console.log('hello world');
// })();
//
// const fnResult = (function () {
//     return 'Hello World!';
// })();
// console.log(fnResult);

// let pow = (x, n) => {
//     let res = 1;
//     return res = x ** n;
// };
// console.log(pow(2, 3));

// let nums = '12345';
// let arrNums = nums.split('');
// console.log(arrNums);

// let nums = [1, 2, 3, 4];
// nums[nums.length - 1] = 100;
// console.log(nums);

// let nums = [1, 2, 3, 4];
// let n = nums.pop();
// console.log(nums, n);
//
// nums.push(n);
// console.log(nums, n);
//
// let first = nums.shift();
// console.log(nums, first);
//
// nums.unshift(first);
// console.log(nums, first);
//
// delete nums[1];
// console.log(nums, first, n);

// let people = ['Tom', 'Alice', 'Bob', 'Sam'];
//
// for (let i = 0; i < people.length; i++) {
//     console.log(i + ': ' + people[i]);
// }



// let arr = ["Gerald","Vesemir","ciri","triss"];
// function print(arr) {
//     for (let index in arr) {
//         console.log(`${index}`);
//     }
// }
// print();

// let age = 26;
// console.log(age);
// console.log(age.toString());
// console.log("null type is: " + typeof null);
// console.log(null);

// let fullAge = 30;
// const birthYear = 1989;
// let currentYear = 2020;
// let isFullAge = currentYear - birthYear;
// console.log(isFullAge);
// console.log(isFullAge >= fullAge);

// const courseStatus = 'fail'; // ready, fail, pending
//
// if (courseStatus === 'ready') {
//     console.log('Course is ready now!');
// } else if (courseStatus === 'pending') {
//     console.log('Course is in process...');
// } else {
//     console.log('Something get wrong.');
// }

// // const isReady = false;
// const isReady = true;
//
// // if (!isReady)
// //     console.log('Something get wrong!');
//
// isReady ? console.log("All OK!") : console.log("All NOT ok!");

// function calculateAge(year) {
//     return 2020 - year;
// }
// console.log(calculateAge(1989));
//
// function logInfoAbout(name, year) {
//     const age = calculateAge(year);
//     console.log('A man named ' + name + ' is now ' + age + ' years old.');
// }
// logInfoAbout("Dmytro", 1989);

// // const cars = new Array('Mazda', 'Mercedes', 'Ford');
// const cars = ['Mazda', 'Mercedes', 'Ford', 'Porsche'];
// // console.log(cars);
// // console.log(cars.length);
// // console.log(cars[1]);
// // cars[1] = 'Porsche';
// // console.log(cars[1]);
// // console.log(cars);
//
// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i];
//     console.log(car);
// }
// // equal
// for (let car of cars)
//     console.log(car);

// const person = {
//     firstName: 'Dmytro',
//     lastName: 'Onysko',
//     birthYear: 1989,
//     languages: ['Ua', 'Ru', 'En'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet');
//     }
// };
// console.log(person.firstName);
// console.log(person['lastName']);
// const key = 'languages';
// console.log(person[key]);
// person.hasWife = true;
// person.isProgrammer = true;
// console.log(person);
// person.greet();

// const numInt = 42;
// const numFloat = 42.24;
// const pow1 = 10e3;
// const pow2 = 10**3;
// console.log(pow1, pow2);

// const name = "Dmytro", age = 30;
// // const output = `Hello, my name is ${name} and I am ${age} years old.`;
// // console.log(output);
//
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf('tr'));
// console.log(name.startsWith('dm'));
// console.log(name.startsWith('Dm'));
// console.log(name.endsWith('ro'));
// console.log(name.repeat(3));
//
// const pass = '   password   ';
// console.log(pass);
// console.log(pass.trim());
// console.log(pass.trimRight());
// console.log(pass.trimLeft());

// function logPerson(s, name, age) {
//     if (age < 0)
//         age = 'Not yet born'
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }
// const personName = 'Dmytro',
//     personName2 = 'Vasyl',
//     personAge = 30;
//     personAge2 = -10;
// const output = logPerson`Name: ${personName}, Age: ${personAge}!`;
// const output2= logPerson`Name: ${personName2}, Age: ${personAge2}!`;
// console.log(output);
// console.log(output2);

// // let a, b = null;
// // let result = a ?? b;
//
// let a, b = 1;
//
// let result = (a !== null && a !== undefined) ? a : b;
//
// console.log(result);

// // let user;
// let user = 'Dmytro';
//
// console.log(user ?? 'Anon');

// let firstName = null;
// let lastName = null;
// let nickName;
// // let nickName = 'Super coder';
//
// console.log(firstName ?? lastName ?? nickName ?? 'Anonymous');

// let height = 0;
//
// console.log('||', height || 100);
// console.log('??', height ?? 100);

// let x = (1 && 2) ?? 3;
// console.log(x);
//
// // BDD - Mocha
// describe('pow', function () {
//     it('is reduced to the power n', function () {
//         assert.equal(pow(2, 3), 8);
//     });
// });

// let result = '';
//
// for (let i = 0; i < 8; i++) {
//     if (i % 2) {
//         result += ' ';
//     } else {
//         result += 'x';
//     }
// }
//
// console.log(result);

// let n = 10;
//
// for (let i = 0; i <= n; ++i) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }


// let n = 10;
//
// nextPrime:
//     for (let i = 2; i <= n; i++) { // Для всех i...
//
//         for (let j = 2; j < i; j++) { // check on divide
//             if (i % j === 0) continue nextPrime;
//         }
//
//         console.log( i ); // a simple number
//     }

// let result = '';
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j ++) {
//         result += i;
//     }
// }
// console.log(result); // 111222333444555666777888999

// let result = '';
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         result += `${i}${j} `;
//     }
// }
//
// console.log(result); // 11 12 13 21 22 23 31 32 33

// let result = '';
//
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         result += '*';
//     }
//     result += '_';
// }
//
// console.log(result); // ***_***_***_

// let result = '';
//
// for (let i = 1; i <= 3; i++) {
//
//     result += `${i}\n`;
//
//     for (let j = 1; j <= 3; j++) {
//         result += '*_';
//
//         if (j === 3) result += '\n';
//     }
//
// }
//
// console.log(result);
//
// // 1
// // *_*_*_
// // 2
// // *_*_*_
// // 3
// // *_*_*_

// let result = '';
//
// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 3; j++) {
//         result += '*_';
//     }
//     result += '\n';
// }
//
// console.log(result);
//
// // *_*_*_
// // *_*_*_
// // *_*_*_
// // *_*_*_

// let a = 4;
//
// switch (a) {
//     case 3:
//         console.log( 'Less' );
//         break;
//     case 4:
//         console.log( 'In the target!' );
//         break;
//     case 5:
//         console.log( 'More' );
//         break;
//     default:
//         console.log( "what is the value?" );
// }
