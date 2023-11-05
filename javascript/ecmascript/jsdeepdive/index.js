// import { hello, } from './src/modules/hello.js';

// console.log("Hello from main!");
// console.log(hello);

// let name = "World";
// const arr = [
//     'Hello', false, null, undefined, 2,
// ];

// const trueValues = arr.filter(Boolean);
// console.log(trueValues);

// let message = document.querySelector(".message").innerHTML = `${arr[0]}, ${name}!`;
// console.log(message);

// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);


// const calendarEvent = {
//     title: "Builder Conf",
//     date: new Date(123),
//     attendees: ["Steve",],
// };
// console.log("calendarEvent =", calendarEvent);

// const copied = structuredClone(calendarEvent);
// console.log("structuredClone = ", copied);

// const kitchenSink = {
//     set: new Set([1, 2, 3,]),
//     map: new Map([[1, 2,],]),
//     regex: /foo/,
//     deep: {
//         array: [ new File(someBoolData, 'file.txt',), ],
//     },
//     error: new Error('Hello'),
// };
// kitchenSink.circular = kitchenSink;
// console.log(kitchenSink);

// const clonedSink = structuredClone(kitchenSink);
// console.log(clonedSink);


// const simpleEvent = {
//     title: "Builder Conf",
// };
// const shallowCopy = {...simpleEvent};
// console.log(shallowCopy);

// const shallowCopy1 = Object.assign({}, simpleEvent);
// console.log(shallowCopy1);

// const shallowCopy2 = Object.create(simpleEvent);
// console.log(shallowCopy2);


// const calendarEvent = {
//     title: "Builder Conf",
//     date: new Date(123),
//     attendees: ["Steve"],
// };
// const shallowCopy = {...calendarEvent};
// console.log(shallowCopy);

// shallowCopy.attendees.push("Bob");
// console.log(shallowCopy);

// shallowCopy.date.setTime(456);
// console.log(calendarEvent, shallowCopy);


// const calendarEvent = {
//     title: "Builder Conf",
//     date: new Date(123),
//     attendees: ["Steve"],
// };
// const problematicCopy = JSON.parse(JSON.stringify(calendarEvent));
// console.log(problematicCopy);


// const kitchenSink = {
//     set: new Set([1, 3, 3]),
//     map: new Map([[1, 2]]),
//     regex: /foo/,
//     deep: { array: [ new File(someBlobData, 'file.txt') ] },
//     error: new Error('Hello!')
// };
// const veryProblematicCopy = JSON.parse(JSON.stringify(kitchenSink));
// console.log(veryProblematicCopy);


// console.log(structuredClone({fn: () => {}}));
// console.log(structuredClone({ el: document.body }));
// console.log(structuredClone({get foo() {return 'bar'}}));

// TRANSFERABLE OBJECTS

// const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
// console.log(uInt8Array.byteLength);
// worker.postMessage(uInt8Array, [uInt8Array.buffer]);
// console.log(uInt8Array.byteLength);

// const original = new Uint8Array(1024);
// const clone = structuredClone(original);
// console.log(original.byteLength);
// console.log(clone.byteLength);
// original[0] = 1;
// console.log(original[0]);
// console.log(clone[0]);
// const transferred = structuredClone(original, { transfer: original.buffer });
// console.log(transferred.byteLength);
// console.log(transferred[0]);
// console.log(original.byteLength);


// OBJECT CLONING METHODS

// const obj1 = { name: "John", age: 30, address: { city: "New York", state: "NY", }, };
// const obj2 = { ...obj1 };
// const obj3 = new Object(obj1);
// const obj4 = Object.assign(obj1);
// const obj5 = JSON.parse(JSON.stringify(obj1));
// const obj6 = structuredClone(obj1);

// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);
// console.log(obj6);

// // import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';
// // const obj6 = _.cloneDeep(obj1);
// // console.log(obj6);

// function deepClone(obj) {
//     if (obj === null || typeof obj !== "object") {
//         return obj;
//     }
//     const clone = {};
//     for (const key in obj) {
//         clone[key] = deepClone(obj[key]);
//     }
//     return clone;
// }
// console.log(deepClone(obj1));


// // PROMISES

// function createAudioFileAsync(first, second, third) {

// }

// function successCallback(result) {
//   console.log(`Audio file ready at URL: ${result}`);
// }
// function failureCallback(error) {
//   console.error(`Error generating audio file: ${error}`);
// }

// createAudioFileAsync(audioSettings)
//   .then(successCallback, failureCallback);

// let shoesAvailable =
//   new Promise((resolve, reject) => {
//     let inStock = true;
//     inStock ?
//     resolve("Store has shoes in stock") :
//     reject("Store does not have shoes in stock");
//   });
// let sufficientFunds = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Enough money."), 1000);
//   });
// };
// let transaction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Transaction went wrong"), 1000);
//   });
// };
// Promise.all([
//   shoesAvailable,
//   sufficientFunds(),
//   transaction(),])
//     .then(values => console.log(values));


