// const person = {
//   firstName: "Name",
//   lastName: "SecondName",
//   age: 111,
// };
// console.log(person.lastName);

// console.log(typeof parseInt(3.14).toString());

// console.log(Boolean('01'));

// const var1 = 10;
// const var2 = '10';

// // console.log(var1 == var2, var1 === var2);

// if (var1) console.log('pos');

// switch (var1) {
//   case 2:
//     console.log('continue');
//     break;
//   case 10:
//     console.log('congrats!');
//     break;
//   default:
//     console.log('not a valid');
//     break;
// }

// const arr = [1, 3, 5, 7, 9,];

// for (const num of arr) {
//   console.log(num);
// }

// let a = 10;

// function outer() {
//   let b = 20;
//   function inner() {
//     let c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// console.log(fn);
// fn();
// fn();

// console.log(sum(2, 3, 5));

// function sum(a, b, c) {
//   return a + b + c;
// }

// function curry(fn) {
//   return function (a) {
//     console.log(a);
//     return function (b) {
//       return function (c) {
//         return fn(a, b, c);
//       }
//     }
//   }
// }

// const curriedSum = curry(sum);

// curriedSum(2)(3)(5);

// PL error, null != object
// console.log(typeof null) // object

// let id = Symbol("id");
// console.log(id.toString() + " hello");

// [] + []; // ""

// console.log(Array(16));

// const color = 'orange';

// switch (color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'green':
//     console.log('Color is green');
//     break;
//   case 'blue':
//     console.log('Color is blue');
//     break;
//   default:
//     console.log('Unknowing color...');
// }

// for (let i = 1; i <= 5; i++)
//   console.log('Iteration number: ' + i);

// function sayHi(name) {
//   const age = 10;
// }
// const age = 12;
// const things = ['cool', 'double!!!'];

// const a = 10;
// function outer() {
//   const b = 20;
//   function inner() {
//     const c = 30;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();


// function outer() {
//   let counter = 0;
//   function inner() {
//     counter = counter + 1;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();


// function sum(a, b) {
//   return a + b;
// }
//
// function curry(fn) {
//   return function(a) {
//     return function(b) {
//       return fn(a, b);
//     }
//   }
// }
//
// const curriedSum = curry(sum);
// console.log(curriedSum(1)(2));


// function multi (a, b, c) {
//   return a * b * c;
// }
//
// function curry (fn) {
//   return function (a) {
//     return function (b, c) {
//         return fn(a, b, c);
//     }
//   }
// }
//
// let curriedFn = curry(multi);
// console.log(curriedFn(2)(3, 4));


// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       }
//     }
//   };
// }
//
// function sum(a, b, c) {
//   return a + b + c;
// }
//
// let curriedSum = curry(sum);
//
// console.log(curriedSum(1, 2)(3));


// function volume(l) {
//     return (w, h) => {
//         return l * w * h
//     }
// }
//
// const hV = volume(70);
// console.log(hV(203, 142));
// console.log(hV(220, 122));
// console.log(hV(120, 123));
//
// console.log(volume(70)(90, 30));


// function discount(price, discount) {
//     return price * discount;
// }

// function discount(discount) {
//     return (price) => {
//         return price * discount;
//     }
// }
//
// const tenPercentDiscount = discount(0.1);
// const twentyPercentDiscount = discount(0.2);
//
// console.log(tenPercentDiscount(500));
// console.log(twentyPercentDiscount(500));



// function sayMyName(name) {
//     console.log(`My name is ${name}!`);
// }
//
// sayMyName('Boris');


// const person = {
//     name: 'Brian',
//     // sayMyName: function () {
//     //     console.log(`My name is ${this.name}`);
//     // },
// };
//
// // person.sayMyName();
//
// function sayMyName() {
//     console.log(`My name is ${this.name}`);
// }
//
// person.name = 'Adam';
// sayMyName.call(person);

// globalThis.name = 'thisName1';
//
// console.log(this.name);
//
// function sayMyName() {
//     console.log(this.name);
// }
//
// sayMyName();
//
// function Person (name) {
//     // this = {}
//     this.name = name;
// }
//
// const p1 = new Person('Mike');
// const p2 = new Person('Ethan');
//
// console.log(`${p1.name} and ${p2.name}`);


// let pokemon1 = {
//     firstName: 'Pika',
//     lastName: 'Chu',
//     getPokeName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
//
// let pokemon2 = {
//     firstName: 'Chari',
//     lastName: 'Zard',
//     getPokeName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// };
//
// let pokemonName = function(snack, hobby) {
//     console.log(`${this.getPokeName()}, I choose you! ${this.getPokeName()}, loves ${snack} and ${hobby}.`);
// };
//
// // creates new object and binds pokemon. 'this' of pokemon === pokemon now
// let logPokemon = pokemonName.bind(pokemon1);
// logPokemon('sushi', 'algorithms');
//
// logPokemon = pokemonName.bind(pokemon2);
// logPokemon('burgers', 'chemistry');
//
// pokemonName.call(pokemon1, 'borsh', 'math');
// pokemonName.apply(pokemon2, ['chips', 'derby',]);

