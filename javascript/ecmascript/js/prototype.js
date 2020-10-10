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

// Classes - es5 syntax
const Animal = function(options) {
  this.name = options.name;
  this.color = options.color;
};

const dog = new Animal({ name: "Rex", color: "#fff" });

console.log(dog);
