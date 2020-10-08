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

function myTouch(event) {
  console.log(event);
  console.log("touched");
  document.querySelector(".out-2").innerHTML = event;
  document.querySelector(".out-1").innerHTML += "touched ";
}

document.querySelector(".block-1").addEventListener("touchstart", myTouch);