// let person = {
//     first: 'John',
//     last: 'Smith',
//     full: function() {
//         console.log(this.first + ' ' + this.last);
//     },
//     personTwo: {
//         first: 'Allison',
//         last: 'Jones',
//         full: function() {
//             console.log(this.first + ' ' + this.last);
//         }
//     }
// };
//
// person.full();
// person.personTwo.full();


// function Car (make, model) {
//     this.make = make;
//     this.model = model;
// }
//
// let myCar = new Car('Ford', 'Escape');
//
// console.log(myCar);


// function add(c, d) {
//     console.log(this.a + this.b + c + d);
// }
//
// let digits1 = {
//     a: 1,
//     b: 2,
// };
//
// let digits2 = [3, 4];
// let digits3 = {
//     c: 3,
//     d: 4,
// };
//
// add.call(digits1, 3, 4);


// let obj1 = {
//     a: 123,
//     getThis1: function () {
//         return this;
//     },
//     getThis2: () => {
//         return this;
//     },
// };
//
// console.log(obj1.getThis1());
// console.log(obj1.getThis2());
// console.log(this);


// function greet (gender, age, name) {
//     let salutation = gender === "male" ? "Mr. " : "Ms. ";
//
//     if (age > 25) return `Hello, ${salutation}${name}.`;
//     else return `Hey, ${name}.`;
// }
//
// let greetAnAdultMale = greet.bind (null, "male", 45);
// let greetAYoungster = greet.bind (null, "", 16);
//
// console.log(greetAnAdultMale("John Horton"));
// console.log(greetAYoungster("Alex"));
// console.log(greetAYoungster("Emma Waterloo"));


// let avgScore = "global avgScore";
// function avg (arrayOfScores) {
//     let sumOfScores =
//         arrayOfScores.reduce (function (prev, cur, index, array) {
//         return prev + cur;
//     });
//     this.avgScore = sumOfScores / arrayOfScores.length;
// }
//
// let gameController = {
//     scores: [20, 34, 55, 46, 77],
//     avgScore:null
// }
//
// avg (gameController.scores);
//
// console.log (window.avgScore);
// console.log (gameController.avgScore);
//
// avgScore = "global avgScore";
// avg.call (gameController, gameController.scores);
//
// console.log (window.avgScore);
// console.log (gameController.avgScore);


// const array1 = [1, 2, 3, 4],
//     initialValue = 0,
//     sumWithInitial =
//         array1.reduce((accumulator, currentValue) =>
//                 accumulator + currentValue, initialValue
// );
//
// console.log(sumWithInitial);


// let anArrayLikeObj =
//     {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length:4 };
//
// let newArray = Array.prototype.slice.call(anArrayLikeObj, 0);
//
// console.log (newArray);
//
// console.log (Array.prototype.indexOf.call(anArrayLikeObj, "Martin") === -1 ? false : true);
// // console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true);
// console.log (Array.prototype.reverse.call (anArrayLikeObj));
// console.log (Array.prototype.pop.call (anArrayLikeObj));
// console.log (anArrayLikeObj);
// console.log (Array.prototype.push.call (anArrayLikeObj, "Jackie"));
// console.log (anArrayLikeObj);


// function func(...args) {
//     console.log(arguments);
// }
// func('A', 'B', 'C');


// let newArr = Array.prototype.slice.call();


// class User1 {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(this.name);
//     }
// }
//
// const john = new User1('John');
//
// john.sayHi();

// function User2(name) {
//     this.name = name;
// }
// let usr = User2.prototype.sayHi = function () {
//     console.log(this.name);
// }
//
// const John = new User2('John');
// John.sayHi();
//
// function newNew(constructor, ...args) {
//     const instance = {};
//     instance.constructor = constructor;
//     // instance.__proto__ = constructor.prototype;
//     Object.setPrototypeOf(instance, constructor.prototype);
//     const result = constructor.apply(instance, args);
//     return result && ['object', 'function',].includes(typeof result) ? result : instance;
// }
//
// const Gatsby = newNew(User2,'Gatsby');
// Gatsby.sayHi();


// function Person(fName, sName) {
//     this.fName = fName;
//     this.sName = sName;
// }
//
// let person1 = new Person('John', 'Deer');
// let person2 = new Person('Jack', 'Beer');
//
// Person.prototype.getFullName = function () {
//     return `${this.fName} ${this.sName}`;
// }
// console.log(person1.getFullName());
// console.log(person2.getFullName());


