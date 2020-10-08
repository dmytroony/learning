// function hello() {
//     console.log('Hello frome hello', this);
// }
// console.log(hello());

// const person = {
//     name: 'Dmytro',
//     age: 30,
//     sayHello: hello,
//     // sayHelloWindow: hello.bind(window),
//     sayHelloWindow: hello.bind(this),
//     logInfo: function(job, phone) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd();
//     },
// };

// const iryna = {
//     name: 'Iryna',
//     age: 25,
// };

// const fnIrynaInfoLog = person.logInfo.bind(iryna);
// fnIrynaInfoLog('frontend', '380991232323');
// equal
// const fnIrynaInfoLog = person.logInfo.bind(iryna, 'frontend', '380991232323');
// fnIrynaInfoLog();

// person.logInfo.call(iryna, 'frontend', '380991232323');

// person.logInfo.apply(iryna, ['frontend', '380991232323']);

//

// const array = [1, 2, 3, 4, 5];
//
// // function multBy(arr, n) {
// //     return arr.map(function (i) {
// //         return i * n;
// //     });
// // }
//
// Array.prototype.multBy = function(n) {
//     return this.map(function (i) {
//         return i * n;
//     });
// };
// console.log(array.multBy(2));
//
// // console.log(multBy(array, 5));

// console.log(this)

// document.querySelector('#h3').onclick = function (){
//   console.log(this)
//   this.style.background = 'yellow'
// }

function setBackground() {
  console.log(this);
  this.style.background = "lightgreen";
}

// let p = document.querySelectorAll('p')
//
// p.forEach(function (elem) {
//   elem.onclick = setBackground
// })

// document.querySelector('p').addEventListener('click', setBackground)
let p = document.querySelectorAll("p");

p.forEach(function(elem) {
  elem.addEventListener("click", setBackground);
});
