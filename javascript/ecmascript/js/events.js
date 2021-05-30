// document.querySelector('#h3').onclick = () => console.log('h3 clicked')

// document
//     .querySelector('#h3')
//     .addEventListener('onclick', (e) => console.log('h3 clicked'))

// console.log(this)

// function hiFn() {
//   console.log(this)
//   console.log('Hello!')
// }
//
// let byeFn = function() {
//   console.log(this)
//   console.log('Bye!')
// }
//
// let alohaArrow = () => {
//   console.log(this)
//   console.log('Aloha!')
// }
//
// document.querySelector('#h3').addEventListener('click', hiFn)
// document.querySelector('#h3').addEventListener('click', byeFn)
// document.querySelector('#h3').addEventListener('click', alohaArrow)

// document.querySelector('h3').onclick = function (event) {
//   console.log(event)
//   console.log('clicked h3')
// }
//
// document.querySelector('p').onclick = function (event) {
//   console.log(event)
//   console.log('clicked p')
// }
//
// document.querySelector('p').oncontextmenu = function (event) {
//   console.log(event)
//   console.log('context me')
//   return false
// }

// let widTh = 50
//
// document.querySelector('.three').onmousemove = function (event) {
//   document.querySelector('.three').style.width = widTh + 'px'
//   widTh++
// }

// document.querySelector('.three').onmouseenter = function () {
//   document.querySelector('.three').style.background = 'lightgreen'
// }
//
// document.querySelector('.three').onmouseleave = function () {
//   document.querySelector('.three').style.background = 'initial'
// }
//
// document.querySelector('.three').onmousedown = function () {
//   document.querySelector('.three').style.background = 'cyan'
// }
//
// document.querySelector('.three').onmouseup = function () {
//   document.querySelector('.three').style.background = 'blue'
// }

// let progress = document.querySelector('progress');
// let currentProgress = 10;
//
// document.querySelector('#minus').onclick = function() {
//   currentProgress--
//   document.querySelector('progress').value = currentProgress;
// }
//
// document.querySelector('#plus').onclick = function() {
//   currentProgress++
//   document.querySelector('progress').value = currentProgress;
// }

// document.querySelector('.i-1').oninput = (e) => console.log(e);

// document.querySelector('.i-1').onkeypress = (e) => {
//   console.log(e)
//   console.log(e.key)
//   console.log(e.keyCode)
//   console.log(e.code)
// }

// document.querySelector('.i-1').onkeydown = (e) => {
//   console.log(e)
//   console.log(e.key)
//   console.log(e.keyCode)
//   console.log(e.code)
// }

// function myTouch(event) {
//   console.log(event);
//   console.log("touched");
//   document.querySelector(".out-2").innerHTML = event;
//   document.querySelector(".out-1").innerHTML += "touched ";
// }
//
// document.querySelector(".block-1").addEventListener("touchstart", myTouch);

// function sayHi() {
//   console.log('Hello');
// }
// setTimeout(sayHi, 2000);

// function sayHi(phrase, who) {
//   console.log(`${phrase}, ${who}!`);
// }
// setTimeout(sayHi, 2000, 'Hello', 'John');

// setTimeout('console.log("Hello!")', 2000);

// setTimeout(() => console.log('Hello!'), 2000);

// let timerId = setTimeout(() => console.log('nothing'), 2000);
// console.log(timerId);
//
// clearTimeout(timerId);
// console.log(timerId);

// let timerId = setInterval(() => console.log('a sec...'), 1000);
// setTimeout(() => {
//   clearInterval(timerId);
//   console.log('stop!');
// }, 5000);

// let timerId = setTimeout(function tick() {
//   console.log('2sec');
//   timerId = setTimeout(tick, 2000);
// }, 2000);
//
// clearTimeout(timerId);

// let delay = 5000;
//
// let timerId = setTimeout(function request() {
//   // send a request
//
//   if ('error') {
//     delay *= 2;
//   }
//
//   timerId = setTimeout(request, delay);
// }, delay);

// let i = 1;
// setInterval(function() {
//   func(i);
// }, 100);
//
// let j = 1;
// setTimeout(function run() {
//   func(i);
//   setTimeout(run, 100);
// }, 100);

// setTimeout(() => console.log('World'));
// console.log('Hello1');
// console.log('Hello2');
// console.log('Hello3');

// let start = Date.now();
// let times = [];
//
// setTimeout(function run() {
//   times.push(Date.now() - start);
//
//   if (start + 100 < Date.now()) console.log(times);
//   else setTimeout(run);
// });

