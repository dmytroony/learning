// Function Declaration
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet('Dmytro');

// Function Expression
// const greet2 = name =>
//     console.log(`Hello, ${name}`);
// greet('Vasyl');

// console.log(typeof greet);
// console.dir(greet);
// console.log(typeof greet2);
// console.dir(greet2);

//Anon fn
// // setInterval(function () {
// //     console.log(Math.random());
// // }, 1000);
//
// let counter = 0;
// const interval = setInterval(function () {
//     if (counter === 10){
//         clearInterval(interval);
//     } else {
//         console.log(++counter);
//     }
// }, 1000);

// Arrow fn
// const arrow = name =>
//     console.log(`Hello, ${name}!`)
//
// arrow('Dmytro')

// const sum = (a, b = 1) => a + b
// console.log(sum(41))

// function sumAll(...all) {
//     let result = 0
//     for (let num of all)
//         result += num
//
//     return result
// }
// const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log(res)

// function t1() {
//     console.log(1)
//     debugger
//     console.log(2)
//     console.log(3)
// }
//
// t1()
// // let two = () => 5
// // console.log(two());
//
// const t2 = () => {
//     console.log(1)
//     debugger
//     console.log(2)
//     console.log(3)
// }
// t2()

// const a = [1, 2, 3,]
//
// let b = a.map(item => item * 3)
//
// console.log(b);

// function zet(n) {
//     if (n >= 0) return 1
//     else return 0
// }
//
// console.log(zet(-3));
// console.log(zet(4));

// let zet2 = (n) => (n >= 0 ? 1 : 0)
// console.log(zet2(2))
// console.log(zet2(-1))

// const b = [2, 3, 5]
// let mb = b.map(item => ({'num': item}))
// console.log(mb);

// document.querySelector("#test-btn").addEventListener("click", () => {
//   fetch("./file.json")
//     .then(res => res.json())
//     .then(file => {
//       file.forEach(item => {
//         console.log(item.name);
//       });
//     });
// });

// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// console.log(getRandomBetween(10, 42));

// function logPerson(s, name, age) {
//   if (age < 0) age = 'No born';
//
//   return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }
//
// const personName = 'Andrew',
//     personName2 = 'Louis',
//     personAge = 25,
//     personAge2 = -10,
//     output = logPerson`Name: ${personName}, Age: ${personAge}!`;
//     output2 = logPerson`Name: ${personName2}, Age: ${personAge2}!`;
//
// console.log(output);
// console.log(output2);

// let counter = 0;
//
// const interval = setInterval(() => {
//   counter === 5 ? clearInterval(interval) : console.log(++counter);
// }, 1000);

// function createMember(name) {
//   return function(lastName) {
//     console.log(name + lastName);
//   };
// }
//
// const logWithLastName = createMember("Name1");
//
// console.log(logWithLastName("lastName1"));
// console.log(logWithLastName("lastName2"));

// function checkAge(age) {
//   age = +prompt('Enter your age here...', '18');
//
//   if (age > 18) {
//     console.log(true);
//   } else {
//     return confirm('Did your parents give an access?');
//   }
// }
//
// checkAge();

// function checkAge(age) {
//   // return (age > 18) ? true : confirm('Did your parents give an access?');
//
//   return (age > 18) || confirm('Did your parents give an access?');
// }
//
// console.log(checkAge(19));

// function min(a, b) {
//   return Math.min(a, b);
// }
//
// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

// function pow(x, n) {
//   if (n >= 1) return x ** n;
//   else return `${n} not supported. use a natural number please`;
// }

// function pow(x, n) {
//   let result = x;
//
//   for (let i = 1; i < n; i++) {
//     result = result * x;
//   }
//
//   return result;
// }
//
// // let x = prompt("x?", '');
// // let n = prompt("n?", '');
// //
// // if (n < 1) {
// //   console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
// // } else {
// //   console.log( pow(x, n) );
// // }
//
// console.log(pow(3, 2)); // 9
// // console.log(pow(3, 3)); // 27
// // console.log(pow(1, 100)); // 1

