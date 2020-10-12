// const person = new Object({
//     name: 'Max',
//     age: 25,
//     greet: () => console.log('Greet!'),
// });
//
// Object.prototype.sayHello = () => console.log('Hello!');
//
// const helena = Object.create(person);
// helena.name = 'Helena';
//
// // const str = 'I\'m string';
// const str = new String('I am string');

// // Classes - es5 syntax
// const Animal = function(options) {
//   this.name = options.name;
//   this.color = options.color;
//
//   // this.voice = function () {
//   //   console.log('Base voice from ', this.name)
//   // }
// }

// Animal.prototype.voice = function() {
//   console.log('Base voice from ', this.name)
// }
//
// const dog = new Animal({ name: "Rex", color: "#fff" });
//
// // dog.voice()
//
// const Cat = function(options) {
//   Animal.apply(this, arguments)
//   this.hasTail = options.hasTail
//   this.type = 'cat'
// }
//
// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat
//
// const cat = new Cat( {name: 'Murk', color: '#000', hasTail: true} )
//
// console.log(cat);
// console.log(cat.voice())

// const person = {
//   name: 'Alex',
//   age: '25',
//   greet: function () {
//     console.log('Greet!')
//   }
// }
//
// console.log(person)
// console.log(person.greet())
// console.log(person.toString())
// console.log(person.sayHello())

// const person = new Object({
//   name: 'Alex',
//   age: '25',
//   greet: function () {
//     console.log('Greet!')
//   }
// })
// // console.log(person);
//
// Object.prototype.sayHello = function () {
//   console.log('Hello!');
// }
// // person.sayHello()
//
// // const andrew = Object.create(person)
// // andrew.name = 'Andrew'
// // console.log(andrew);
// // console.log(andrew.sayHello());
//
// // const str = 'I am string'
// const str = new String('I am string')
//
// console.log(str, str.sayHello());