// shoesAvailable
//   .then(response => {
//     console.log(response);
//     return sufficientFunds();
//   })
//   .then(response => {
//     console.log(response);
//     return transaction();
//   })
//   .then(response => console.log(`Finished! ${response}`))
//   .catch(err => console.log(err));


// const asyncFunction = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("From asyncFn");
//       resolve();
//     }, 1000);
//   });
// };
// asyncFunction()
//   .then(console.log("Wait for asyncFn!"));


// CALLBACKS

// function firstAction(callback) {
//   console.log('Am the 1st action');
//   setTimeout(callback, 2000);
// }
// function secondAction() {
//   console.log("Am the 2d action");
// }
// setTimeout(() => {
//   firstAction(secondAction);
// }, 5000);


// const button = document.querySelector('button');
// function toggle() {
//   console.log('clicked');
//   button.classList.toggle('altColor');
// }
// // toggle();
// button.addEventListener('click', toggle);

// function firstAction() {
//   console.log('act: 1');
// }
// function secondAction() {
//   console.log("act: 2");
// }
// setTimeout(firstAction, 2000);
// secondAction();


// function fnOne() {
//   console.log('fn1');
// }
// function fnTwo() {
//   console.log('fn2');
// }
// function fnThree(first, second) {
//   setTimeout(first, 2000);
//   second();
// }
// fnThree(fnOne, fnTwo);


// ASYNC JS

// AJAX
// function showCountries() {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', "https://restcountries.com/v3.1/all", true);
//   xhr.onload = function() {
//     if(xhr.status == 200) {
//       console.log("OK 200")
//       let countries = JSON.parse(this.response);
//       countries.forEach(country => {
//         const countryCard = document.createElement('div');
//         countryCard.innerHTML = `${country.flag} ${country.name.official}`;
//         document.getElementById('feed').appendChild(countryCard);
//       });
//     }
//   }
//   xhr.send();
// }

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   let count = 0;
//   for (let i = 0; i < 1000000000; i++) count++;
//   console.log(count);
//   const text = document.createElement('h2');
//   text.innerHTML = "This has nothing to do with the count.";
//   document.body.appendChild(text);
// });

// async vs sync
// let response = fetch('https://http.cat/[200]');
// let image = response.data();

// const button = document.querySelector('button');
// const logMe = () => console.log('clicked arrow fn');
// // function logMe() {
// //   console.log('clicked named fn');
// // }
// button.addEventListener('click', logMe);

// function showImage(url, type, callback) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', url);
//   xhr.responseType = type;
//   xhr.onload = function() {
//     callback(xhr.response);
//   }
//   xhr.send();
// }
// function createImage(blob) {
//   const objectUrl = URL.createObjectURL(blob);
//   const imageElement = document.createElement('img');
//   imageElement.src = objectUrl;
//   imageElement.style.width = '300px';
//   document.body.appendChild(imageElement);
// }
// showImage('https://http.cat/200', 'blob', createImage);

// const fruits = ['Orange', 'Pineapple', 'Kiwi',];
// fruits.forEach((fruit, index) => {
//   console.log(`${index}: ${fruit}`);
// });

// fetch('https://restcountries.eu/rest/v2/all')
//   .then(response => {
//     return response.json();
//   }).then(json => {
//     let countries = json;
//     console.log(countries);
//   }).catch(err => console.log(`errors: ${err.message}`));

// let response = fetch('https://restcountries.eu/rest/v2/all');
// console.log(response);


// Async Await
// async function print() {
//   return `I have been printed`;
// }
// console.log(print());

// const printFn = async () => `I\'ve been printed`;
// printFn().then(response => console.log(response));

// fetch('https://restcountries.eu/rest/v2/all')
//   .then(response => {
//     return response.json();
//   }).then(json => {
//     console.log(json);
//   }).catch(err => {
//     console.log(`errors: ${err.message}`);
//   });


//async function getData() {
//  const response = await fetch('https://restcountries.com/v3.1/all');
//  const data = await response.json();
//  return data;
//}
//getData()
//  .then(response => console.log(response))
//  .catch(err => console.log(err.message));

//let prom1 = new Promise((resolve, reject) => {
//  let sum = 1 + 2 + 2;
//  if (sum == 3) resolve("all is good");
//  else reject("sth went wrong!");
//});
//prom1
//  .then(resolved => console.log(resolved))
//  .catch(rejected => console.log(rejected));


// const userLeft = false;
// const userWatchingCatMeme = true;
// // function watchTutorialPromise(callback, errorCallback) {
// //   if(userLeft) errorCallback({ name: 'User Left', message: ':(', });
// //   else if (userWatchingCatMeme) errorCallback({ name: 'UW Cat Meme', message: ':)(:', });
// //   else callback('Thumbs up and Subscribe');
// // }
// // watchTutorialCallback(message => console.log(`Success: ${message}`), error => console.log(`${error.name} ${error.message}`));

