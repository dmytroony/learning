const person = new Object({
    name: 'Max',
    age: 25,
    greet: () => console.log('Greet!'),
});

Object.prototype.sayHello = () => console.log('Hello!');

const helena = Object.create(person);
helena.name = 'Helena';

// const str = 'I\'m string';
const str = new String('I am string');