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
const normalizeUrl = url => {
    const oldProtocol = 'http://',
        newProtocol = 'https://';

    if (url.startsWith(oldProtocol)) {
        return url.slice(oldProtocol.length).padStart(url.length + 1, newProtocol);
    } else if (url.startsWith(newProtocol)) {
        return url;
    } else if (!(url.startsWith(oldProtocol))) {
        return newProtocol + url;
    }

};
console.log(normalizeUrl('google.com'));
console.log(normalizeUrl('http://ai.fi'));
console.log(normalizeUrl('https://www.site.com'));

// PLAN
// 0) code.basics
// 1) Events
// 2) Objects
// 3) DOM
// 4) API
// 5) ReactJS