// function watchTutorialPromise() {
//   return new Promise((resolve, reject) => {
//     if(userLeft) reject({ name: 'User Left', message: ':(', });
//     else if (userWatchingCatMeme) {
//       reject({ name: 'UW Cat Meme', message: ':)(:', });
//     }
//     else resolve('Thumbs up and Subscribe');
//   });
// }
// watchTutorialPromise()
//   .then(resolve => console.log(resolve))
//   .catch(err => console.log(err))
//   .catch(err => console.log(err));

// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve(`Video1 recorded`);
// });
// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve(`Video2 recorded`);
// });
// const recordVideoThree = new Promise((resolve, reject) => {
//   reject(`Video3 not recorded`);
// });
// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree,
// ]).then(message => console.log(message))
//   .catch(err => console.log(err));
// Promise.race([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree,
// ]).then(message => console.log(message))
//   .catch(err => console.log(err));


// const url = `https://jsonplaceholder.typicode.com/todos/1`;
// fetch(url)
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// const loadData = async () => {
//   try {
//     const url1 = `https://jsonplaceholder.typicode.com/todos/1`;
//     const url2 = `https://jsonplaceholder.typicode.com/todos/2`;
//     const url3 = `https://jsonplaceholder.typicode.com/todos/3`;
//     // console.log(res1.status, res1.ok);
//     // const res1 = await fetch(url1);
//     // const data1 = await res1.json();
//     // const res2 = await fetch(url2);
//     // const data2 = await res2.json();
//     // const res3 = await fetch(url3);
//     // const data3 = await res3.json();
//     // return [data1, data2, data3];
//     const results = await Promise.all([ fetch(url1), fetch(url2), fetch(url3), ]);
//     const data = await Promise.all(results.map(result => result.json()));
//     return data;
//   } catch(err) {
//     console.error(err);
//   }
// }
// // regular invoking
// // const data = loadData();
// // data
// //   .then(data => console.log(`${data.id}\) ${data.title}`))
// //   .catch(err => console.log(err));
// // IIFE
// // (
// //   async () => {
// //     const data = await loadData();
// //     console.log(`${data.id}\) ${data.title}`);
// //   }
// // )();
// // (
// //   async () => {
// //     const data = await loadData();
// //     console.log(data);
// //   }
// // )();
// // Promise ALL
// // loadData().then(resolve => console.log(resolve)).catch(err => console.log(err));
// (
//   async () => {
//     const data = await loadData();
//     console.log(data);
//   }
// )();


// function getData() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(46);
//     }, 5000);
//   })
// }
// async function start() {
//   const result = await getData();
//   console.log(result);
// }
// start();


// function getData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => reject("sth went wrong"));
//   }, 2000);
// }
// async function start() {
//   try {
//     const result = await getData();
//   }
//   catch(err) {
//     console.log(`ERROR ${err}`);
//   }
// }
// async function start2() {
//   const result =
//     await getData().catch(err => console.log(err));
// }
// start();
// start2();


// ERRORS
// try {
//   let age = promt("Enter your age: ", 18);
//   console.log(age);
// } catch(error) {
//   console.log("sth went wrong");
// }

// const makeError = () => {
//   try {
//     // throw new customError("sth went wrong!");
//     throw new Error("sth went wrong!");
//   } catch(err) {
//     // console.error(err); // or .log, or .worn, e.g.
//     console.error(err.name);
//     console.error(err.message);
//     console.error(err.stack);
//   } finally {
//     console.log("finally");
//   }
// };
// makeError();
// // function customError(message) {
// //   this.message = message;
// //   this.name = "customError";
// //   this.stack = `${this.name}: ${this.message}`;
// // }

// const throwError = () => {
//   let i = 1;
//   while(i <= 5) {
//     try {
//       if(i % 2 !== 0) throw new Error(`ODD number: ${i}`);
//       console.log(`EVEN number: ${i}`);
//     } catch(err) {
//       console.log(err.stack);
//     } finally {
//       console.log("finally block");
//       i++;
//     }
//   }
// };
// throwError();
// //
// try {
//   let age = prompt("Enter your age here: ");
//   if(age == "") throw "You did not enter in anything!";
//   if(isNaN(age)) throw age + " is not a number!";
//   if(age < 18) throw "You need to be 18+ to sign up!";
//   console.log("You are now signed up");
// } catch(err) {
//   console.log(err);
// } finally {
//   console.log("Thanks for visiting!");
// }


// setTimeout(function greet() {
// 	console.log("Welcome to the World of JavaScript!");
// }, 2000);

// Polymorphism
// function sum(a, b, c = 0) {
//   if (typeof a === 'number' &&
//       typeof b === 'number' &&
//       typeof c === 'number') {
//     return a + b + c;
//   } else if (typeof a === 'number' &&
//       typeof b === 'number') {
//     return a + b;
//   }
// }
// console.log(sum(2, 3, 5));


