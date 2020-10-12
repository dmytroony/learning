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