// function Person(fName, sName) {
//     this.fName = fName;
//     this.sName = sName;
// }
//
// Person.prototype.getFullName = function () {
//     return `${this.fName} ${this.sName}`;
// };
//
// function SuperHero(fName, sName) {
//     Person.call(this, fName, sName);
//     this.isSuperHero = true;
// }
// SuperHero.prototype.fightCrime = function () {
//     console.log('Fighting crime!');
// };
// SuperHero.prototype = Object.create(Person.prototype);
//
// const batman = new SuperHero('Bruce', 'Wayne');
// SuperHero.prototype.constructor = SuperHero;
// console.log(batman.getFullName());


// class Person {
//     constructor(fName, sName) {
//         this.fName = fName;
//         this.sName = sName;
//     }
//     sayMyName() {
//         return `${this.fName} ${this.sName}`;
//     }
// }
//
// const myName = new Person('Gloria', 'Windstorm');
// console.log(myName.sayMyName());
//
// class SuperHero extends Person {
//     constructor(fName, sName) {
//         super(fName, sName);
//         this.isSuperHero = true;
//     }
//     fightCrime() {
//         console.log('Fighting crime');
//     }
// }
//
// const batman = new SuperHero('Bruce', 'Wayne');
// console.log(batman.sayMyName());


// class Polygon {
//     constructor(h, w) {
//         this.area = h * w;
//     }
//     whichArea() {
//         return this.area;
//     }
// }
//
// const poly1 = new Polygon(3, 4);
// console.log(poly1.whichArea());
//
//
// class FilledPolygon extends Polygon {
//     constructor(h, w, color) {
//         super(h, w);
//         this.color = color;
//     }
//     polyColor() {
//         return this.color;
//     }
// }
//
// const greenPolygon = new FilledPolygon(4, 5, 'green');
//
// console.log(
//     greenPolygon.whichArea(), greenPolygon.polyColor()
// );


// let Rectangle = class {
//     constructor(a, b) {
//         this.a = a;
//         this.b = b;
//     }
//     mult() {
//         return  this.a * this.b;
//     }
// };
//
// console.log(new Rectangle(4, 5).mult());


// class ClassWithStaticInitializationBlock {
//     static staticProperty1 = 'Property 1';
//     static staticProperty2;
//     static {
//         this.staticProperty2 = 'Property 2';
//     }
// }
//
// console.log(ClassWithStaticInitializationBlock.staticProperty1);
// console.log(ClassWithStaticInitializationBlock.staticProperty2);


// let y = 'Outer y';
//
// class A {
//     static field = 'Inner y';
//     static {
//         let y = this.field;
//     }
// }
//
// console.log(y);


// class MyClass {
//     static field1 = console.log('field1 called');
//     static {
//         console.log('Class static block #1 called');
//     }
//     static field2 = console.log('field2 called');
//     static {
//         console.log('Class static block #2 called');
//     }
// }


// class A {
//     static field = 'A static field';
//     static {
//         console.log(this.field);
//     }
// }


// class A {
//     static fieldA = 'A.fieldA';
// }
// class B extends A {
//     static {
//         console.log(super.fieldA);
//     }
// }


// let getDPrivateField;
//
// class D {
//     #privateField;
//     constructor(v) {
//         this.#privateField = v;
//     }
//     static {
//         getDPrivateField = d => d.#privateField;
//     }
// }
// console.log(getDPrivateField(new D('private')));


// class Circle {
//     #radius;
//     constructor(value) {
//         this.#radius = value;
//     }
//     get area() {
//         return Math.PI * Math.pow(this.#radius, 2);
//     }
//     set radius(value) {
//         if (typeof value === 'number' && value > 0) {
//             this.#radius = value;
//         } else {
//             throw 'The radius must be a positive number';
//         }
//     }
//     get radius() {
//         return this.#radius;
//     }
// }
//
// console.log('Circle:', new Circle(3).area);
//
// class Cylinder extends Circle {
//     #height;
//     constructor(radius, height) {
//         super(radius);
//         this.#height = height;
//     }
// }
//
// console.log('Cylinder:', new Cylinder(4).area);


// class Circle {
//     #radius;
//     constructor(value) {
//         this.#radius = value;
//     }
//     get area() {
//         return Math.PI * Math.pow(this.#radius, 2);
//     }
// }
// let circle = new Circle(10);
// console.log(circle.area);


function getNames() {
    let fName = 'John',
        sName = 'Deer';
    // return [fName, sName,];
    return {
        'firstName': fName,
        'secondName': sName,
    };
}

let names = getNames();
