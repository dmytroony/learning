// let name = 'person name';
// console.log(name, typeof name);

// let symb = Symbol();
// console.log(symb);

// let car = {
//   color: 'red',
//   // maxSpeed: 250,
//   // audio: {
//   //   brand: 'Panasonic',
//   //   speakers: 12,
//   // },
// };
//
// let car2 = {
//   color: 'green',
// }
//
// // let carProp = 'color';
// //
// // // car.color = 'red';
// // // car['color'] = 'red';
// // car[carProp] = 'red';
// //
// // console.log(typeof car.color);
// //
// // console.log(car);
// // console.log(car.color);
// // console.log(car.audio.brand);
//
// // if (car.color === 'red') {
// //   console.log('Car is red');
// // } else if (car.color === 'green') {
// //   console.log('Car is green');
// // } else {
// //   console.log('Color is undefined');
// // }
//
// // car.color === 'green' ? console.log('Green') : console.log('Red');
//
// // console.log(car.color);
// // car.color = 'green';
// // console.log(car.color);
//
// // function colorReset() {
// //   car.color = 'red';
// //   console.log(car.color);
// // }
// // colorReset();
//
// function colorChange(theCar) {
//   theCar.color = 'yellow';
//   console.log(theCar.color);
// }
// colorChange(car);

// let car = {
//   maxSpeed: 240,
//   update: speedChange,
// };
//
// car.update();
//
// function speedChange() {
//   console.log(car.maxSpeed)
// }

// // Functions
//
// // function watch(message = 'hello world') {
// //   console.log(message);
// // }
// //
// // watch();
//
// // function watch(message) {
// //   return message;
// // }
// //
// // console.log(watch('simple word'));
//
// // let anonymousFn = function () {
// //   console.log('Anonymous function')
// // }
// //
// // anonymousFn();
//
// // setTimeout(function () {
// //   console.log('Test');
// // }, 3000);
//
// // let anonymousFn = () => {
// //   console.log('Anonymous function')
// // }
// //
// // anonymousFn()
//
// // let anonymousFn = () => "Anonymous function";
//
// let anonymousFn = (message, count) => `${message}: ${count}`;
//
// console.log(anonymousFn("Anonymous function", 2));

// Methods

// function getMessage() {
//   console.log(`I'm a function`);
// }
// getMessage();

// let car = {
//   color: 'red',
//   open(message) {
//     console.log(message);
//   },
// };
//
// car.open('Open!');

// // Arrays
// let arr1 = [1, 3, 5, 8,];
// console.log(arr1[2]);

// // Loops
//
// let drivers = ['John', 'Bill',];
// for (let i = 0; i <= drivers.length; i++) {
//   let driverName = drivers[i];
//   console.log(driverName)
// }

// Objects, Classes

// let hater = {
//   firstName: 'Bill',
//   lastName: 'Gates',
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };
//
// let hater2 = {
//   firstName: 'Donald',
//   lastName: 'Trump',
//   getName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// };
//
// console.log(hater.getName());
// console.log(hater2.getName());

// class Hater {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//
//   sayName() {
//     console.log(`${this.firstName} ${this.lastName}`)
//   }
// }
//
// let hater1 = new Hater('Bill', 'Gates');
// let hater2 = new Hater('Donald', 'Trump');
//
// hater1.sayName();
// hater2.sayName();
//
// // Old class
// function Bloger(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
//
// Bloger.prototype.sayName = function () {
//   console.log(`${this.firstName} ${this.lastName}`)
// }
//
// var newBloger = new Bloger('Don', 'Baron');
// newBloger.sayName();

// // DOM
//
// let h1 = document.getElementById('header');
// // console.log(typeof document.getElementById('header'));
// h1.innerText = 'Hello!';
//
// document.querySelectorAll('.myClass');

// HomeWork
class Car {
  constructor(parameter) {
    this.parameter = parameter;
  }

  viewSpeed() {
    return `My speed is: ${this.parameter} km per hour`;
  }
}

let audi = new Car(200);

document.querySelector("#car").innerText = audi.viewSpeed();
audi.parameter = 300;
document.querySelector("#car2").innerText = audi.viewSpeed();
