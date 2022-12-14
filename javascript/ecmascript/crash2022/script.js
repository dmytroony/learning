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


// function getNames() {
//     let fName = 'John',
//         sName = 'Deer';
//     // return [fName, sName,];
//     return {
//         'firstName': fName,
//         'secondName': sName,
//     };
// }
// let names = getNames();
// console.log(names);
// console.log(getNames.name);


// class Animal {
//     constructor(pows, color) {
//         this.pows = pows;
//         this.color = color;
//     }
//     getAnimalInfo() {
//         return (`This animal has ${this.pows} pows and it color is ${this.color}`);
//     }
// };
// const cat = new Animal(4, 'rude');
// console.log(cat.getAnimalInfo());


// let Animal = class {
//   constructor (pows, color) {
//     this.pows = pows;
//     this.color = color;
//   }
//   getAnimalInfo () {
//     return (`This animal has ${this.pows} pows and it color is ${this.color}`);  }
// };
// const strauss = new Animal(2, "white-black");
// console.log(strauss.getAnimalInfo());


// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   get area() {
//     return this.calcArea();
//   }
//   calcArea() {
//     return this.height * this.width;
//   }
// }
// const square = new Rectangle(4, 5);
// console.log(square.area);


// class Polygon {
//   constructor(...sides) {
//     this.sides = sides;
//   }
//   *getSides() {
//     for (const side of this.sides) {
//       yield side;
//     }
//   }
// }
// const pentagon = new Polygon(1, 2, 3, 4, 5);
// console.log([...pentagon.getSides()]);


// const obj = {
//   name: "ss",
//   getName() {
//     console.log(this.name);
//   }
// };
// // obj.getName();
// var name="ssg";
// const getName = obj.getName;
// getName();


// function* foo(index) {
//   while(index < 3) {
//     yield index;
//     index++;
//   }
// }
// const iterator = foo(0);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);


// function* countAppleSales() {
//   const saleList = [3, 7, 5];
//   for (let i = 0; i < saleList.length; i++) {
//     yield saleList[i];
//   }
// }
// const appleStore = countAppleSales();
// console.log(appleStore.next());
// console.log(appleStore.next());
// console.log(appleStore.next());
// console.log(appleStore.next());


// function* counter(value) {
//     let step = 0;
//     while (true) {
//         step = yield value++;
//         if (step) {
//             value += step;
//         }
//     }
// }
// const generatorFunc = counter(0);
// console.log(generatorFunc.next().value);
// console.log(generatorFunc.next().value);
// console.log(generatorFunc.next().value);
// console.log(generatorFunc.next(10).value);
// console.log(generatorFunc.next().value);


// function* generateSequence() {
//     yield 1;
//     yield 2;
//     // return 3;
//     yield 3;
// }
// // let generator = generateSequence();
// // // let one = generator.next();
// // // console.log(JSON.stringify(one));
// // // let two = generator.next();
// // // console.log(JSON.stringify(two));
// // // let three = generator.next();
// // // console.log(JSON.stringify(three));
// // for(let val of generator) console.log(val);
// let sequence = [0, ...generateSequence()];
// console.log(sequence);


// let range = {
//     from: 1,
//     to: 5,
//     *[Symbol.iterator]() {
//         for(let val = this.from; val <= this.to; val++) {
//             yield val;
//         }
//     },
//     // [Symbol.iterator]() {
//     //     return {
//     //         current: this.from,
//     //         last: this.to,
//     //         next() {
//     //             if (this.current <= this.last) {
//     //                 return { done: false, value: this.current++, };
//     //             } else {
//     //                 return { done: true, };
//     //             } 
//     //         },
//     //     };
//     // },
// };
// console.log([...range]);


// function* generateSequence (start, end) {
//     for (let i = start; i <= end; i++) yield i;
// }
// // console.log(generateSequence(1, 3).next());
// function* generatePasswordCodes() {
//     yield* generateSequence(48, 57);
//     yield* generateSequence(65, 90);
//     yield* generateSequence(97, 122);
// }
// let str = '';
// //
// for(let code of generatePasswordCodes()) {
//     str += String.fromCharCode(code);
// }
// console.log(str);


// function* gen() {
//     let res = yield "2 + 2 = ?";
//     return res;
// }
// let generator = gen();
// console.log(generator.next().value);
// setTimeout(() => console.log(generator.next(4).value), 2000);


// function* gen() {
//     let ask1 = yield "2 + 2 = ?";
//     console.log(ask1);
//     let ask2 = yield "3 * 3 = ?";
//     console.log(ask2);
// }
// let generator = gen();
// console.log(generator.next());
// generator.next(4).value;
// generator.next(9).value;
// console.log(generator.next());
// console.log(generator.next());


// function* gen() {
//     try {
//         let res = yield "2 + 2 = ?";
//         console.log("Thrown error here");
//     } catch(e) {
//         console.log(e);
//     }
// }
// let generator = gen();
// let ask = generator.next().value;
// generator.throw(new Error("No have answer in the DB!"));


// function* generate() {
//     let res = yield "2 + 2 = ?";
// }
// let generator = generate();
// let ask = generator.next().value;
// try {
//     generator.throw(new Error("No have answers in the DB!"));
// } catch(e) {
//     console.log(e);
// }


// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// const generator = gen();
// console.log(generator.next());
// console.log(generator.return('foo'));
// console.log(generator.return('moo'));
// console.log(generator.next());


// let range = {
//     from: 1,
//     to: 5,
//     [Symbol.iterator]() {
//         return {
//             current: this.from,
//             last: this.to,
//             next() {
//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++, };
//                 } else {
//                     return { done: true, };
//                 }
//             },
//         };
//     },
// };
// for (let value of range) console.log(value);


// 0


// for (const char of "test") {
//     console.log(char);
// }


// let str = "Hello";
// let iterator = str[Symbol.iterator]();
// // while (true) {
// //     let result = iterator.next();
// //     if (result.done) break;
// //     console.log(result.value);
// // }
// // console.log(iterator);
// // for (const char of str) {
// for (const char in str) {
//     console.log(char);
// }


// let arrLike = {
//     0: "Hello",
//     1: "World",
//     length: 2,
// };
// let arr = Array.from(arrLike);
// console.log(arr.pop());
// console.log(arr);
// let str = Array.from(arr[0]);
// console.log(str);

let str = "123456";
let arr = Array.from(str, num => num*num);
console.log(arr);
