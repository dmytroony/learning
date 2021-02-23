// const timeout = setTimeout(() => {
//     console.log('After timeout');
// }, 2500);
// // clearTimeout(timeout);

// const foo = function () {
//     return 'Hello, world!';
// }
//
// const runIt = function (fn) {
//     return fn();
// }
//
// console.log(runIt(foo));

// // 1
// const makePizza = function (title, callbackFn) {
//   console.log(`Your pizza order "${title}" received. Start cooking...`);
//   setTimeout(callbackFn, 3000);
// }
//
// const readBook = function () {
//   console.log(`Reading a book about "Harry Potter"`);
// }
//
// const eatPizza = function () {
//   console.log(`Yeah! Your pizza is done!`)
// }
//
// // makePizza('Pepperoni', eatPizza);
// // readBook();

// 2

// function first() {
//   setTimeout(function () {
//     console.log(1);
//   }, 2000);
// }
//
// function second() {
//   console.log(2);
// }
//
// first();
// second();

// function doHomework(subject, callback) {
//   console.log(`Starting my "${subject}" homework.`);
//   callback();
// }
//
// // doHomework('math', () => {
// //   setTimeout(() => {
// //     console.log(`Finished my homework.`)
// //   }, 3000);
// // });
//
// function logFinished() {
//   console.log('Finished my work.');
// }
//
// doHomework('math', logFinished);

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//
//   script.onload = () => callback(script);
//
//   document.head.append(script);
// }
//
// loadScript('../js/callbacks.js', () => {
//   console.log(("newFunction();"));
// });

// Function as Object

// let func_multiply = new Function("arg1", "arg2", "return arg1 * arg2;");
// console.log(func_multiply(5, 5));

// function some_function(arg1, arg2, callback) {
//   let my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
//   callback(my_number);
// }
//
// some_function(5, 15, function (num) {
//   console.log('Callback called! ' + num);
// });

// // sync callback
// function greeting(name) {
//   console.log(`Hello, ${name}!`);
// }
// function processUserInput(cb) {
//   let name = prompt('Enter your name please.');
//   cb(name);
// }
//
// processUserInput(greeting);

// // async callback
// async function pageLoader(cb) {
//   const data = await fetch('/url/some/text');
//   cb(data);
// }
//
// function onPageLoadingFinished(pageData) {
//   console.log('Page was successfully loaded!');
//   console.log('Response: ');
//   console.log(pageData);
// }
//
// pageLoader(onPageLoadingFinished);