// let sayHi = function () {
//   console.log('Hello from sayHi');
// }
//
// sayHi();
//
// let func = sayHi;
//
// func = function () {
//   console.log('Hello from func');
// }
//
// func();
//
// console.log(sayHi);
// console.log(func);

// function ask(question, yes, no) {
//   if ( confirm(question) ) {
//     yes();
//   } else {
//     no();
//   }
// }
//
// function showOk() {
//   console.log('Confirm?');
// }
//
// function showCancel() {
//   console.log('Cancelled.');
// }
//
// ask('Do you agree?', showOk(), showCancel());

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }
//
// ask('Do you agree?',
//     () => console.log('Confirmed.'),
//     () => console.log('Cancelled.')
// );

// const globalObj =  {
//     obj: {
//         a: 1,
//         b: 2,
//         c: 3,
//         globalThis: () => {
//             console.log('Hello from arrowFn: ', this);
//         },
//     },
//
//     globalObjThis: function fn () {
//         console.log('Hello from globalObj: ', this)
//     },
// }
//
// globalObj.obj.globalThis();
// globalObj.globalObjThis();

// (function f() {
//     function f() {
//         return 1;
//     }
//
//     return f();
//
//     function f() {
//         return 2;
//     }
// })();

// var x = [];
//
// function createSomeNodes() {
//     var div,
//         i = 100,
//         frag = document.createDocumentFragment();
//     for (;i > 0; i--) {
//         div = document.createElement("div");
//         div.appendChild(document.createTextNode(i + " - "+ new Date().toTimeString()));
//         frag.appendChild(div);
//     }
//     document.getElementById("nodes").appendChild(frag);
// }
// function grow() {
//     x.push(new Array(1000000).join('x'));
//     createSomeNodes();
//     setTimeout(grow,1000);
// }

// var x = [];
//
// function grow() {
//     for (var i = 0; i < 10000; i++) {
//         document.body.appendChild(document.createElement('div'));
//     }
//     x.push(new Array(1000000).join('x'));
// }
//
// document.getElementById('grow').addEventListener('click', grow);

// function readThere () {
//     return there
// }
//
// let there = 'dragons';
//
// console.log(readThere());

// function readThere () {
//     return there
// }
// console.log(readThere())
// // ReferenceError
// let there = 'dragons'

// {
//     let b = 2;
//     {
//         const c = 3;
//         {
//             console.log(c);
//             {
//                 {
//                     var a = 1;
//                 }
//             }
//         }
//     }
// }
//
// console.log(a);
// console.log(b);

// var nested;
//
// {
//     let _nested = 'secret';
//
//     nested = function () {
//         return _nested;
//     }
// }
//
// console.log(nested());

// there = 'there is...';
// // ReferenceError
// let there = 'dragons';

// var foo = 'out';
//
// function bar () {
//     foo = 'in';
//     console.log(foo);
//     var foo;
// }
//
// bar();
//
// console.log(foo);

// console.log('var a1(before): ', window.a1);
//
// var a1 = 1;
//
// {
//     var a11 = 11;
// }
//
// console.log('let b(before): ', window.b);
//
// let b = 2;
//
// console.log('let c(before): ', window.c);
//
// const c = 3;
//
// console.log('var a1(after): ', window.a1);
// console.log('var a11: ', window.a11);
// console.log('let b(after): ', window.b);
// console.log('var c(after): ', window.c);


// console.log(d);
// console.log(window.d);
// console.log(d === window.d);
//
// var d = 1;

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (var i = 0; i < 5; i++) {
//     (function(num) {
//         setTimeout(function() {
//             console.log(num);
//         }, 0);
//     })(i);
// }

// var obj = {
//     a: 1,
// };
//
// console.log(window.obj.a);

// let user = {
//     name: 'John',
// };
//
// let admin = user;
//
// user = null;
//
// console.log(Object.prototype.user);

// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//
//     return {
//         father: man,
//         mother: woman
//     }
// }
//
// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// });
//
// console.log(family);
//
// delete family.father;
// delete family.mother.husband;
//
// console.log(family);
