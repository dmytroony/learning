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

// return false if:
// 1) lengthSubstr === -number;
// 2) startIndex === -number;
// 3) startIndex > str.length - 1;
// 4) (substr.length + startIndex) > str.length - 1;
const isArgumentsForSubstrCorrect = (str, startIndex, lengthSubstr) => {
    return str + startIndex + lengthSubstr;
};
console.log(isArgumentsForSubstrCorrect('Lorem ipsum sit dolor amet!', 3, 9));
const str = 'Sansa Stark';
isArgumentsForSubstrCorrect(str, -1, 3);  // false
isArgumentsForSubstrCorrect(str, 4, 100); // false
isArgumentsForSubstrCorrect(str, 10, 10); // false
isArgumentsForSubstrCorrect(str, 11, 1);  // false
isArgumentsForSubstrCorrect(str, 3, 3);   // true
isArgumentsForSubstrCorrect(str, 0, 5);   // true