// function test() {
//   console.log(a);
//   console.log(foo());
//
//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// test();

// const showButton = document.getElementById('showDialog');
// const favDialog = document.getElementById('favDialog');
// const outputBox = document.querySelector('output');
// const selectEl = favDialog.querySelector('select');
// const confirmBtn = favDialog.querySelector('#confirmBtn');
//
// // "Show the dialog" button opens the <dialog> modally
// showButton.addEventListener('click', () => {
//     favDialog.showModal();
// });
//
// // "Favorite animal" input sets the value of the submit button
// selectEl.addEventListener('change', (e) => {
//     confirmBtn.value = selectEl.value;
// });
//
// // "Cancel" button closes the dialog without submitting because of [formmethod="dialog"], triggering a close event.
// favDialog.addEventListener('close', (e) => {
//     outputBox.value = favDialog.returnValue === 'default' ? "No return value." : `ReturnValue: ${favDialog.returnValue}.`; // Have to check for "default" rather than empty string
// });
//
// // Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
// confirmBtn.addEventListener('click', (event) => {
//     event.preventDefault(); // We don't want to submit this fake form
//     favDialog.close(selectEl.value); // Have to send the select box value here.
// });

// const array1 = [5, 12, 8, 130, 44];
// console.log(array1, array1.at(3));

// // FABRIC FUNCTION
// function say(name) {
//     return {
//        name,
//         talk() {
//             return(`Hello I am ${name}`);
//         }
//     }
// }
// const ben = say("Ben");
// console.log(ben);
// console.log(ben.talk());

// CONSTRUCTOR FUNCTION
//  function(x) {
//     this.x = x;
// }
// const whatIsX = new Construct(2);
// console.log(whatIsX);


// class Person {
//     talk() {
//         return 'sit dolor amet';
//     }
// }
// const me = new Person(),
//     you = new Person();
// console.log(me.talk());
// console.log(you.talk());
// const they = {};
// Object.setPrototypeOf(they, you);
// console.log(they.talk());


// function talk(surname, country, ...additionalInfo) {
//     return `Heya ama ${this.name} ${surname} from ${country}`;
// }
// const person = {
//     name: "Bruno",
// };
// //const brunoTalk = talk.bind(person)();
// //const brunoTalk = talk.call(person, "Gilbert", "USA");
// const brunoTalk = talk.apply(person, ["Gilbert", "USA", "apples", "Brooklyn",]);
// console.log(brunoTalk);

// const button =
//     document.getElementById("pressMe");
// button.addEventListener('click', () => {
//     Promise.resolve().then(() => {
//         console.log("Microtask_1");
//     });
//     console.log("Listener_1")
// });
// button.addEventListener('click', () => {
//     Promise.resolve().then(() => {
//         console.log("Microtask_2");
//     });
//     console.log("Listener_2")
// });
// button.click();


// function foo() {
//     throw new Error('Sth went wrong');
// }
// function bar() {
//     foo();
// }
// function baz() {
//     bar();
// }
// baz();

// console.log('start');
// setTimeout(function cb() {
//     console.log('callback from sT_0');
// }, 0);
// setTimeout(function cb() {
//     console.log('callback from sT_1');
// }, 1000);
// setTimeout(function cb() {
//     console.log('callback from sT_2');
// }, 1000);
// setTimeout(function cb() {
//     console.log('callback from sT_3');
// }, 1000);
// setTimeout(function cb() {
//     console.log('callback from sT_4');
// }, 1000);
// console.log('finish');


// const arr1 = [1, 2, 3, 4,];
// arr1.forEach(function(i) {
//     console.log(i);
// });
// function asyncForEach(list, cb) {
//     // list.forEach(function() {
//     //     setTimeout(cb, 0);
//     // });
//
//     list.forEach(function(item) {
//         setTimeout(function() {
//             cb(item);
//         }, 0);
//     });
// }
// asyncForEach(arr1, function(i){
//     console.log(i);
// });

// QUEUE PRIORITIES
// console.log("1st log, callStack");
// queueMicrotask(function () {
//     console.log('queueMicrotask_1');
// });
// requestAnimationFrame(function () {
//     console.log("requestAnimationFrame_1");
// });
// console.log("2d log, callStack");
// setTimeout(function() {
//     console.log("sT_delay0, tasksQueue");
// }, 0);
// console.log("3d log, callStack");
// Promise.resolve()
// .then(() => console.log("promise.resolve.then1()"))
// .then(() => console.log("promise.resolve.then2()"));
// requestAnimationFrame(function () {
//     console.log("requestAnimationFrame_2");
// });
// console.log("4th log, callStack");
// setTimeout(function() {
//     console.log("sT_withoutDelay, tasksQueue");
// });
// queueMicrotask(function() {
//     console.log("queueMicrotask_2");
// });
// console.log("5th log, callStack");


