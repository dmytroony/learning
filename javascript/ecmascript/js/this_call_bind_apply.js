// function hello() {
//     console.log('Hello frome hello', this);
// }
// console.log(hello());

// const person = {
//     name: 'Dmytro',
//     age: 30,
//     sayHello: hello,
//     // sayHelloWindow: hello.bind(window),
//     sayHelloWindow: hello.bind(this),
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd();
//     },
// };

// const iryna = {
//     name: 'Iryna',
//     age: 25,
// };

// const fnIrynaInfoLog = person.logInfo.bind(iryna);
// fnIrynaInfoLog('frontend', '380991232323');
// equal
// const fnIrynaInfoLog = person.logInfo.bind(iryna, 'frontend', '380991232323');
// fnIrynaInfoLog();

// person.logInfo.call(iryna, 'frontend', '380991232323');

// person.logInfo.apply(iryna, ['frontend', '380991232323']);

//

// const array = [1, 2, 3, 4, 5];
//
// // function multBy(arr, n) {
// //     return arr.map(function (i) {
// //         return i * n;
// //     });
// // }
//
// Array.prototype.multBy = function(n) {
//     return this.map(function (i) {
//         return i * n;
//     });
// };
// console.log(array.multBy(2));
//
// // console.log(multBy(array, 5));

// console.log(this)

// document.querySelector('#h3').onclick = function (){
//   console.log(this)
//   this.style.background = 'yellow'
// }

// function setBackground() {
//   console.log(this);
//   this.style.background = "lightgreen";
// }
//
// // let p = document.querySelectorAll('p')
// //
// // p.forEach(function (elem) {
// //   elem.onclick = setBackground
// // })
//
// // document.querySelector('p').addEventListener('click', setBackground)
// let p = document.querySelectorAll("p");
//
// p.forEach(function(elem) {
//   elem.addEventListener("click", setBackground);
// });

// let mouse = {
//   model: 'M100',
//   getModel: function () {
//     return this.model;
//   }
// }
//
// // let getModelMouse = mouse.getModel;
// // console.log(getModelMouse());
//
// // strict mode - Uncaught TypeError: Cannot read property 'model' of undefined
// // normal - undefined
//
// let getModelMouse = mouse.getModel.bind(mouse);
// console.log(getModelMouse()); // "M100"

// BIND
// function changeScore(amount) {
//   this.score = this.score + amount;
//   console.log(this.score);
// }
//
// let user0001 = {
//   name: 'Alex',
//   score: 1300
// }
//
// let user0002 = {
//   name: 'Anastasia',
//   score: 2500
// }
//
// let changeScoreUser0001 = changeScore.bind(user0001);
// let changeScoreUser0002 = changeScore.bind(user0002);
//
// changeScoreUser0001(400); // 1700
// changeScoreUser0001(-800); // 900
//
// changeScoreUser0002(-700); // 1800
// changeScoreUser0001(300); // 1200

// function checkInRange(min, max, value) {
//   if (typeof value !== 'number') {
//     return false;
//   }
//   return value >= min && value <= max;
// }
//
// let checkInRange10_20 = checkInRange.bind(null, 10, 20);
//
// console.log(checkInRange10_20(15)); // true
// console.log(checkInRange10_20(25)); // false

// let myName = "Dmytro"; // global var
//
// function sayHello() { // global scope
//   let myName1 = "Bruce";  // local var
//
//   console.log("Hello, " + myName);
//   console.log("Hello, " + myName1);
//
//   function sayHi() { // local scope
//     let myName2 = "Daniella"; // local var
//
//     console.log("Hello, " + myName);
//     console.log("Hello, " + myName1);
//     console.log("Hello, " + myName2);
//   }
//
//   sayHi();
// }
//
// sayHello();

// let myName = "Eugen"; // global var
//
// function sayHello() { // context of fn
//   console.log("Hello, " + myName);
// }
//
// function sayHi() { // context of fn
//   let myName = "Dmytro"; // local var
//
//   console.log("Hello, " + myName);
// }
//
// sayHi();
//
// sayHello();

// function hello() {
//   console.log('Hello', this)
// }
//
// const person = {
//   name: 'Dmytro',
//   age: 30,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info`)
//     console.log(`Name: ${this.name}`)
//     console.log(`Age: ${this.age}`)
//     console.log(`Job: ${job}`)
//     console.log(`Phone: ${phone}`)
//     console.groupEnd()
//   }
//
//   // helloGlobal: hello.bind(window),
//   // equal
//   // helloGlobal: hello.bind(this),
// }
//
// // console.log(person);
// // console.log(person.sayHello());
// // console.log(person.helloGlobal());
//
// // person.logInfo()
//
// const person2 = {
//   name: 'Alex',
//   age: '20',
// }
//
// const fnPerson2InfoLog = person.logInfo.bind(person2, 'Fullstack', '937-99-92')
// // fnPerson2InfoLog()
//
// // person.logInfo.call(person2, 'Fullstack', '937-99-92')
// person.logInfo.apply(person2, ['Project Manager', '425-99-92'])

// const array = [1, 2, 3, 4, 5]
//
// // v1 junior
// // function multBy(multiplier) {
// //   let res = []
// //
// //   for (let i = 0; i < array.length; i++) {
// //     let multiplied = array[i] * multiplier
// //     res.push(multiplied)
// //   }
// //   console.log(res)
// // }
// //
// // multBy(3)
//
// // v2 middle used this
// // function multBy(result, multiplier) {
// //   return result.map(function (i) {
// //     return i * multiplier
// //   })
// // }
// // console.log(multBy(array, 5));
//
// // v3 seniot used this + Prototype
// Array.prototype.multBy = function (multiplier){
//   // console.log('multBy', this)
//   return this.map(function (i) {
//     return i * multiplier
//   })
// }
// console.log(array.multBy(5));
