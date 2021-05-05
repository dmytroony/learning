// let a = 1
//
// function recursion() {
//   a++
//   console.log(a)
//   if (a > 10) return a
//   recursion()
// }
//
// recursion()

// let out1 = document.querySelector("#out1");
//
// function getStyleOut1(width, height, position, background) {
//   out1.style.width = width;
//   out1.style.height = height;
//   out1.style.position = position;
//   out1.style.background = background;
// }
// getStyleOut1("50px", "50px", "relative", "lightgreen");
//
// let offset = 0;
// function move() {
//   offset += 5;
//   out1.style.left = offset + "px";
//   if (offset > 200) return true;
//   setTimeout(move, 500);
// }
//
// document.querySelector("button").addEventListener("click", move);

// function powLoop(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) result *= x;
//   return result;
// }
// // console.log(powLoop(2,3));
//
// function powRecursion(x, n) {
//   if (n === 1) return x;
//   else return x * powRecursion(x, n - 1);
// }
// // console.log(powRecursion(2, 3));
//
// function powRecShort(x, n) {
//   return n === 1 ? x : x (x * powRecShort(x, n - 1));
// }
// powRecShort(2, 3);

// function sum(n) {
//   return (n === 0) ? 0 : n + sum(n - 1);
// }
//
// // console.log(sum(5));
// console.log(sum(100000));

// function sum(number, s = 0){
//   return number === 0 ? s : sum(number - 1, s + number)
// }
//
// console.log(sum());

// function trampoline(fn) {
//   return function (...args) {
//     let result = fn.apply(fn.context, args);
//     while (typeof result === 'function') result = result();
//
//     return result = result();
//   }
// }
// console.log(trampoline());

// function pow(x, n) {
//   return n === 1 ? x : x * pow(x, n - 1);
// }
//
// console.log(pow(2, 3));

// function powRec(x, n) {
//   if (n === 1) return x;
//   else return x * powRec(x, n - 1);
// }
// console.log(pow(2, 3));

// function powLoop(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) result *= x;
//   return result;
// }
// console.log(powLoop(2, 3));

// let company = {
//   sales: [
//     { name: 'John', salary: 1000, },
//     { name: 'Alice', salary: 600, },
//   ],
//   development: {
//     sites: [
//       { name: 'Peter', salary: 2000, },
//       { name: 'Alex', salary: 1800, },
//     ],
//     internals: [
//       { name: 'Jack', salary: 1300, },
//     ],
//   },
// };
//
// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (const subDep of Object.values(department)) {
//       sum += sumSalaries(subDep);
//     }
//
//     return sum;
//   }
// }
//
// console.log(sumSalaries(company));

// let arr = [1, 2, 3, 4,];
// for (let i = 0; i < arr.length; i++) console.log(`${i}: ${arr[i]}`);

// function pow(x, n) {
//   return n === 1 ? x : x * pow(x, n - 1);
// }
// console.log(pow(2, 3));

// function pow(x, n) {
//   let result = 1;
//
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//
//   return result;
// }
// console.log(pow(2, 3));

// function pow(x, n) {
//   if (n === 1) return x;
//   else return x * pow(x, n - 1);
// }
// console.log(pow(2, 3));

// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 600
//   }],
//
//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],
//
//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };
//
// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => prev + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subDep of Object.values(department)) {
//       sum += sumSalaries(subDep);
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
// // console.log(list);
// // list = {value: 5, next: list};
// // console.log(list);
// console.log(list.next.next.next.value);

// function sumTo(n) {
//   // // Loop
//   // let sum = 0;
//   // for (let i = 0; i <= n; i++) {
//   //   sum += i;
//   // }
//   // return sum;
//
//   // // Recursion
//   // if (n === 1) return 1;
//   // else return n + sumTo(n - 1);
//
//   // Arithmetic progression
//   return n * (n + 1) / 2;
// }
// console.log(sumTo(100));

// function factorial(n) {
//   return (n - 1) ? n * factorial(n - 1) : 1;
// }
// console.log(factorial(5)); // 120