// // CHECK CURRENT FPS
// let frameCount = 0,
//     startTime = performance.now();
// function render() {
//     frameCount++;
//     // Calculate time elapsed since the start
//     const elapsed = performance.now() - startTime;
//     // Update the frame rate every second
//     if (elapsed >= 1000) {
//         const fps = frameCount / (elapsed / 1000);
//         console.log(`Current frame rate: ${fps.toFixed(2)} FPS`);
//         // Reset the counters
//         frameCount = 0;
//         startTime = performance.now();
//         // Schedule the next frame
//         requestAnimationFrame(render);
//     }
// }
// // Start rendering
// requestAnimationFrame(render);

// // The Event Loop
// while(true) {
//     queue = getNextQueue();
//     task = queue.pop();
//     execute(task);
//     while (microtaskQueue.hasTasks()) doMicrotask();
//     if (isRepaintTime()) {
//         animationTasks = animationQueue.copyTasks();
//         for (task in animationTasks) doRepaint();
//         repaint();
//     }
// }


// console.log('begin');
// process.nextTick(() => console.log("nextTick callback"));
// console.log('end')


// let output = document.getElementById("output"),
//   box = document.getElementById("box"),
//   number = 0,
//   xPos = 0;
// function paint() {
//   number++;
//   output.textContent = number;
//   if (number < 300) requestAnimationFrame(paint);
// }
// function move(timmy) {
//   if (timmy) {
//     let diff = timmy - number;
//     console.log(`frame ${diff}`);
//     number = timmy; // high resolution time stamp
//   }
//   xPos = xPos + 5;
//   box.style.transform = `translateX(${xPos}px)`;
//   let windowWidth = document.body.clientWidth - 100;
//   if (xPos < windowWidth) {
//     requestAnimationFrame(move);
//   }
// }
// window.requestAnimationFrame(paint);
// window.requestAnimationFrame(move);

// const { Worker } = require('worker_threads');
// function fibo(n) {
//   return n < 1 ? 0 : n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2);
// }
// const doFibo = (iterations) => new Promise(resolve => {
//   const start = Date.now();
//   const result = fibo(iterations);
//   console.log(`doFib done in: ${Date.now() - start}ms`);
//   resolve(result);
// });
// const main = async () => {
//   const start = Date.now();
//   const values = await Promise.all([
//     doFibo(40), doFibo(40),
//     doFibo(40), doFibo(40),
//     doFibo(40), doFibo(40),
//     doFibo(40), doFibo(40),
//     doFibo(40), doFibo(40),
//   ]);
//   console.log(`values: ${values}`);
//   console.log(`fibo done in ${Date.now() - start}ms`);
// }
// main().catch(console.error);


// function Person(n) {
//   n === "John" ? console.log("condition_notAssigned: ", this) : console.log("sth else");
//   this.name = n;
//   this.talkF = function() {console.log("expressionFn:", this);}
//   this.talkFf = () => console.log("arrowFn: ", this);
//   setTimeout(() => {
//     console.log("sT_1s, arrowFn: ", this)
//   }, 1000);
//   setTimeout(function() {
//     console.log("sT_2s, expressionFn: ", this)
//   }.bind(this), 2000);
//   n === "John" ? console.log("condition_assigned: ", this) : console.log("sth else");
// }
// const john = new Person("John");
// john.talkF();
// john.talkFf();


// console.log(global);
// console.log(globalThis);

// function fn() {
//   console.log(this.name);
// }
// const obj1 = {
//   name: "object_1",
//   method1() {
//     console.log(this);
//   }
// }
// // fn.call(obj1);
// setTimeout(obj1.method1.call(obj1));
// setTimeout(function() {
//   obj1.method1();
// });


// function increment(num) {
//   let a = num;
//   function text() {
//     return "The result is:";
//   }
//   return function plus() {
//     return `${text()} ${a += 2}`;
//   }
// }
// let result = increment(3);
// console.log(result());
// console.log(result());
// console.log(result());


// function recursion1(num) {
//   return recursion1(num) - recursion1(num - 1);
// }
// console.log(recursion(5));


// // const request = new Request();
// // const url = "http://worldtimeapi.org/api/timezone/america/new_york";
// const url = "http://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE8";
// // async function getData() {
// //   const request = new Request(url, {
// //     headers: {
// //       'Authorization': 'Bearer BQC0EQf3I6X7ViE0B98BKK-IdPcZHIgY7_MnMDUr68I0MA8JbaWlysz5yjlDVT3BERSVGm037leQAppMTeEb4qjX-9wm-nXPJ3CN5dkPCYK5hk_Tj_vCF_uL5VIIj_SOUoIwu1Y5VGoGYK8GyQFRmgcrMeiYYxBkCSukHKImjxQKYg2508Zm0yPaFRVaUnmSxquYKUmMeySORfSUr1pCdLM_NMfsz5HQjUIXK84AC4gtqllLe4JSi9snVMhdLO56qhWfqGx0XPURiv8THDks'
// //     }
// //   });
// //   // const response = await fetch(request);
// //   const response = await fetch(url);
// //   console.log(response.statusText, response.status);
// //   const data = await response.json();
// // }
// // getData();
// const request = new Request(url, {
//   headers: {
//     'Authorization': 'Bearer 123'
//   }
// })
// fetch(request)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(`Error: ${error}`));


