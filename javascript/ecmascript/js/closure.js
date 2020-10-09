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
//   let name = "Peter";
//
//   return function displayName() {
//     console.log(name);
//   };
// }
//
// let peter = person();
// peter();

"use strict";
function myFunc() {
  const a = {
    one: 1,
    two: 2,
    three: this
  };
  console.log("from a object", a.three); // from a object
  console.log("from myFunc function", this); // from myFunc function
}
myFunc();
console.log("Global", this); // Global