// function factorial(n) {
//   // let result = 1;
//   // for (let i = n; i > 0; i--) result *= i;
//   // return result;
//
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(3));

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2); // is too long
// }
// console.log(fib(77));

// function fib(n) {
//   let a = 1,
//       b = 1;
//
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//
//     a = b;
//     b = c;
//   }
//
//   return b;
// }
//
// console.log(fib(7));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };
//
// function printListByRecursionNext(list) {
//   console.log(list.value);
//
//   if (list.next) printListByRecursion(list.next);
// }
// printListByRecursionNext(list);

// function printListByLoopNext(list) {
//   let tmp = list;
//
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }
// printListByLoopNext(list);

// function printListByLoopBefore(list) {
//   let arr = [];
//   let tmp = list;
//
//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
//
//   // arr.reverse();
//   // for (const el of arr) {
//   //   console.log(el);
//   // }
//
//   for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
// }
// printListByLoopBefore(list);

// function printListByRecursionBefore(list) {
//   if (list.next) printListByRecursionBefore(list.next);
//
//   console.log(list.value);
// }
// printListByRecursionBefore(list);

// function sum(n) {
//   return n === 0 ? n : n + sum(n - 1);
// }
// console.log(sum(3));

// function sum(n) {
//   // return n === 0 ? 0 : n + sum(--n); // Max call stack
//   return n === 0 ? 0 : n + sum(--n);
// }
// console.log(sum(3));

// function sum(n) {
//   let sum = 0;
//   for (let i = n; i > 0; i--) sum += i;
//   return sum;
// }
// console.log(sum(4));

// function multiplyRecursive(a, b) {
//   if (b === 0) return 0;
//
//   if (b > 0) return a + multiplyRecursive(a, b - 1);
//
//   else if (b < 0) return -a + multiplyRecursive(a, b + 1);
//
//   return 0;
// }
// console.log(multiplyRecursive(2, 4));
// console.log(multiplyRecursive(6, -4));

// function countdown(i) {
//   console.log(i);
//
//   // if (i <= 1) return;
//   // else countdown(i - 1);
//
//   if (i > 1) countdown(i - 1);
//
//   return 0;
// }
// countdown(5);

// function fact(x) {
//   return x === 1 ? 1 : x * fact(x - 1);
// }
// console.log(fact(4));

// function sumTo(n) {
//   // return n <= 1 ? 1 : n + sumTo(n - 1);
//
//   let sum = 0;
//   for (let i = n; i >= 1; i--) sum += i;
//   return sum;
// }
// console.log(sumTo(4));

// function fact(n) {
//   return n === 1 ? n : n * fact(n - 1);
// }
// console.log(fact(4));

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// console.log(fib(7));
// //
// //
// function fibo(n) {
//   let a = 1, b = 1;
//
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//
//   return b;
// }
// console.log(fibo(7));

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// function printList(list) {
//   // console.log(list.value);
//   // if (list.next) printList(list.next);
//
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }
// printList(list);

// function printReverseList(list) {
//   // if (list.next) printReverseList(list.next);
//   // console.log(list.value);
//
//   let tmp = list;
//   let arr = [];
//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }
//   console.log(arr);
//   for (let i = arr.length - 1; i >= 0; i--) console.log(arr[i]);
// }
// printReverseList(list);

// let obj1 = {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3,
//       arr: ['a', 'b', 'c',],
//     },
//   },
// };
//
// let arr1 = [{a:'a'}, {b:'b'}];
//
// // const v8 = require('v8');
// // const structuredClone = obj1 => v8.deserialize(v8.deserialize(obj1));
//
// import _ from 'lodash';
// const nestedArray = [["a"], ["b"], ["c"]];
//
// const deepCopyWithLodashCloneDeep = _.cloneDeep(nestedArray);
// console.log(nestedArray[0] === deepCopyWithLodashCloneDeep[0]);

// function fn() {
//   let showArg = () => console.log(arguments[0]);
//   showArg(2);
// }
// fn(1);

// let arr = [3, 5, 1];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
//
// console.log(Math.max(...arr1, ...arr2));

// let str = 'Hello';
// // console.log([...str]);
// console.log(Array.from(str));