// const nums = [2, 7, 11, 15,];
// const target = 9;
// // return two indices within this nums array
// // that sum up to this target
// function solution(arr, aim) {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     let compliment = aim - arr[i];
//     if (map.has(compliment)) return [i, map.get(compliment)];
//     else map.set(nums[i], i);
//   }
// }
// console.log(solution(nums, target));


// const isValidBST = function(root) {
//   function dfs(root, min, max) {
//     if(!root) return true;
//     if(root.val <= min || root.val >= max) return false;
//     return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
//   }
//   return dfs(root, -Infinity, Infinity);
// }
// const root1 = {
//   val: 2,
//   left: {val: 1, left: null, right: null,},
//   right: {val: 3, left: null, right: null,},
// };
// console.log(isValidBST(root1));


// const target = {
//   a: 1, b: 2, c: 3,
//   sum: function() { return this.a + this.b + this.c },
// };
// console.log(target.sum());
// target.a = 'not a number';
// delete target.b;
// target.c = undefined;
// target.d = 'new property';
// target.sum = () => console.log('hello');
// target.sum();

// // Array.with(index, "new value");
// const letters = ["b", "c", "a",];
// const letters2 = letters.with(2, "d");
// console.log(letters);
// console.log(letters2);
// letters.toSort();


// const arr = [["John", "Doe",], ["Bob", "Deploy",], ["Amelia", "Dig"],];
// const copyArr = [...arr];
// console.log(arr);
// const splicedArr = arr.toSpliced(0, 2, ["Antony", "Bern"]);
// // const sortedArr = arr.sort();
// // const sortedArr = arr.toSorted();
// console.log(splicedArr);
// console.log(arr);
// // console.log(copyArr);
// const people = {
//   john: {fName: "John", sName: "Doe",},
//   bob: {fName: "Bob", sName: "Rogers",},
//   amelia: {fName: "Amelia", sName: "Johnson"},
// };
// const copyPeople = {...people};
// // console.log(copyPeople);
// // for (const el of arr) console.log(el);
// // for (const person in people) console.log(person);

// // localStorage.setItem('fName', 'Bob');
// // localStorage.setItem('sName', 'Johnson');
// document.cookie = 'fName=John; expires=' + new Date(9999, 0, 1)
//   .toUTCString();
// document.cookie = 'sName=Doe; expires=' + new Date(9999, 0, 1)
//   .toUTCString();
// // document.cookie = 'sName=Doe; expires=' + new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
// console.log(document.cookie);


// setTimeout(() => console.log(1));
// Promise.resolve().then(() => console.log(2));
// Promise.resolve().then(() => setTimeout(() => console.log(3)));
// new Promise(() => console.log(4));
// setTimeout(() => console.log(5));


// let a = NaN, b = 2;
// console.log(a ?? b);

// // Check is sth iterable or not
// const log = console.log;
// let myArr = [];
// let myObj = {};
// let myNull = null;
// let myNum = 16;
// let myStr = 'hello';
// function isIterable(obj) {
//   obj = obj ?? new Error('Value is null or undefined');
//   if(obj instanceof Error) throw obj;
//   if(obj[Symbol.iterator] && typeof obj[Symbol.iterator] === 'function') {
//     return true;
//   } else return false;
// }
// log(isIterable(myStr));


// // MEMOIZATION
// // our array for caching results
// const prevValues = [];
// // 
// function square(n) {
//   // if a value is in memory return this value
//   if (prevValues[n] != null) return prevValues[n];
//   // else compute it
//   let result = 0;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) result += 1;
//   }
//   // and write down to the memory
//   prevValues[n] = result;
//   return result;
// }
// square(4);
// square(5);
// console.log(prevValues);
// prevValues[0] = undefined;
// // console.log(typeof prevValues[0]);
// // IS A CELL OF AN ARRAY EMPTY ?
// function isEmpty(arr, n) {
//   // Check if a cell at index [n] is empty
//   if (!arr.hasOwnProperty(n)) console.log(`Cell ${n} is empty`);
//   else if (arr[n] === undefined) console.log(`Cell ${n} has a defined value of undefined`);
//   else console.log(`Cell has a value`);
//   // Check if any cell is empty
//   if(arr.some(cell => !cell)) console.log(`At least one cell is empty`);
//   else console.log(`All cells have values`);
// }
// // check if an array cell at index is empty or has a value
// isEmpty(prevValues, 0);

