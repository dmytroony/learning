// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n);
//     }
// }
// const calc = createCalcFunction(2);
// calc();
// const calc1 = createCalcFunction(3);
// calc1();

// function createIncrementor(n) {
//     return function (num) {
//         return n + num;
//     }
// }
//
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(3));
// console.log(addTen(41));

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com');
// const netUrl = urlGenerator('net');
// console.log(comUrl('google'));
// console.log(netUrl('zaycev'));

// function bind(context, fn) {
//     return function (...args) {
//         fn.apply(context, )
//     }
// }
//
// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }
//
// const person1 = {
//     name: 'John',
//     age: 32,
//     job: 'Frontend',
// };
//
// const person2 = {
//     name: 'Michael',
//     age: 28,
//     job: 'SMM',
// };
//
// bind(person1, logPerson)();
// bind(person2, logPerson)();

// function createMember(name) {
//     return function (lastName) {
//         console.log(name + lastName)
//     }
// }
//
// const logWithLastName =  createMember('Dmytro')
// console.log(logWithLastName('Onysko'))

// function createCalcFn(n) {
//   return function () {
//     console.log(1000 * n)
//   }
// }
//
// const calc = createCalcFn(42)
// calc()

// function createIncrement(a) {
//   return function (b) {
//     return a + b
//   }
// }
//
// const addOne = createIncrement(1) // it is a closure
// console.log(addOne(10))
//
// // const addTen = createIncrement(10)
// // console.log(addTen(41))

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`
//   }
// }
//
// const comUrl = urlGenerator('com')
// console.log(comUrl('google'))
//
// const orgUrl = urlGenerator('org')
// console.log(orgUrl('wikipedia'));

// let a = 'global';
//
// function outer() {
//   let b = 'outer';
//
//   function inner() {
//     let c = 'inner'
//
//     console.log(c); // inner
//     console.log(b); // outer
//     console.log(a); // global
//   }
//
//   console.log(a); // global
//   console.log(b); // outer
//
//   inner();
// }
//
// outer();
//
// console.log(a); // global

// function person() {
//   return function displayName(name) {
//     console.log(name);
//   };
// }
// let personName = person()
//
// personName('Natalie')
// personName('Basil')

// function getCounter() {
//   let counter = 0;
//   return function() {
//     return counter++;
//   }
// }
//
// let count = getCounter();
// console.log(count()) // 1
// console.log(count()) // 2
// console.log(count()) // 3

// let a = 'Hello World!';
// function first() {
//   let b = 25;
//   console.log('Inside first function');
// }
// first();
// console.log('Inside global execution context');

// function Person(name) {
//   let secret = 'secret'
//   this.name = name
//
//   this.setName = function (newName) {
//     this.name = newName
//   }
//
//   this.setNameToFoo = function () {
//     this.name = foo
//   }
//
//   this.getSecret = function () {
//     return secret
//   }
// }
//
// let person = new Person('Max')
//
// console.log(person.name)
//
// person.setName('Oliver')
//
// console.log(person.name)
//
// // person.setNameToFoo()
//
// let foo = 'Foo'
// person.setNameToFoo()
// console.log(person.name)
//
// console.log(person.secret)
// console.log(person.getSecret())

// let incrementUntil = function (max) {
//   if (num >= max) return num
//   num++
//   incrementUntil(max)
// }
//
// let num = 0
// incrementUntil(3)
// // console.log(num);
// // console.log(num);
//
// num = 0
// let myFun = function () {
//   incrementUntil(3)
//   return num
// }
// myFun()
// // console.log(num);
//
// num = 0
// let myFun2 = function () {
//   let num = -1
//   incrementUntil(3)
//   return num
// }
// console.log(myFun2());
// console.log(num);

// function one() {
//   let a = 8
//
//   return a * 12
// }
//
// console.log(one())

// function t1() {
//   let a = 0
//
//   return function() {
//     a = a + 1
//     return a
//   }
// }
//
// let b = t1()
// console.log('b', b())
// console.log('b', b())
//
// let c = t1()
// console.log('c', c())
// console.log('c', c())
// console.log('c', c())
// console.log('c', c())

// let name = 'John';
//
// function sayHi() {
//   console.log(`Hi, ${name}`);
// }
// name = 'Pete';
// sayHi();

// function makeWorker() {
//   let name = 'Pete';
//
//   return function () {
//     console.log(name);
//   };
// }
// let name = 'John';
// let work = makeWorker();
// work();

// let phrase = 'Hello';
//
// say('Boris');
//
// function say(name) {
//   console.log(`${phrase} ${name}`);
// }

// function sayHiBye(fName, lName) {
//   //
//   function getFullName() {
//     return fName + ' ' + lName;
//   }
//   //
//   console.log(`Hello, ${getFullName()}`);
//   console.log(`Bye, ${getFullName()}`);
// }
// sayHiBye('John', 'Doe');

// function User(name) {
//   this.sayHi = function () {
//     console.log(name);
//   };
// }
// let john = new User('John');
// let marry = new User('Marry');
//
// john.sayHi();
// marry.sayHi();

// function makeCounter() {
//   let count = 0;
//
//   return function () {
//     return count++;
//   }
// }
// let counter1 = makeCounter();
// let counter2 = makeCounter();
//
// console.log(counter1()); // 0
// console.log(counter1()); // 1
//
// console.log(counter2()); // 0

// function makeWorker() {
//   let name = 'Pete';
//
//   return function () {
//     console.log(name);
//   }
// }
// let name = 'John';
// let work = makeWorker();
// work(); // Pete

// let phrase = 'Hello';
//
// if (1) {
//   let user = 'John';
//   console.log(`${phrase}, ${user}`);
// }
// // console.log(user); // is not defined

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// a "simple" block
// {
//   let message = 'Hello';
//   console.log(message);
// }

// (function () {
//   console.log('IIFE 1');
// })();
//
// (function () {
//   console.log('IIFE 2');
// }());
//
// !function () {
//   console.log('IIFE 3');
// }();
//
// +function () {
//   console.log('IIFE 4');
// }();

// function fn() {
//   let value1 = 123;
//   let value2 = 456;
// }
// console.log(fn());

// function fn() {
//   let value = 123;
//
//   function g() {
//     console.log(value);
//   }
//
//   return g;
// }
// let g = fn();
//
// g();

// function random() {
//   let value = Math.random();
//
//   return function () {
//     console.log(value);
//   };
// }
// let arr = [random(), random(), random(),];
// arr[0]();
// arr[1]();
// arr[2]();

// function fn() {
//   let value = 123;
//
//   function g() {
//     console.log(value);
//   }
//
//   return g;
// }
// let g = fn();
// g();
// g = null;
// g();

// function fn() {
//   let value = Math.random();
//
//   return function g() {
//     debugger;
//   };
// }
// let g = fn();
// g();

// function makeCounter() {
//   let count = 0;
//
//   return function () {
//     return count++;
//   }
// }
//
// let counter1 = makeCounter();
// let counter2 = makeCounter();
//
// console.log(counter1());
// console.log(counter1());
//
// console.log(counter2());
// console.log(counter2());

// function Counter() {
//   let count = 0;
//
//   this.up = function () {
//     return ++count;
//   };
//   this.down = function () {
//     return --count;
//   };
// }
//
// let counter = new Counter();
//
// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1

// 'use strict';
// let phrase = 'Hello';
//
// if (1) {
//   let user = 'John';
//
//   function sayHi() {
//     console.log(`${phrase} ${user}`);
//   }
// }
//
// sayHi();

// let sum = function (a, b) {
//   return a + b;
// }
// console.log(sum(1, 2));

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// console.log(sum(2)(1));
// console.log(sum(5)(-1));

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   }
// }
//
// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   }
// }
//
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// // Sort by Field
// let users = [
//   {name: "John", age: 20, surname: "Johnson",},
//   {name: "Pete", age: 18, surname: "Peterson",},
//   {name: "Ann", age: 19, surname: "Hathaway",},
// ];
//
// function byField(field) {
//   return (a, b) => a[field] > b[field] ? 1 : -1;
// }
//
// // users.sort(byField('name'));
// // console.log(users);
//
// users.sort(byField('age'));
// console.log(users);

// function makeArmy() {
//   let shooters = [];
//
//   for (let i = 0; i < 10; i++) {
//     let shooter = function () {
//       console.log(i);
//     };
//     shooters.push(shooter);
//   }
//
//   return shooters;
// }
//
// let army = makeArmy();
// army[0]();
// army[5]();

// function sum(a) {
//   return function (b) {
//     return a + b;
//   }
// }
//
// console.log(sum(2)(3));

// let arr = [1, 2, 3, 4, 5, 6, 7];
//
// function inBetween(a, b) {
//   return x => x >= a && x <= b;
// }
// function inArray(array) {
//   return x => array.includes(x);
// }
//
// console.log( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
// console.log( arr.filter(inArray([1, 2, 10])) ); // 1,2

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(field) {
//   return (a, b) => a[field] > b[field] ? 1 : -1;
// }
// users.sort(byField('age'));
// console.log(users);

// function makeArmy() {
//   let shooters = [];
//
//   for (let i = 0; i < 10; i++) {
//     let shooter = function () {
//       console.log(i);
//     };
//     shooters.push(shooter);
//   }
//   return shooters;
// }
//
// let army = makeArmy();
//
// army[0]();
// army[5]();

// function sum(a) {
//   return function(b) {
//     return a + b;
//   }
// }
// console.log(sum(2)(3));

// let arr = [1, 2, 3, 4, 5, 6, 7,];
//
// function inBetween(a, b) {
//   return x => x >= a && x <= b;
// }
// function inArray(array) {
//   return x => array.includes(x);
// }
// console.log(arr.filter(inBetween(3, 6)));
// console.log(arr.filter(inArray([1, 2, 10])));

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];
//
// function byField(field) {
//   return (a, b) => a[field] > b[field] ? 1 : -1;
// }
//
// console.log(users.sort(byField('name')));


