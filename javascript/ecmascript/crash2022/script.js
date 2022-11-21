// const person = {
//   firstName: "Name",
//   lastName: "SecondName",
//   age: 111,
// };
// console.log(person.lastName);

// console.log(typeof parseInt(3.14).toString());

// console.log(Boolean('01'));

// const var1 = 10;
// const var2 = '10';

// // console.log(var1 == var2, var1 === var2);

// if (var1) console.log('pos');

// switch (var1) {
//   case 2:
//     console.log('continue');
//     break;
//   case 10:
//     console.log('congrats!');
//     break;
//   default:
//     console.log('not a valid');
//     break;
// }

// const arr = [1, 3, 5, 7, 9,];

// for (const num of arr) {
//   console.log(num);
// }

// let a = 10;

// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// console.log(fn);
// fn();
// fn();

// console.log(sum(2, 3, 5));

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(fn) {
//   return function (a) {
//     console.log(a);
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       }
//     }
//   }
// }

// const curriedSum = curry(sum);

// curriedSum(2)(3)(5);

// PL error, null != object
// console.log(typeof null) // object

// let id = Symbol("id");
// console.log(id.toString() + " hello");

// [] + []; // ""

// console.log(Array(16));

// const color = 'orange';

// switch (color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'green':
//     console.log('Color is green');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Unknowing color...');
// }

// for (let i = 1; i <= 5; i++)
//   console.log('Iteration number: ' + i);

function sayHi(name) {
  const age = 10;
}

const age = 12;
const things = ['cool', 'double!!!'];