// let memo = [1, 1];
// const fib = (n, memo) => {
//   memo = memo || [];
//   if (memo[n]) return memo[n];
//   if (n <= 1) return 1;
//   return memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// };
// console.log(fib(5, memo));
// console.log(memo);


// function fib(n, prevValues = []) {
//   if (prevValues[n] != null) return prevValues[n];
//   let result;
//   if (n <= 2) result = 1;
//   else result = fib(n - 1, prevValues) + fib(n - 2, prevValues);
//   prevValues[n] = result;
//   return result;
// }
// console.log(fib(20));


// const memo = [];
// function getCupcakeSales(day) {
//   if (memo[day]) {
//     return memo[day];
//   }
//   let totalSales = 0;
//   for (let i = 0; i <= day; i++) {
//     totalSales += cupcakeSales[i];
//   }
//   memo[day] = totalSales;
//   return totalSales;
// }
// const cupcakeSales = [2, 4, 3, 5]; // Assuming cupcake sales for each day
// console.log(getCupcakeSales(3)); // Returns 14
// console.log(memo); // Prints the contents of our memo notebook


// console.log("begin");
// logger();
// console.log(1);
// function logger() {
//   console.log(2);
//   finish();
//   console.log(3);
//   function finish() {
//     console.log("end");
//   }
// }
// console.log(4);


// function first() { console.log(1); }
// function second() {
//   setTimeout(() => console.log(2), 0);
// }
// function third() { console.log(3); }
// first();
// second();
// third();


// function message() {
//   console.log("hello");
// }
// // higher order function
// function logger(msg) {
//   msg();
// }
// logger(message);


// function first() { console.log(1); }
// function third(cb) {
//   setTimeout(() => {
//     console.log(3);
//     cb();
//   }, 0);
// }
// function second() { console.log(2); }
// first();
// third(second);


// function cbHell() {
//   setTimeout( () => {
//     const data = { user: "John", id: 324, };
//     console.log(data);
//     setTimeout(() => console.log("Data has been updated"), 1000);
//     console.log("done");
//   }, 500);
// }
// cbHell();


// const promise = new Promise((resolve, reject) => {
//   resolve({ user: "John", id: 324, });
//   // reject("sth went wrong...");
// });
// promise
//   .then(data => {
//     data = fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return data;
//   })
//   .then(todo => console.log(todo))
//   .catch(err => console.log(err));


// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("DATA from a server");
//   }, 2000);
// })
// promise.then(res => console.log(res));


// fetch("https://jsonplaceholder.typicode.com/todos/12")
//   .then(data => data.json())
//   .then(jsonData => console.log(jsonData))
//   .catch((err => err.message))
//   .finally(() => console.log("everything is done"));


// async function getTodo() {
//   try {
//     // const response = await fetch("https://js1onplaceholder.typicode.com/todos/12");
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/12");
//     const data = await response.json();
//     console.log(1);
//     console.log(data);
//     console.log(2);
//   } catch(err) {
//     console.log("sth went wrong:", err);
//   }
// }
// getTodo();


// const log = console.log;

// let myObj = {
//   fred: 'flinstone',
//   barney: 'rubble',
// };
// log(Object.hasOwn(myObj, 'fred'));
// log(myObj.hasOwnProperty('barney'));
// let oc = Object.create(null);
// log(oc.__proto__); //undefined
// let obj = {};
// log(obj.__proto__);
// let anObj = {
//   hasOwnProperty() {
//     //prevents looking up the prototype chain
//     return false;
//   },
//   steve: 'hola',
// };
// log(anObj.hasOwnProperty('steve'));
// log(Object.hasOwn(anObj, 'steve'));


// const result = fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     data.forEach(usr => {
//       const markup = `<li>User: ${usr.username.toLowerCase()}; Name: ${usr.name}</li>`;
//       document
//         .querySelector("ul")
//         .insertAdjacentHTML('beforeend', markup);
//     });
//   })
//   .catch(err => console.log("sth went wrong...", err));


// let person = { id: 321, name: "John", }
//   ,list = [ person, ];
// person = null;
// console.log(list);
// console.log(person);
// console.log(list);


// let friends = new WeakSet(),
//   alex = { name: "Alex", },
//   bob = { name: "Bob", };
// friends.add(alex);
// friends.add(bob);
// console.log(`has alex: ${friends.has(alex)}; has bob: ${friends.has(bob)}`);
// alex = null;
// console.log(`has alex: ${friends.has(alex)}; has bob: ${friends.has(bob)}`);

//arrowFn has no the built-in arguments object
// const fn = fName => {
//   console.log(fName.callee.name);
//   return fName
// };
// console.log(fn("Brian"));
// 
// function getName(d) {
//   const error = new Error();
//   const firefoxMatch 
//     = (error.stack.split('\n')[0 + d]
//       .match(/^.*(?=@)/) || [])[0];
//   const chromeMatch 
//     = ((((error.stack.split('at ') || [])[1 + d] || '')
//       .match(/(^|\.| <| )(.*[^(<])( \()/) || [])[2] || '')
//       .split('.').pop();
//   const safariMatch 
//     = error.stack.split('\n')[0 + d];
//   // firefoxMatch ? console.log('firefoxMatch', firefoxMatch) : void 0;
//   // chromeMatch ? console.log('chromeMatch', chromeMatch) : void 0;
//   // safariMatch ? console.log('safariMatch', safariMatch) : void 0;
//   return firefoxMatch || chromeMatch || safariMatch;
// }
// function limbo(){
//   for(let i = 0; i < 4; i++){
//     console.log(getName(i));
//   }
// }
// function lust(){ limbo(); }
// function gluttony(){ lust(); }
// gluttony();


// let theGang = new WeakMap(),
//   fred = { id: 123, gender: "male", },
//   daphne = { id: 124, gender: "female", },
//   velma = { id: 125, gender: "female", };
// theGang.set(fred, 'blue');
// theGang.set(daphne, 'purple');
// theGang.set(velma, 'orange');
// console.log(`fred: ${theGang.has(fred)}; daphne: ${theGang.has(daphne)}; velma: ${theGang.has(velma)}`);
// let scooby = fred;
// daphne = null;
// fred = null;
// console.log(`scooby: ${theGang.has(scooby)}; fred: ${theGang.has(fred)}; daphne: ${theGang.has(daphne)}; velma: ${theGang.has(velma)}`);


// const aMap = new Map();
// console.log(aMap.entries());
// const aSet = new Set();
// console.log(aSet.entries());

// const arr = [1, 2, 1, 4, 3, 2,];
// const uniqArr = new Set(arr);
// console.log(uniqArr.entries());


// let obj = {
//   prop1: 123,
//   prop2: "abc",
// };
// obj.prop2 = "def";
// // console.log(obj);
// let map = new Map();
// map.set('prop1', 123);
// map.set('prop2', 'def');
// // map.forEach(el => console.log(el));
// let names = ['Rob', 'Bran', 'Arya', 'Sansa', 'Rickard',];
// names.push(names[0]);
// let set = new Set(names);
// // console.log(names);
// // set.forEach(el => console.log(el));
// for (const el of map) console.log(el);

// custom iterator for objects
// let obj1 = {
//   prop1: 123,
//   prop2: 234,
//   prop3: 345,
// };
// obj1[Symbol.iterator] = function() {
//   let counter = -1;
//   return {
//     next: function() {
//       counter++;
//       switch (counter) {
//         case 0: return { value: obj1.prop3, done: false, };
//           break;
//         case 1: return { value: obj1.prop2, done: false, };
//           break;
//         case 2: return { value: obj1.prop1, done: false, };
//           break;
//         default: return { value: undefined, done: true, };
//           break;
//       }
//     },
//   };
// }
// let iter = obj1[Symbol.iterator]();
// for (const prop of obj1) console.log(prop);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// const str1 = eval(new String("one + 1"));
// const str2 = new String("two + 2");
// console.log(str1);
// console.log(str2);

// const str = "Hello, Mars!";
// const john = "John";
// const abc = "abc";
// console.log(str.substring(3, 9));
// console.log(str);
// console.log(str.substr(3, 8));
// console.log(str);
// console.log(str.slice(3, 7));
// console.log(str);
// console.log(str.split(" ", 5));
// console.log(str);
// console.log(str.indexOf("M"));
// console.log(str);
// console.log(str.lastIndexOf("l"));
// console.log(str);
// const greeting = "".concat(str, " ", "I am ", john, "!");
// console.log(greeting, greeting.length);
// console.log(str.charAt(5));
// console.log(str.startsWith("HelLo"));
// console.log(str.endsWith("s!"));
// console.log(str.repeat(3));
// console.log("abc: ", abc.repeat(0));
// const spacedStr = "  " + str + "  ";
// console.log(spacedStr, spacedStr.length);
// console.log(spacedStr.trimStart());
// console.log(spacedStr.trimEnd());
// const trimmedStr = spacedStr.trim();
// console.log(trimmedStr, trimmedStr.length);
// console.log(str.padStart(20));
// console.log(str.padStart(20, "123bc"));
// console.log(str.padEnd(20, "123bc"));
// console.log("a".localeCompare("a"));
// console.log("a".localeCompare("b"));
// console.log("b".localeCompare("a"));

const text = "The rain in SPAIN stays mainly in the plain";
// console.log(str.search("ain"));
// console.log(str.search(/ain/));
// console.log(str.match("ain"));
// console.log(str.match(/ain/));
// let res = text.matchAll('ain');
// console.log(res);
let resG = text.matchAll(/ain/g);
console.log(resG);
