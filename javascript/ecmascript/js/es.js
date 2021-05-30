// let point = {
//     x: 10,
//     y: 20,
// };
//
// // console.log(point.__proto__);
// // console.log(point.__proto__());
//
// let point3D = {
//     z: 30,
//     __proto__: point,
// };
//
// // point3D = Object.create(point);
//
// console.log(
//     point3D.x,
//     point3D.y,
//     point3D.z,
// );

// let empty = {};
//
// console.log( empty.toString(), empty.x );

// let dict = Object.create(null);
//
// console.log(dict.toString);

// let protoA = {
//     x: 10,
// };
//
// let protoB = {
//     x: 20,
// };
//
// let objectC = Object.create(protoA);
// console.log(objectC.x);
//
// Object.setPrototypeOf(objectC, protoB);
// console.log(objectC.x);
//
// let a = new Object(protoA);
// console.log(a);
//
// let b = new Object(a);
// console.log(b);

// let a = {alpine: 123,};
//
// // let newA = Reflect.getPrototypeOf(a);
// let newA = Reflect.ownKeys(a);
// let newB = Object.keys(a);
//
// console.log(Reflect);
// console.log(newA);

// let a = 1, b = 'str', c = {key1: 123,};
//
// console.log(a.valueOf());
// console.log(b.valueOf());
// console.log(c.valueOf());

// let a = {lit: 1, ab: {ba: 2,},};
// // Object.freeze(a);
// // Object.seal(a);
//
// let b = new Object(a);
//
// let c = new Object({});
//
// let d = Object.create(a);
//
// let e = {};
// let clonE = Object.assign(e, a);
//
// console.log('literal = {}:\n', a.valueOf());
// console.log('new Object(a):\n', b.valueOf());
// console.log('new Object({}):\n', c.valueOf());
// console.log('.create(a):\n', d.valueOf());
// console.log('.assign(a):\n', e.valueOf());
//
//
// console.log(a == b);
// console.log(a == c);
// console.log(a == d);
// console.log(a == e);
//
// console.log(b == c);
// console.log(b == d);
// console.log(b == e);
//
// console.log(c == d);
// console.log(c == e);

// let obj = {};
// let arr = [];
// let num = 2;
// let fn = function () {};
//
// console.log(obj.constructor);
// console.log(arr.constructor);
// console.log(num.constructor);
// console.log(fn.constructor);
//
// console.log(Object.isSealed(a));
// console.log(Object.isExtensible(a));

// let a = 1;
//
// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(Number));
// console.log(Number.constructor);
// console.log(Object.getPrototypeOf(Function));
// console.log(Object.getPrototypeOf(Object));

// let obj1 = {
//     a: 1,
//     b: 2,
// };
//
// let obj2 = {
//     c: 3,
//     d: 4,
// };
//
// Object.setPrototypeOf(obj1, obj2);
//
// console.log(obj1.d);
// console.log(Object.getPrototypeOf(obj1));

// let a = 1;
//
// console.log(a.__proto__);
// console.log(Number.__proto__);
// console.log(Function.__proto__);
// console.log(Object.__proto__);

// var o = {
//     a: 2,
//     meth: function(){
//         return this.a + 1;
//     }
// };
//
// console.log(o.meth());
//
// var p = Object.create(o);
//
// p.a = 12;
//
// console.log(p.meth());

// console.log(Object.length);
// console.log(Object.keys(Object));

// console.log(Object.getOwnPropertyNames(Object));

// let obj = {a: 1, b: 2,};
//
// let result = [];
// for (const prop in obj) {
//     result.push(prop);
// }
//
// console.log(result);
// console.log(Object.getOwnPropertyNames(obj));
// console.log(Object.keys(obj));

// console.log('.prototype.__proto__ :', Object.prototype.__proto__);
// console.log('.getPrototypeOf() :', Object.getPrototypeOf(Object));

// function Obj (prop1, prop2, prop3) {
//     this.prop1 = prop1;
//     this.prop2 = prop2;
//     this.prop3 = prop3;
//
//     this.meth = () => {
//         console.log('Hello from fn-Obj');
//     };
// }
//
// let newObj = new Obj(1,2,3);
//
//
// newObj.meth();

// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }
//
// let rand = new Person('Rand McDonald', 33, 'male');
// let ken = new Person('Ken Jones', 39, 'male');
// let rebecca = new Person('Rebecca Smith', 31, 'female');
//
// // console.log(rand);
// // console.log(ken);
// // console.log(rebecca);
//
// function Car(mark, model, year, owner) {
//     this.mark = mark;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }
//
// let car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
// let car2 = new Car('Nissan', '300ZX', 1992, ken);
// let car3 = new Car('Porsche', 'Turbo GT', 1992, rebecca);

// console.log(car1);
//
// car1.color = 'black';
//
// console.log(car1);

// let Animal = {
//     type: 'Invertebrates',
//     displayType: function () {
//         console.log(this.type);
//     },
// };
//
// let animal1 = Object.create(Animal);
//
// animal1.displayType();
//
// let fish = Object.create(Animal);
//
// fish.type = 'Fishes';
// fish.displayType();

// Car.prototype.color = null;
// car1.color = 'black';
// console.log(car1.color);

// function validate(obj, lowVal, hiVal) {
//     if ((obj.value < lowVal) || (obj.value > hiVal))
//         console.log(("Invalid Value!"));
//     else console.log(('Hello!'));
// }

// const obj = {
//     logg1: ['a', 'b', 'c'],
//     logg2: [],
//     get latest() {
//         if (this.logg1.length === 0) {
//             return undefined;
//         }
//
//         return this.logg1[this.logg1.length - 1];
//     },
// };
//
// console.log(obj.latest);

// const obj = {
//     log: ['example', 'test',],
//     get latest() {
//         if (this.log.length === 0) {
//             return undefined;
//         }
//
//         return this.log[this.log.length - 1];
//     },
// };
//
// console.log(obj.latest);

// const obj = {
//     a: 0,
// };
//
// Object.defineProperty(obj, 'b', {
//     get: function () {
//         return this.a + 1;
//     },
// },);
//
// console.log(obj.b);

// let expr = 'foo';
//
// let obj = {
//     get [expr] () {
//         return 'bar';
//     },
// };
//
// console.log(obj.foo);

// let obj = {
//     a: 1,
//     get notifier()
//     {
//         delete this.notifier;
//         return this.notifier = document.getElementById('bookmarked-notification-anchor');
//     }
// ,
// };

// class Example {
//     get hello() {
//         return 'world';
//     };
// }
//
// const obj = new Example();
//
// console.log(obj.hello);
//
// console.log(Object.getOwnPropertyDescriptor(obj, 'hello'));
//
// console.log(Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), 'hello'));

// let obj = {
//     set current (str) {
//         this.log[this.log.length] = str;
//     },
//     log: [],
// };

// let obj = {
//     a: 0,
// };
//
// Object.defineProperty(obj, 'prop', {
//     set: function (x) {
//         this.a = x / 2;
//         console.log('trying to change...')
//     }
// });
//
// obj.prop = 10;
// console.log(obj.a);

// let expr = 'foo';
//
// let obj = {
//     baz: 'bar',
//     set [expr](value) {
//         this.baz = value;
//     },
// };
//
// console.log(obj.baz);
//
// obj.foo = 'baz';
//
// console.log(obj.baz);

// let delay1 = 5000;
// function debounce(callback, delay2 = delay1) {
//     console.log(delay2);
// }
//
// debounce(() => console.log('hello'));
// debounce(() => console.log('hello'), 2000);

// let obj = {
//     a: 7,
//     get b() {
//         return this.a + 1;
//     },
//     set c(x) {
//         this.a = x / 2;
//     }
// };
//
// console.log(obj.a);
// console.log(obj.b);
// obj.c = 50;
// console.log(obj.a);
// console.log(obj.b);

// let obj = {
//     a: 0,
// };
//
// Object.defineProperties(obj, {
//     'b': {
//         get: function () {
//             return this.a + 1;
//         },
//     },
//     'c': {
//         set: function (x) {
//             this.a = x / 2;
//         },
//     },
// });
//
// obj.c = 10;
// console.log(Object.getOwnPropertyNames(obj));
//
// console.log(obj.b);

// let dP = Date.prototype;
//
// Object.defineProperty(dP, 'year', {
//     get: function () {
//         return this.getFullYear();
//     },
//     set: function (y) {
//         this.setFullYear(y);
//     },
// });
//
// let now = new Date();
//
// console.log(now.year);
// console.log(now);
//
// now.year = 2001;
//
// console.log(now.year);
// console.log(now);

// let obj = new Object;
//
// obj.a = 5;
// obj.b = 12;
//
// console.log(obj);
//
// delete obj.a;
//
// console.log(obj);

// let obj1 = {
//     a: {
//         aa: 1,
//     },
// };
//
// let obj2 = new Object(obj1);
//
// let obj3 = obj2;
//
// console.log(obj1 === obj2);
// console.log(obj1);
// console.log(obj2);
//
// obj2.b = 2;
// //
// // console.log(obj1 === obj2);
// // console.log(obj1);
// // console.log(obj2);
//
// console.log(obj1.a.aa);
// console.log(obj2.a.aa);
//
// obj3.b = 2;
//
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);

// ======================

// Constructor function

// function Employee() {
//     this.name = '';
//     this.dept = 'general';
// }
//
// // dept: Employee
// function Manager() {
//     Employee.call(this);
//     this.reports = [];
// }
//
// // console.log(Manager);
//
// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;
//
// // dept: Employee
// function WorkerBee() {
//     Employee.call(this);
//     this.projects = [];
// }
//
// WorkerBee.prototype = Object.create(Employee.prototype);
// WorkerBee.prototype.constructor = WorkerBee;
//
// // dept: Employee -> WorkerBee
// function SalesPerson() {
//     WorkerBee.call(this);
//     this.dept = 'sales';
//     this.quota = 100;
// }
//
// SalesPerson.prototype = Object.create(WorkerBee.prototype);
// SalesPerson.prototype.constructor = SalesPerson;
//
// // dept: Employee -> WorkerBee
// function Engineer() {
//     WorkerBee.call(this);
//     this.dept = 'engineering';
//     this.machine = '';
// }
//
// Engineer.prototype = Object.create(WorkerBee.prototype);
// Engineer.prototype.constructor = Engineer;
//
// // console.log(1 + '1' - '2');
//
// var mark = new WorkerBee;
//
// mark.name = '';
// mark.dept = 'general';
// mark.projects = [];
//
// console.log(mark.dept);
//
// mark.name = 'Doe, Mark';
// mark.dept = 'admin';
// mark.projects = ['navigator',];
//
// mark.bonus = 3000;
//
// Employee.prototype.specialty = 'none';

// function Employee(name, dept) {
//     this.name = name || '';
//     this.dept = dept || 'general';
// }

// function WorkerBee(projects) {
//     this.projects = projects || [];
// }
// WorkerBee.prototype = new Employee;

// function Engineer(mach) {
//     this.dept = 'engineering';
//     this.machine = mach || '';
// }
// Engineer.prototype = new WorkerBee;
//
// var jane = new Engineer('belau');
// console.log(jane);

// function Engineer (name, projects, mach) {
//     this.base = WorkerBee;
//     this.base(name, 'engineering', projects);
//     this.machine = mach || '';
// }

// function Engineer(name, projects, mach) {
//     WorkerBee.call(this, name, 'engineering', projects);
//     this.machine = mach || '';
// }
// // Engineer.prototype = new WorkerBee;
// var jane = new Engineer('Doe, Jane', ['navigator', 'javascript',], 'belau');

// Employee.prototype.specialty = 'none';

// console.log(jane.projects);

// const fruits = ["apple", "orange", "plum",];
//
// function isFruitInFruits (fruit) {
//  
//     let result = `${fruit} not found`;
//
//     for (let i = 0; i < fruits.length; i++) {
//         const element = fruits[i];
//
//         if (element === fruit) {
//             result = `${fruit} was found`;
//         }
//     }
//
//     return result;
// }
//
// console.log(isFruitInFruits('apple'));
// console.log(isFruitInFruits('orange'));
// console.log(isFruitInFruits('plum'));
// console.log(isFruitInFruits('banana'));
// //
// const fruits = ["apple", "orange", "plum",];
// const isFruitInFruits  = fruit => `${ fruit } ${ fruits.includes( fruit ) ? "was" : "not" } found`;
// console.log(isFruitInFruits('apple'));


// function Employee() {
//     this.name = '';
//     this.dept = 'general';
// }
//
// function WorkerBee() {
//     this.projects = [];
// }
// WorkerBee.prototype = new Employee;
//
// let amy = new WorkerBee;
//
// console.log('name' in amy);
// console.log(amy.name);
//
// Employee.prototype.name = 'Unknown';
// console.log(amy.name);
//
// WorkerBee.prototype.name = 'Unknown';
// console.log(amy.name);

// function Employee() {
//     this.dept = 'general';
// }
// Employee.prototype.name = '';
//
// function WorkerBee() {
//     this.projects = [];
// }
// WorkerBee.prototype = new Employee;
//
// let amy = new WorkerBee;
// console.log(amy.name);
//
// Employee.prototype.name = 'Unknown';
// console.log(amy.name);

// let obj1 = {a: 1,};
//
// let obj2 = Object.create(obj1);
//
// console.log(obj2.valueOf(__proto__));

// // replica instanceof
// function instanceOf(object, constructor) {
//     object = object.__proto__;
// 
//     while(object != null) {
//         if (object == constructor.prototype) {
//             return true;
//         }
//         if (typeof object == 'xml') {
//             return constructor.prototype == XMLDocument.prototype;
//         }
// 
//         object = object.__proto__;
//     }
//     return false;
// }

// let idCounter = 1;
// function Employee(name, dept) {
//     this.name = name || '';
//     this.dept = dept || 'general';
//     this.id = idCounter++;
// }
// 
// let victoria = new Employee('Viva, Victoria', 'pubs',);
// let harry = new Employee('John, Diego', 'sales');
// console.log(victoria.id);
// console.log(harry.id);

// function Manager (name, dept, reports) {
//     // code
// }
// Manager.prototype = new Employee;
//
// function WorkerBee (name, dept, projs) {
//     // code
// }
// WorkerBee.prototype = new Employee;
//
// function Engineer(name, projs, mach) {
//     // code
// }
// Engineer.prototype = new WorkerBee;
//
// function SalesPerson(name, projs, quota) {
//     // code
// }
// SalesPerson.prototype = new WorkerBee;
//
// let mac = new Engineer('Wood, Mac');

// let idCounter = 1;
// function Employee(name, dept) {
//     this.name = name || '';
//     this.dept = dept || 'general';
// 
//     if (name) {
//         this.id = idCounter++;
//     }
// }

// function Hobbyist(hobby) {
//     this.hobby = hobby || 'scuba';
// }
// 
// function Engineer(name, projs, mach, hobby) {
//     this.base1 = WorkerBee;
//     this.base1(name, 'engingeering', projs);
//     this.base2 = Hobbyist;
//     this.machine = mach || '';
// }
// Engineer.prototype = new WorkerBee;
// 
// let dennis = new Engineer('Doe, Dennis', ['collabra'], 'hugo');
// 
// Hobbyist.prototype.equipment = ['mask', 'fins', 'regulator', 'bcd',];

// console.log(undefined == null);

// let obj = {
//     a: 1,
// };
// 
// console.log();
// 
// let a = ['yo', 'whadup', '?',];
// 
// function fn() {
//     return 2;
// }
// 
// console.log(Array.prototype.hasOwnProperty('forEach'));
// console.log(Function.prototype.hasOwnProperty('call'));

// function Graph() {
//     this.vertexes = [];
//     this.edges = [];
// }
// 
// Graph.prototype = {
//     addVertex: function (v) {
//         this.vertexes.push(v);
//     }
// }
// 
// let g = new Graph();
// 
// console.log( g.addVertex(1) );
// 
// console.log(g.edges);
// console.log(g.vertexes);

// let a = {a: 1,};
// 
// let b = Object.create(a);
// 
// let c = Object.create(b);
// 
// let d = Object.create(null);
// 
// console.log(d.hasOwnProperty);

// class Polygon {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }
// 
// class Square extends Polygon {
//     constructor(sideLength) {
//         super(sideLength, sideLength);
//     }
//     get area() {
//         return this.height * this.width;
//     }
//     set sideLength(newLength) {
//         this.height = newLength;
//         this.width = newLength;
//     }
// }
// 
// let square = new Square(2);
// 
// console.log(square.area);

// function A(a) {
//     this.varA = a;
// }
// 
// A.prototype = {
//     varA: null,
//     doSomething: function() {
//         console.log(varA);
//     }
// }
// 
// // a1.[[Prototype]] = A.prototype;
// 
// 
// function B(a, b) {
//     A.call(this, a);
//     this.varB = b;
// }
// B.prototype = Object.create(A.prototype, {
//     varB: {
//         value: null,
//         enumerable: true,
//         configurable: true,
//         writable: true,
//     },
//     doSomething: {
//         // A.prototype.doSomething.apply(this, arguments);
//         // ...
//     },
//     enumerable: true,
//     configurable: true,
//     writable: true,
// },
// );
// B.prototype.constructor = B;
// 
// let b = new B();
// B.doSomething();

// function Foo() {
//     console.log('hello');
// }
// 
// // let obj = new Foo();
// 
// let obj = new Object();
// obj.prototype = Foo.prototype;
// Foo.call(obj);
// 
// console.log(obj);
// 
// console.log(Object.getPrototypeOf(obj));

// let animal = {
//     eats: true,
// };
// 
// let rabbit = Object.create(animal);
// console.log(rabbit.eats);
// console.log(Object.getPrototypeOf(rabbit) === animal);
// Object.setPrototypeOf(rabbit, {});
// 
// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true,
//     },
// });
// console.log(rabbit.jumps);

// // deep clone
// let clone = Object.create(
//     Object.getPrototypeOf(obj), 
//     Object.getOwnPropertyDescriptor(obj)
// );

// let obj = {};
// let key = prompt('What is the key?', '__proto__');
// console.log(key);
// obj[key] = '__proto__';
// obj[key] = 'some value';
// alert(obj[key]);
// console.log(obj[key]);

// Simplest object
// let obj = Object.create(null);
// let key = prompt('What is the key?', '__proto__');
// obj[key] = 'some value';
// alert(obj[key]);
// console.log(obj[key]);

// let obj = Object.create(null);

// // alert(obj);
// console.log(obj);

// let obj1 = {
//         a: 1, 
//     },
//     obj2 = {
//         b: 2,
//         c: 3,
//         __proto__: obj1,
//     };
// console.log(obj2.a);
// let obj2val = Object.values(obj2);
// console.log(obj2val);
// console.log(Object.entries(obj2));
// console.log(Reflect.ownKeys(obj2));

// let dictionary = Object.create(null, {
//     toString: {
//         value() {
//             return Object.keys(this).join();
//         },
//     },
// });
// 
// dictionary.apple = 'Apple';
// dictionary.__proto__ = 'test';
// 
// for (let key in dictionary) {
//     console.log(key);
// }
// 
// console.log(dictionary.toString());

// let obj1 = {a:1};
// let obj2 = new Object(obj1);
// 
// console.log(obj2.a);
// obj2.a = 2;
// console.log(obj2.a);
// obj1.a = 3;
// console.log(obj2.a);
// console.log(obj1 === obj2);

// function Tree(name) {
//     this.name = name;
// }
// let theTree = new Tree('Red tree');
// console.log('theTree.constructor: ', theTree.constructor);

// function Type() {}
// let types = [
//     new Array(), [],
//     new Boolean(), true,
//     new Date(),
//     new Error(),
//     new Function(), function() {},
//     Math,
//     new Number(), 1,
//     new Object(), {},
//     new RegExp(), /(?:)/,
//     new String(), 'test',
// ];
// for (let i = 0; i < types.length; i++) {
//     types[i].constructor = Type;
//     types[i] = [types[i].constructor, 
//         types[i] instanceof Type, 
//         types[i].toString()];
// }
// console.log(types.join('\n\n'));

// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//     console.log(this.name);
// }
// let rabbit = new Rabbit('Hi from Rabbet!');
// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi('');

// let user = {
//     name: 'John',
// };
// let admin = user;
// admin.name = 'Bob';
// console.log(user.name);

// Simple clone for objects
// let user = {
//     name: 'John',
//     age: 30,
// };
// // for...in
// let userClone1 = {};
// for (const key in user) {
//     userClone1[key] = user[key];
// }
// userClone1.name = 'Pete';
// console.log(user.name);
// console.log(userClone1.name);
// // Object.assign(dest, [src1, src2, ...]);
// let userClone2 = {};
// Object.assign(userClone2, user);
// console.log(userClone2.name);
// //
// let userClone3 = Object.assign({}, user);
// console.log(userClone3.name);
// //
// let userClone4 = {...user};
// console.log(userClone4.name);

// Deep clone for objects
// let user = {
//     name: 'John',
//     age: 30,
//     sizes: {
//         height: 182,
//         width: 50,
//     },
// };
// console.log(user.sizes.height);
// let userClone1 = Object.assign({}, user);
// console.log(userClone1.sizes.height);
// console.log(user.sizes === userClone1.sizes);
// console.log(user.sizes.width++);
// console.log(user.sizes.width);
// console.log(userClone1.sizes.width);

// let obj = {
//     a: 1,
//     b: {
//         c: 3,
//     },
// };
// let obj1 = JSON.parse(JSON.stringify(obj));
// console.log(obj);
// console.log(obj1);

// let user = {
//     name: 'John',
//     age: 30,
//     sayGoodbye: function () {
//         console.log('Goodbye!');
//     },
//     sayByeBye: () => console.log('Bye Bye!'),
//     sayBye(){
//         console.log('Bye!');
//     },
//     sayUserName: function() {
//         console.log(this.name);
//     },
//     sayUserNameArrowFn: () => {
//         this.name = user.name;
//         console.log(this.name);
//     },
// };
// user.sayHi = () => console.log('Hi from ' + user.name);
// user.sayHi();
// //
// function sayHello() {
//     console.log('Hello from ' + this.name);
// }
// // console.log(Object.keys(user));
// user.sayHello = sayHello;
// user.sayHello();
// user.sayGoodbye();
// user.sayByeBye();
// user.sayBye();
// user.sayUserName();
// user.sayUserNameArrowFn();

// let user = {
//     name: 'John',
//     age: 30,
//     sayHi() {
//         console.log(this.name);
//     },
// }
// user.sayHi();
// 
// let admin = user;
// user = null;
// // user.sayHi();
// admin.sayHi();

// let user = {
//     name: 'John',
// };
// let admin = {
//     name: 'Admin',
// };
// function sayHi() {
//     console.log(this.name);
// }
// user.f = sayHi;
// admin.f = sayHi;
// user.f();
// admin.f();
// admin['f']();
// sayHi();
// console.log(this);

// // 'use strict';
// let user = {
//     name: 'John',
//     hi() { console.log(this.name); },
//     bye() { console.log('Bye!'); },
// };
// //
// user.hi();
// (user.name === 'John' ? user.hi : user.bye)();
// user.hi();
// //
// let hello = user.hi;
// hello();

// let user = {
//     firstName: 'Albert',
//     sayHi() {
//         let arrow = () => console.log(this.firstName);
//         arrow();
//     },
// };
// user.sayHi();

// let user = {
//     name: 'John',
//     go: function () {
//         console.log(this.name);
//     }
// };
// (user.go)();

// 'use strict';
// let obj, method;
// obj = {
//     go: function() { console.log(this); },
// };
// obj.go();
// (obj.go)();
// (method = obj.go)();
// (obj.go || obj.stop)();

// 'use strict';
// function makeUser() {
//     return {
//         name: 'John',
//         ref: this,
//     };
// }
// let user = makeUser();
// console.log(user.name);
// // user.makeUser;
// // console.log(user.ref.name);

// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this;
//         },
//     };
// };

// let user = makeUser();
// console.log(user.ref().name);

// let calculator = {
//     a: null, b: null,
//     read: function () {
//         this.a = +prompt('a...', '2');
//         this.b = +prompt('b...', '3');
//     },
//     sum: function () {
//         return this.a + this.b;
//     },
//     mul: function () {
//         return this.a * this.b;
//     },
// };
// 
// calculator.read(); // asks 2 values 
// // + save them as the properties of object
// console.log(calculator.sum()); // summary of 2 values
// console.log(calculator.mul()); // multiply of 2 values

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep() {
//         console.log(this.step);
//         return this;
//     },
// };
// ladder.up().up().down().showStep();

// let user = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
// };
// function sayHi() {
//     console.log(`name: ${this.name}`);
// };
// user.sayHi = sayHi;
// function getUserAge() {
//     console.log(`age: ${this.age}`);
// };
// user.getUserAge = getUserAge;
// user.sayHi();
// user.getUserAge();
// function userIsAdmin() {
//     console.log(`isAdmin: ${this.isAdmin}`);
// };
// user.userIsAdmin = userIsAdmin;
// user.userIsAdmin();
// user.surname = 'Galt';
// function getUserSurname() {
//     console.log(`surname: ${this.surname}`);
// };
// user.getUserSurname = getUserSurname;
// user.getUserSurname();

// let user = {
//     name: 'John',
//     sayHi: function() { console.log(`Hi from ${this.name}`); },
//     sayHello: () => {
//         this.name = user.name;
//         console.log(`Hello from ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye from ${this.name}`)
//     },
// };
// user.sayHi();
// user.sayHello();
// user.sayBye();

// let user = {
//     name: 'John',
//     sayHello() {
//         // console.log(user.name);
//         console.log(this.name);
//     },
// };
// user.sayHello();
// let admin = user;
// user = null;
// admin.sayHello();

// let user = { name: 'John', };
// let admin = { name: 'Admin', };
// function sayHi() {
//   console.log(`Hi from ${this.name}`);
// };
// sayHi();
// user.sH = sayHi;
// admin.sH = sayHi;
// user.sH();
// admin.sH();

// let age = prompt('What is your age?', 18);
// let welcome = (age < 18) ?
//   () => console.log('Hi!') :
//   () => console.log('Hello!');
// welcome();

// 'use strict';
// let user = {
//   name: 'John',
//   hi() { console.log(`Hi from ${this.name}`); },
//   bye() { console.log('Bye'); },
// };
// // (user.name === 'John' ? user.hi : user.bye)();
// // let result = user.name === 'John' ? user.hi : user.bye;
// let result = user.hi();
// // result();
// console.log(result);

// let obj = {
//   name: 'John',
// };
// let method = function () {
//   console.log(this);
// };
// method();
// obj.method = method;
// obj.method();

// let user = {
//   name: "John",
//   go: function() { console.log(this.name) },
// };
// (user.go)();

// console.log( this || undefined );

// v1
// function User(name) {
//   // this = {};
//   this.name = name;
//   this.isAdmin = false;
//   return this;
// }
// v2
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// };
// invoke
// let user = new User('Peter');
// console.log(user.name);
// console.log(user.isAdmin);

// let user1 = new function() {
//   // this = {};
//   this.name = 'Peter';
//   this.isAdmin = false;
//   // code...
//   // console.log(this.name);
// };

// Encapsulation
// 
// v1 using Classes
// class MyObj1 {
//   constructor(initVal) {
//     this.myVal = initVal;
//   };
//   set(x) {
//     this.myVal = x;
//   };
// };
// const x = new MyObj1(0);
// console.log(x);
// x.set(2)
// console.log(x);
// x.myVal = 3;
// console.log(x);
// console.log(x.myVal);
//
// v2 using "this"
// const MyObj2 = initVal => {
//   return {
//     myVal: initVal,
//     set: function(x) {
//       this.myVal = x;
//     },
//   };
// };
// const x = MyObj2(1);
// console.log(x);
// x.set(2);
// console.log(x);
// x.myVal = 3;
// console.log(x);
// 
// v3 without "this". as + is the private fields
// const MyObj3 = initVal => {
//   let myVal = initVal;
//   return {
//     get: function() {
//       return myVal;
//     },
//     set: function(val) {
//       myVal = val;
//     },
//   };
// };
// const x = MyObj3(1);
// console.log(x.get()); // 1
// console.log(x.myVal); // undefined
// x.set(2);
// console.log(x.get()); // 2
// x.myVal = 3;
// console.log(x.get()); // 2

// Encapsulation
// state container definition
// const useState = initVal => {
//   let val = initVal;
// 
//   const get = () => val;
//   const set = x => (val = x);
// 
//   return Object.freeze( { get, set } );
// };
//make a counter by using the state container
// const makeCounter = () => {
//   const { get, set } = useState(0);
// 
//   const inc = () => set(get() + 1);
//   const dec = () => set(get() - 1);
// 
//   return Object.freeze( { get, inc, dec } );
// };
// create the counter object
// const myCounter = makeCounter();
//
// console.log(myCounter.get());
// myCounter.inc();
// myCounter.inc();
// myCounter.inc();
// console.log(myCounter.get());
// myCounter.dec();
// console.log(myCounter.get());

// const doubleAllImperative = data => {
//   const doubled = [];
// 
//   for (let i = 0, length = data.length; i < length; i++) {
//     doubled[i] = data[i] * 2;
//   }
// 
//   return doubled;
// };
// 
// const doubleAllInterface = data => data.map(x => x * 2);
// const box = value => ({
//   map: f => box( f(value) ),
//   toString: () => `box(${value})`,
// });
// 
// console.log(
//   doubleAllInterface( [2, 3,] ),
//   doubleAllInterface( box(2) ).toString(),
// );

// function f() {
//   return Array.from(arguments);
// };
// console.log(f(1, 2, 3));

// let arr1 = Array.from( [1, 2, 3,], x => x + x );
// console.log(arr1);
// let arr2 = Array.from( { length: 5, }, (v, k) => k );
// console.log(arr2);

// let createCounter = () => {
//   let count = 0;

//   return ({
//     click: () => count++,
//     getCount: () => count.toLocaleString(),
//   });
// };

// const counter1 = createCounter();
// counter1.click();
// counter1.click();
// counter1.click();
// console.log(counter1.getCount());
// const counter2 = createCounter();
// counter2.click();
// counter2.click();
// console.log(counter2.getCount());

// class Counter {
//   #count = 0;
//   click() {
//     this.#count += 1;
//   };
//   getCount() {
//     return this.#count.toLocaleString();
//   };
// };
// const myCounter = new Counter();
// myCounter.click();
// myCounter.click();
// myCounter.click();
// console.log(myCounter.getCount());

// function User(pName, pAge) {
//   this.name = pName;
//   this.age = pAge;
//   this.displayInfo = function() {
//     console.log(`Name: ${this.name};\nAge: ${this.age}`);
//   };
// };
// var tom = new User('Tom', 26);
// console.log(tom.name);
// tom.name = 34;
// console.log(tom.name);

// function User(name) {
//   this.name = name;
//   let _age = 1;
//   this.displayInfo = function () {
//     console.log(`Name: ${this.name};\nAge: ${this.age}`);
//   };
//   this.getAge = function() {
//     return _age;
//   };
//   this.setAge = function(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       _age = age;
//     } else {
//       console.log('Invalid value');
//     }
//   };
// };
// let tom = new User('Tom');
// console.log(tom._age);
// console.log(tom.getAge());
// console.log(tom.setAge(21));
// console.log(tom.getAge());

// let user = new function() {
//   this.name = 'John';
//   this.isAdmin = false;
//   //
//   // another code
// };

// function User() {
//   console.log(new.target);
// };
// User();
// new User();

// function User(name) {
//   if (!new.target) {
//     return new User(name);
//   }
//   this.name = name;
// }
// let john = User('John');
// console.log(john.name);

// function BigUser() {
//   this.name = 'John';
//   return { name: 'Godzilla' };
// };
// console.log(new BigUser().name);
// 
// function SmallUser() {
//   this.name = 'John';
//   return 'Bobby';
// };
// console.log(new SmallUser().name);

// function User() {
//   console.log(new.target);
// };
// User();
// new User();
// new User;

// function User(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log(`My name is ${this.name}`);
//   };
// };
// //
// let john = new User('John');
// john.sayHi();
// //
// john = {
//   name: 'John',
//   sayHi: function () {
//     console.log(`My name is ${this.name}`);
//   },
// };
// john.sayHi();

// let obj = {};
// function A() { return obj };
// function B() { return obj };
// console.log(new A() === new B());

// let Calculator = function() {
//   this.read = function() {
//     this.a = +prompt('a?', 2);
//     this.b = +prompt('a?', 3);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }
// let calculator = new Calculator();
// calculator.read();
// console.log(`Sum: ${calculator.sum()}`);
// console.log(`Mul: ${calculator.mul()}`);

// let User = function (name, surname) {
//   this.name = name;
//   this.surname = surname;
//   console.log(`My name is ${this.name} ${this.surname}`);
// };
// let alex = new User('Alexander', 'Nevsky'); // My name is Alexander Nevsky
// let renat = new User('Renat'); // My name is Renat undefined

// let Accumulator = function(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('enter an accumulating value', 2);
//   };
// };
// let accumulator = new Accumulator(1);
// accumulator.read();
// // accumulator.read();
// console.log(accumulator.value); // summary

// let user = {};
// console.log(user.address.street); // Error
// console.log(user && user.address && user.address.street); // undefined
// console.log(user?.address?.street); // undefined

// let html = document.querySelector('.my-element').innerHTML;

// let obj = {a: null, b: {c: 3,},};
// console.log(obj?.a);
// console.log(obj?.b?.c);
// console.log(obj.b?.c);

// let user = null;
// let x = 0;
// user?.sayHi(x++);
// console.log(x);

// let user1 = {
//   admin() { console.log(`I'm an admin`); },
// };
// let user2 = {};
// user1.admin?.();
// user2.admin?.();

// let user1 = {
//   firstName: 'John',
// };
// let user2 = null;
// let key = 'firstName';
// console.log( user1?.[key] );
// console.log( user2?.[key] );
// console.log(user1?.[key]?.something?.not?.existing);

// let id_1 = Symbol();
// let id_2 = Symbol('id2');
// let id_3 = Symbol('id2');
// console.log(id_1);
// alert(id_1); // TypeError
// alert(id_1.toString()); // working

// let user = {
//   name: 'John',
// };
// let id = Symbol('id_0');
// user[id] = 1;
// console.log(user[id]);
// console.log(user);
// console.log(Object.keys(user));
// console.log(id.description);

// let id = Symbol('id_0');
// let user = {
//   name: 'John',
//   [id]: 123,
// };
// console.log(user[id]);

// let id = Symbol('id_0');
// let user = {
//   name: 'John',
//   age: 30,
//   [id]: 123,
// };
// for (const key in user) {
//   console.log(key);
// }
// console.log(user);
// console.log(Object.getOwnPropertySymbols(user));
// let newUser = Object.assign(user);
// console.log(newUser[id]);
// console.log(Reflect.ownKeys(user));
// console.log(Reflect.ownKeys(newUser));

// let id_1 = Symbol.for('id');
// let id_2 = Symbol.for('id');
// console.log(id_1 === id_2);

// Global Symbols
// let globSymb = Symbol.for('nameG');
// let locSymb = Symbol('nameL');
// console.log(Symbol.keyFor(globSymb));
// console.log(Symbol.keyFor(locSymb));
// console.log(locSymb.description);

// let symb1 = Symbol('id_1');
// let symb2 = Symbol;
// console.log(symb1.description);
// console.log(symb2.description);

// let obj1 = {a: 1,};
// let obj2 = {b: 2,};
// let obj3 = obj1 + obj2;
// console.log(obj3);
// let obj4 = obj1 - obj2;
// console.log(obj4);
// let obj5 = obj1 * obj2;
// console.log(obj5);
// let obj6 = obj1 / obj2;
// console.log(obj6);
// console.log(obj1 + 0);
// alert(obj1);
// console.log(obj1 + 1);
// console.log(Number(obj1));
// console.log(typeof String(obj1));

// let obj1 = {a: 1,};
// let obj2 = {b: 2,};
// let arr1 = ['c', 3,];
// let anotherObj = {};
// anotherObj[obj1] = 123;
// console.log(anotherObj);
// anotherObj[obj2] = 321;
// console.log(anotherObj);
// anotherObj[arr1] = 111;
// console.log(Object.keys(anotherObj));
// console.log('obj1' in anotherObj, 'obj2' in anotherObj, 'arr1' in anotherObj);
// console.log(obj1 in anotherObj, obj2 in anotherObj, arr1 in anotherObj);
// console.log(anotherObj[obj1]);
// console.log(obj1);
// console.log(anotherObj[obj2]);
// console.log(anotherObj[arr1]);
// console.log('[object Object]' in anotherObj);
// console.log(anotherObj['[object Object]']);
// console.log(Reflect.ownKeys(anotherObj));
// console.log(Object.getOwnPropertyNames(anotherObj));
// for (const key in anotherObj) {
//   console.log(key);
// }
// console.log(Object.entries(anotherObj));

// let n = +obj2;
// console.log(n);
// let greater = Boolean(obj1) === Boolean(obj2);
// console.log(greater);

// let id;
// obj1[id] = Symbol('id1');
// console.log( Symbol('id1') );
// console.log(obj1);

// let obj = {a: 1, b:2, id: Symbol('id')};
// let objValOf = obj.valueOf();
// let objEntries = Object.entries(obj);

// console.log(obj);
// console.log(objValOf);
// console.log(objEntries);

// obj[Symbol.toPrimitive] = function (hint) {};

// let user = {
//   name: "John",
//   money: 1000,

//   [Symbol.toPrimitive](hint) {
//     alert(`hint: ${hint}`);
//     return hint == "string" ? `{name: "${this.name}"}` : this.money;
//   }
// };
// alert(user);
// alert(+user);
// alert(user + 500);

// let user = {
//   name: 'John',
//   money: 1000,
//   toString() {
//     return `{name: "${this.name}"}`;
//   },
//   valueOf() {
//     return this.money;
//   },
// };
// alert(user);
// alert(+user);
// alert(user + 500);

// let user = {
//   name: 'John',
//   money: 1000,
//   toString() {
//     return this.name;
//   },
// };
// alert(user);
// // alert(+user); // NaN
// alert(user + 500);

// let john = {
//   name: 'John',
//   sayHi() {
//     console.log(`Hello from ${this.name}`);
//     return this;
//   },
// };
// john.sayHi();

// let str = 'Hello!';
// console.log(str.toUpperCase());

// let num = 1.23456;
// console.log(num.toFixed(2));

// console.log(typeof 0);
// console.log(typeof new Number(0));

// let zero = new Number(0);
// if (zero) {
//   console.log('zero is truthy?');
// }

// let num = Number('123');
// console.log(typeof num);

// 'use strict';
// let str = 'Hello';
// str.test = 5;
// console.log(str.test); // undefined | error in strict mode

// let a = BigInt(27);
// let b = 2;
// console.log(a, typeof a);
// let c;
// console.log(c = a * b);

// console.log(1e-6);

// let bin2 = 0b11111111;
// let bit8 = 0o377;
// console.log(bin2);
// console.log(bit8); // binary
// console.log(bin2 === bit8); // octal

// let num = 255;
// console.log(num.toString(36));
// console.log(num.toString(32));
// console.log(num.toString(16));
// console.log(num.toString(10));
// console.log(num.toString(8));
// console.log(num.toString(2));

// let num = 123456
// console.log(num.toString(36));
// console.log(123456..toString(36));

// let num = 123.3245532;
// console.log(num.toFixed(1));
// console.log(typeof +num.toFixed(1));
// console.log(num.toFixed(2));
// console.log(typeof num.toFixed(2));
// console.log(Math.floor(num));
// console.log(typeof Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));
// console.log(Math.trunc(num));

// console.log(1e500);
// console.log(-1e500);

// let num = .1 + .2;
// console.log(+num.toFixed(2));
// console.log(1e-10);
// console.log(0.0000000001);

// console.log(isFinite(12e500));
// console.log(isNaN('asd'/ 2));
// console.log(isNaN('asd'));

// console.log(NaN == undefined);
// console.log(null == undefined);
// console.log(null == NaN);

// let num = '2e500';
// console.log( isFinite(num) );

// let a = 1, b = 1;
// console.log(Object.is(a, b));
// console.log(a === b);

// console.log(Object.is(NaN, NaN));
// console.log(Object.is(0, -0));
// console.log(NaN === NaN);
// console.log(0 === -0);

// console.log('100px');
// console.log(parseInt('100px') );
// console.log(parseFloat('10.2em') );
// console.log(parseFloat('10.24.4em') );

// console.log(Math.max(1, 2, 5, 1, 3, 18));
// console.log(Math.min(1, 2, 5, 1, 3, 18));

// for (let i = 0; i <= 100; i++) {
//   console.log(Math.round(Math.random().toFixed(2) * 10));
// }

// console.log(Math.pow(2, 3) === 2 ** 3);

// let a = +prompt('a?', '2');
// let b = +prompt('b?', '2');
// let result = a + b;
// console.log(result);

// console.log(1.35.toFixed(1));
// console.log(6.35.toFixed(1));
// console.log(6.35.toFixed(20));
// console.log(Math.round(6.35 * 10) / 10);

// let str = 'string';
// console.log(str[1]);
// console.log(str.charAt(1));
// console.log(str[str.length - 1]);

// for (let char of str) {
//   console.log(char);
// }

// str[1] = 'a';
// console.log(str);

// let str = 'string';

// console.log(str = str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);
// console.log(str.toLowerCase());
// console.log(str);
// console.log(str.indexOf('N', 2));

// let str = 'London is the capital of England. England is a country.';
// let target = 'E';

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;
//   console.log(`Founded at index: ${foundPos}`);
//   pos = foundPos + 1;
// }

// let pos = -1;
// while ( ( pos = str.indexOf(target, pos + 1) ) != -1 ) {
//   console.log(pos);
// }

// let str = 'Widget with id';
// if (str.indexOf('Widget') != -1) {
//   alert('has');
//   console.log('has');
// }

// console.log(-(~2));

// let str = 'Widget with id';
// if (~str.indexOf('Widget')) {
//   console.log('has');
// }
// console.log(~4294967295);
// console.log(str.includes('Widget'));
// console.log(str.includes('Widget'));
// console.log(str.includes('Widget', 2));
// console.log(str.includes('hello'));
// console.log(str.startsWith('Wid'));
// console.log(str.endsWith('id'));

// let str = 'Widget with id';

// console.log(str.slice(2, 5));

// console.log(str.substr(1, 5));

// console.log(str.substring(2, 4));
// console.log(str.substring(4, 2));

// console.log('Ö' > 'Z');

// console.log('abc'.codePointAt(0));
// console.log('ABC'.codePointAt(0));

// let a;
// a = String.fromCodePoint(97);
// console.log(a);

// let str = '';
// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str);

// let str1 = 'Uncaught ReferenceError: a is not defined';
// let str2 = 'Uncaught ReferenceError: a не визначено';
// let strDiff = str1.localeCompare(str2);
// console.log(strDiff);

// console.log('𝒳');
// console.log('𝒳'.charAt(0));
// console.log('𝒳'[1]);
// console.log('𝒳'.length);

// console.log('😂');
// console.log('😂'.codePointAt(0));
// console.log(String.fromCodePoint(128514));
// console.log('😂'.length);

// console.log('𩷶'.length);
// console.log('𩷶');

// console.log('S');
// console.log('S\u0323');
// console.log('S\u0307\u0323');
// console.log('S\u0307');
// console.log('S '.repeat(5).trim());

// get first uppercase letter
// function ucFirst(str) {
//   if (!str) return str;
//   //
//   str = str[0].toUpperCase() + str.slice(1);
//   return str;
// };
// console.log(ucFirst('john'));

// function checkSpam(str) {
//   let rule1 = 'viagra'.toLowerCase();
//   let rule2 = 'XXX'.toLowerCase();
//   str = str.trim().toLowerCase();
//   //
//   if ( str.includes(rule1) || str.includes(rule2) ) {
//     console.log(true);
//   }
// };
// checkSpam('buy ViAgRA now'); // true
// checkSpam('free xxxxx');
// checkSpam('innocent rabbit');

// function truncate(str, maxLength) {
//   if (!str) str = null;

//   if (str.length > maxLength) {
//     str = str.substr(0, maxLength) + '...';
//     console.log(str);
//   }
// };
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) // "Вот, что мне хотело…"
// truncate("Всем привет!", 20) // "Всем привет!"

// function extractCurrencyValue(value) {
//   value = +(value.slice(1));
//   console.log(value);
// };
// extractCurrencyValue('$123');

// let user = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   id_1: Symbol('id1'),
// };
// for (const userElement of Object.values(user)) {
//   console.log(userElement);
// }
// for (const userKey in user) {
//   console.log(userKey);
// }
// console.log(Object.entries(user));
// let map = new Map(Object.entries(user));
// console.log(map);
// console.log(Object.getOwnPropertyNames(user));
// console.log(Reflect.ownKeys(user));

// for (const userElement of Object.values(user)) {
//   console.log(userElement);
// }

// for (const userKey in user) {
//   console.log(userKey);
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));
// console.log(Reflect.ownKeys(user));
// console.log(Object.getOwnPropertySymbols(user));

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// function totalSalary(value) {
//   return Object.values(salaries).reduce((acc, el) => acc + el, 0 );
// }
//
// console.log(totalSalary(salaries));

// let user = {
//   name: 'John',
//   age: 30,
// };
//
// function countProps(obj) {
//   return Object.keys(obj).length;
// }
//
// console.log(countProps(user));

// let fullName = ['John', 'Doe',];
// let [firstName, secondName] = fullName;
// console.log(fullName);
// console.log(firstName, secondName);

// let [firstName, secondName] = 'John Doe'.split(' ');
// console.log(firstName);
// console.log(secondName);

// let [firstName, , title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
//
// console.log(title);

// let [a, b, c] = '123';
// console.log(a, b, c);

// let [one, two, three] = new Set([1, 2, 3]);
// console.log(one, two, three);

// let user = {};
//
// [user.name, user.surname] = 'John Doe'.split(' ');
//
// console.log(user.name);

// let user = new Map();
// user.set('name', 'John');
// user.set('age', '30');
//
// for (const [key, value] of user) {
//   console.log(`${key}: ${value}`);
// }

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//
// console.log(rest);
// console.log(rest.length);

// let [name = prompt('name?', 'John'), surname = prompt('surname?', 'Doe')] = ['Julius'];
//
// console.log(name);
// console.log(surname);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
//
// // let {title, width, height} = options;
// //
// // console.log(title, width, height);
//
// let {width: w = 50, height: h = 100, title} = options
// console.log(title, w, h);
//
// let { title, ...rest } = options;
// console.log(title, rest);

// let title, width, height;
//
// ({title, width, height} = {title: 'Menu', width: 200, height: 100})
//
// console.log(title);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ['Cake', 'Donut',],
//   extra: true,
// };
//
// let {
//   size: {
//     width,
//     height,
//   },
//   items: [item1, item2],
//   title = 'Menu',
// } = options;
//
// console.log(title);
// console.log(width);
// console.log(item1);

// function showMenu(title = "Untitled", width = 200, height = 100, items = []) {
//   console.log(arguments);
// }
// showMenu("My Menu", undefined, undefined, ["Item1", "Item2"]);

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };
// function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
//   //
//   console.log(`${title}: ${width}x${height}`);
//   console.log(items);
// }
// showMenu(options);

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };
//
// function showMenu({
//                     title = 'Untitled',
//                     width: w = 100,
//                     height: h = 200,
//                     items: [item1, item2]
//                   }) {
//   console.log(`${title}: ${w}x${h}`);
//   console.log(item1, item2);
// }
// showMenu(options);

// let user = {
//   name: "John",
//   years: 30
// };
//
// let { name, years: age, isAdmin = false } = user;
// console.log(name, age, isAdmin);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// function topSalary(salaries) {
//   let max = 0,
//       maxName = null;
//
//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }
//   return maxName;
// }
//
// console.log(topSalary(salaries));

// let arr = ['hello', 'world',];
// let [str1, str2] = arr;
// console.log(str1, str2);

// let [a, b, c] = 'str';
// console.log(a, b, c);

// let user = {};
// [user.name, user.surname] = 'John Doe'.split(' ');
//
// for (let [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// function topSalary(salaries) {
//   let max = 0,
//       maxName = null;
//
//   for (const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }
//   return maxName;
// }
//
// console.log(topSalary(salaries));

// console.log(globalThis);
// console.log(window);

// window.console.log('hello');

// window.currentUser = {
//   name: 'John',
// };
// console.log(currentUser.name);
// console.log(window.currentUser.name);

// if (!window.Promise) console.log(`Your browser is too old`);
// if (window.Promise) console.log(`Promise works`);

// let range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]: function () {
//     return {
//       current: this.from,
//       last: this.to,
//       next() {
//         if (this.current <= this.last) {
//           return {
//             done: false,
//             value: this.current++,
//           }
//         } else {
//           return {
//             done: true,
//           }
//         }
//       },
//     }
//   }
// };
//
// for (const num of range) {
//   console.log(num);
// }

// let str = 'strong';
//
// let iterator = str[Symbol.iterator]();
//
// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   console.log(result.value);
// }

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };
//
// let arr1 = Array.from(arrayLike);
// console.log(arr1);

// let maap = new Map();
// console.log(maap);
// maap.set('one', 'two');
// console.log(maap.get('one'));
// console.log(maap.has('one'));
// console.log(maap.size);

// let john = { name: 'John', };
//
// let visitsCountMap = new Map();
//
// visitsCountMap.set(john, 123);
//
// console.log(visitsCountMap.get(john));

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);
//
// console.log([...recipeMap.keys()]);

// for (let vegetable of recipeMap.keys()) {
//   console.log(vegetable);
// }
// for (let amount of recipeMap.values()) {
//   console.log(amount);
// }
// for (let entry of recipeMap.entries()) {
//   console.log(entry);
// }
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// let recipeMap = new Map([
//   ["огурец", 500],
//   ["помидор", 350],
//   ["лук",    50]
// ]);
//
// let obj = Object.fromEntries(recipeMap.entries());
// console.log(obj);
//
// let map = new Map(Object.entries(obj));
// console.log(map);

// let newSet = new Set(['hello', 'world',]);
// console.log(newSet);
// console.log(newSet.has('hello'));
// console.log(newSet.size);

// let set = new Set();
// let john = {name: 'John'};
// let pete = {name: 'Pete'};
// let marry = {name: 'Marry'};
// 
// set.add(john).add(pete).add(marry);
// console.log(set.size);
// 
// for (const user of set) {
//   console.log(user.name);
// }
//
// set.forEach(value => console.log(`value: ${value.name}`));

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
//
// console.log(unique(values));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(arr) {
//   let map = new Map();
//
//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//
//   console.log(map);
//
//   return Array.from(map.values());
// }
//
// console.log(aClean(arr));

// function aClean(arr) {
//   let obj = {};
//
//   for (let i = 0; i < arr.length; i++) {
//     let sorted = arr[i].toLowerCase().split('').sort().join('');
//     obj[sorted] = arr[i];
//   }
//
//   return Object.values(obj);
// }
// console.log(aClean(arr));

// let arr = [1, 2, 3, 4, 5,];
//
// function duplicate(arr) {
//   return [...arr, ...arr];
// }
//
// console.log(duplicate(arr));

// let map = new Map();
//
// map.set('name', 'John');
// let keys = Array.from(map.keys());
// keys.push('more');
// console.log(keys);

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(arr) {
//   let map = new Map();
//
//   for (const word of arr) {
//     const sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//
//   return Array.from(map.values());
// }
//
// console.log(aClean(arr));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(arr) {
//   let map = new Map();
//
//   for (const word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//
//   return Array.from(map.values());
// }
//
// console.log(aClean(arr));

// Object iterator
// let range = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]: function () {
//     return {
//       current: this.from,
//       last: this.to,
//       next() {
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++, };
//         } else {
//           return { done: true, };
//         }
//       },
//     }
//   },
// };
//
// for (const number of range) {
//   console.log(number);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(arr) {
//   let map = new Map();
//
//   for (let word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//
//   return Array.from(map.values());
// }
//
// console.log(aClean(arr));

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, 'ok');
// console.log(weakMap.get(obj));

// let visitsCountMap = new WeakMap();
//
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, ++count);
//
//   return count;
// }
//
// let john = { name: 'John', };
// console.log(countUser(john));
// console.log(countUser(john));
// console.log(countUser(john));
// console.log(countUser(john));

// let cache = new WeakMap();
//
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = Object.keys(obj);
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
//
// let obj = {name: 'John', age: 30,};
// let result1 = process(obj);
// console.log(result1);
// obj.isAdmin = false;
// let result2 = process(obj);
// obj = null;
// console.log(result2);

// console.log([1, 2, 3,] + [3, 5, 6]);

// let john = { name: 'John', };
// let visitCountMap = new Map();
//
// visitCountMap.set(john, 123);
//
// console.log(visitCountMap.get(john));
// console.log(Array.from(visitCountMap.keys()));
// console.log(Array.from(visitCountMap.values()));
// console.log(Array.from(visitCountMap.entries()));

// let recipeMap = new Map([
//   ["cucumber", 500],
//   ["tomato", 350],
//   ["onion",    50]
// ]);

// for (let key of recipeMap.keys()) console.log(key);
// for (let value of recipeMap.values()) console.log(value);
// for (let entry of recipeMap.entries()) console.log(entry);

// recipeMap.forEach((key, value) => {
//   console.log(`${value}: ${key}`);
// });

// recipeMap.forEach((value) => {
//   console.log(`amount: ${value}`);
// });

// let map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);
//
// console.log(map.get('1'));
// console.log(map.get(1));
// console.log(map.get(true));

// let obj = {
//   name: "John",
//   age: 30
// };
//
// let map = new Map(Object.entries(obj));
//
// let newObj = Object.fromEntries(map.entries());
// console.log(newObj);

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// function unique(arr) {
//   return Array.from(new Set(arr));
// }
// console.log(unique(values));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(arr) {
//   let map = new Map();
//
//   for (const word of arr) {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//
//   return Array.from(map.values());
// }
// console.log(aClean(arr));

// let map = new Map();
//
// map.set("name", "John");
//
// let keys = Array.from(map.keys());
//
// keys.push("more");
//
// console.log(keys);

// let john = {name: 'John',};
//
// console.log(john.name);
//
// john = null;
//
// console.log(john);

// let weakMap = new WeakMap();
//
// let obj = {};
//
// weakMap.set(obj, 'ok');
//
// console.log(weakMap.get(obj));
//
// weakMap.set('test', 'whoops');

// let john = { name: 'John', };
//
// let weakMap = new WeakMap();
//
// weakMap.set(john, '...');
// console.log(weakMap.get(john));
//
// john = null;
// console.log(weakMap.get(john));

// let a = function example() {
//   return typeof example;
// }
// console.log(a()); // function

// let obj = {target: 'mafia',};
//
// let weakMap = new WeakMap();
//
// weakMap.set(obj, 'TOP SECRET');

// let visitsCountMap = new WeakMap();
//
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//
//   visitsCountMap.set(user, count + 1);
// }

// let cache = new WeakMap();
//
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = Object.keys(obj); // doing something with the obj
//
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
//
// let obj = {prop1: 'val1',};
//
// let result1 = process(obj);
// let result2 = process(obj);
//
// obj = null;
//
// console.log(result1);
// console.log(result2);
//
// console.log(cache.size);

// let visitedSet = new WeakSet();
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);
//
// console.log(visitedSet.has(john));
// console.log(visitedSet.has(mary));

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
//
// let readMessages = new WeakSet();
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// readMessages.add(messages[0]);
// console.log(`Read message 0: ${readMessages.has(messages[0])}`);
//
// messages.shift();

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
//
// let readMap = new WeakMap();
// readMap.set(messages[0], new Date(2017, 1, 1));
//
// console.log(readMap);

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };
//
// let doublePrices = Object.fromEntries(
//     Object
//         .entries(prices)
//         .map(([key, value]) => [key, value * 2])
// );
// console.log(doublePrices.meat);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };
//
// function sumSalaries(val) {
//   return Object.values(val)
//       .reduce((acc, el) => acc + el, 0 );
// }
//
// console.log(sumSalaries(salaries));

// let user = {
//   name: 'John',
//   age: 30
// };
//
// function count(obj) {
//   return Object.keys(obj).length;
// }
//
// console.log(count(user));

// let arr = ['John', 'Doe',];
//
// let [firstName, secondName] = arr;
//
// console.log(secondName, firstName);

// let [firstName, secondName] = 'John Doe'.split(' ');
// console.log(secondName, firstName);

// let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
//
// let [firstName, ,title] = arr;
//
// console.log(firstName, title);

// let [a, b, c] = 'xyz';
// console.log(a, b, c);

// let [one, two, three] = new Set([1, 2, 3]);
// console.log(three, two, one);

// let user = {};
//
// [user.name, user.surname] = 'John Doe'.split(' ');
//
// console.log(user.name);

// let user = {
//   name: "John",
//   age: 30
// };
//
// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
// }

// let user = new Map();
//
// user.set('name', 'John');
// user.set('surname', 'Doe');
//
// for (let [key, value] of user) console.log(`${key}: ${value}`);

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };
//
// let {title, width, height} = options;
// console.log(`${title} size: ${width}x${height}`);
//
// let {width: w, height: h, title: t} = options;
// console.log(`${t} size: ${w}x${h}`);

// let options = {
//   title: "Menu",
//   height: 200,
//   width: 100,
//   obj: {a: 2},
// };
//
// // let {title, ...rest} = options;
// //
// // console.log(rest.height);
// // console.log(rest.width);
//
// let {...rest} = options;
// console.log(rest);
//
// console.log(rest.obj.a === options.obj.a);

// let options = {
//   size: {
//     width: 100,
//     height: 200
//   },
//   items: ["Cake", "Donut"],
//   extra: true
// };
//
// let {
//   size: {
//     width, height,
//   },
//   items: [item1, item2],
//   title = 'Menu',
// } = options;
//
// console.log(title, width, height, item1, item2);

// let options = {
//   title: "My menu",
//   items: ["Item1", "Item2"]
// };
//
// function showMenu({title: t = 'Untitled', width: w = 200, height: h = 100, items = []}) {
//   console.log(`${t} size: ${w}x${h}`);
//   console.log(items.join(', '));
// }
// showMenu(options);

// let user = {
//   name: "John",
//   years: 30
// };
//
// let {name, years: age, isAdmin = false} = user;
//
// console.log(name, age, isAdmin);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
//   "Anna": 300,
// };
//
// function topSalary(obj) {
//   let max = 0;
//   let maxName = null;
//
//   for (const [name, salary] of Object.entries(obj)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }
//
//   return maxName;
// }
//
// console.log(topSalary(salaries));

// let now = new Date();
// console.log(now);
// console.log(Date.parse(now));
// let now1 = Date.now();
// console.log(now1);
// console.log(new Date(now1));
// console.log(new Date().getFullYear());
// console.log(new Date().getMonth());
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getTime());
// console.log(new Date().getTimezoneOffset());

// let start1 = new Date();
// for (let i = 0; i < 100000000; i++) {
//   let doSomething = i * i * i;
// }
// let end1 = new Date();
// console.log(`${end1 - start1}ms`);


// let start2 = Date.now();
// for (let i = 0; i < 100000000; i++) {
//   let doSomething = i * i * i;
// }
// let end2 = Date.now();
// console.log(`${end2 - start2}ms`);
// 
// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }
// 
// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }
// 
// function bench(fn) {
//   let date1 = new Date(0);
//   let date2 = new Date();
//   let start = Date.now();
// 
//   for (let i = 0; i < 100000; i++) fn(date1, date2);
// 
//   return Date.now() - start;
// }
// 
// let time1 = 0;
// let time2 = 0;
// 
// bench(diffSubtract);
// bench(diffGetTime);
// 
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }
// 
// console.log(`Time diffSubtract: ${time1}ms`);
// console.log(`Time diffGetTime: ${time2}ms`);

// let date = new Date(2012, 0, 3);

// function getWeekDay(date) {
//   const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',];

//   return days[date.getDay()];
// }
// console.log(getWeekDay(date));

// function getLocalDay(date) {
//   let day = date.getDay();

//   if (day == 0) {
//     day = 7;
//   }

//   return day;
// }
// console.log(getLocalDay(date));


// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//   let dateCopy = new Date(date);

//   dateCopy.setDate(date.getDate() - days);
//   return dateCopy.getDate();
// }

// console.log(getDateAgo(date, 1));
// console.log(getDateAgo(date, 2));
// console.log(getDateAgo(date, 365));


// function getLastDayOfMonth(year, month) {
//   return new Date(year, month + 1, 0).getDate();
// }
// console.log(getLastDayOfMonth(2012, 1));


// function getSecondsToday() {
//   let now = new Date();
//   console.log(now);

//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today;

//   return `sec: ${Math.round(diff / 1000)}`;
// }

// console.log(getSecondsToday());


// function getSecondsToday() {
//   let date = new Date();

//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }

// console.log(getSecondsToday());


// function getSecondsToday() {
//   let now = new Date(),
//       today = new Date(now.getFullYear(), now.getMonth(), now.getDate()),
//       diff = now - today;
//   return Math.round(diff / 1000);
// }
// console.log(getSecondsToday());


// function getSecondsToTomorrow() {
//   let now = new Date();
//   let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
//   let diff = tomorrow - now;
//   return Math.round(diff / 1000);
// }
// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//   let diff = new Date() - date;
//   if (diff < 1000) return `just now`;

//   let sec = Math.floor(diff / 1000);
//   if (sec < 60) return `${sec} sec ago`;

//   let min = Math.floor(diff / 60000);
//   if (min < 60) return `${min} min ago`;

//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes(),
//   ].map(el => el.slice(-2));
//   console.log(d);

//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }

// console.log(formatDate(new Date(new Date - 1))); // just now
// console.log(formatDate(new Date(new Date - 30 * 1000))); // 30 sec ago
// console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // 5 mins ago
// console.log(formatDate(new Date(new Date - 86400 * 1000))); // tomorrow date looks like 31.12.2016, 20:00


// let user = {
//   name: "John",
//   age: 30,
//   toString() {
//     return `name: ${this.name}, age: ${this.age}`;
//   },
// };

// // console.log(user.toString());
// console.log(JSON.stringify(user));


// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };

// meetup.place = room;
// room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, ['title', 'participants', 'number']));


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room,
// };

// room.occupiedBy = meetup;

// console.log(
//   JSON.stringify(meetup, (key, value) => {
//     return (key === 'occupiedBy') ? undefined : value
//   }, 0)
// );


// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   },
// };

// let meetup = {
//   title: 'Conference',
//   room,
// };

// console.log(JSON.stringify(room));
// console.log(JSON.stringify(meetup));


// let numbers = '[1, 2, 3]';
// numbers = JSON.parse(numbers);
// console.log(numbers[0]);

// let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// user = JSON.parse(user);
// console.log(user.friends[1]);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// // let meetup = JSON.parse(str);
// // console.log(meetup.date.getDate());
// let meetup = JSON.parse(
//   str, (key, value) => {
//     if (key === 'date') return new Date(value);
//     return value;
//   }
// );
// console.log(meetup.date.getDate());

// let schedule = `{
//   "meetups": [
//     {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
//     {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
//   ]
// }`;

// schedule = JSON.parse(
//   schedule, (key, value) => {
//     if (key === 'date') return new Date();
//     return value;
//   }
// );
// console.log(schedule.meetups[1].date.getDate());


// let user = {
//   name: "John Doe",
//   age: 35,
// };
// console.log(JSON.stringify(user));
// console.log(JSON.parse(JSON.stringify(user)));


// let room = {
//   number: 23
// },
//   meetup = {
//   title: "Conference",
//   occupiedBy: [{name: "Doe"}, {name: "Williams"}],
//   place: room
// };
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(
//   JSON.stringify(
//     meetup, (key, value) => {
//       return (key !== '' && value === meetup) ? undefined : value;
//     }
//   )
// );


// function pow(x, n) {
//   if (n === 1) return x;
//   return x * pow(x, n - 1);
// }
// console.log(pow(2, 3));

// function pow2(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) result *= x;
//   return result;
// }
// console.log(pow2(2, 3));


// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 600
//   }],

//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],

//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => {
//       return prev + current.salary;
//     }, 0);
//   } else {
//     let sum = 0;
//     for (let subDep of Object.values(department)) {
//       sum += sumSalaries(subDep);
//     }
//     return sum;
//   }
// }
// console.log(sumSalaries(company));


// function powRecursive(x, n) {
//   if (n === 1) return x;
//   return x * powRecursive(x, n - 1);
// }
// console.log(powRecursive(2, 3));

// function powLoop(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) result *= x;
//   return result;
// }
// console.log(powLoop(2, 3));



// let company = {
//   sales: [{
//     name: 'John',
//     salary: 1000
//   }, {
//     name: 'Alice',
//     salary: 600
//   }],

//   development: {
//     sites: [{
//       name: 'Peter',
//       salary: 2000
//     }, {
//       name: 'Alex',
//       salary: 1800
//     }],

//     internals: [{
//       name: 'Jack',
//       salary: 1300
//     }]
//   }
// };

// function sumSalaries(department) {

//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => {
//       return prev + current.salary;
//     }, 0);
//   } else {
//     let sum = 0;
    
//     for (let subDep of Object.values(department)) {
//       sum += sumSalaries(subDep);
//     }
    
//     return sum;
//   }

// }

// console.log(sumSalaries(company));


// let company = {
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// function sumSalary(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((prev, current) => {
//       return prev + current.salary;
//     }, 0);
//   } else {
//     let sum = 0;
//     for (let subDep of Object.values(department)) {
//       sum += sumSalary(subDep);
//     }
//     return sum;
//   }
// }

// console.log(sumSalary(company));



// let list1 = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       }
//     }
//   }
// };

// let list2 = list1.next.next;
// console.log(list2);

// list1.next.next = list2;
// console.log(list1.next.next);



// let list = {value: 1,};
// list.next = {value: 2,};
// list.next.next = {value: 3,};
// list.next.next.next = {value: 4,};

// list = {value: 'new item', next: list};
// console.log(list);


// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function sumTo(n) {
//   if (n === 1) return n;
//   return n + sumTo(n - 1);
// }

// function sumTo(n) {
//   return n * (n + 1) / 2;
// }

// console.log(sumTo(1));
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4));
// console.log(sumTo(100));



// function factorial(n) {
//   if (n === 1) return n;
//   return n * factorial(n - 1);
// }
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));



// function fib(n) {
//   // return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
//   let a = 1, b = 1;

//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
    
//     a = b;
//     b = c;
//   }

//   return b;
// }
// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));



// function fib(n) {
//     // return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//     let a = 1, b = 1;
//     for (let i = 3; i <= n; i++) {
//         let c = a + b;
//         a = b;
//         b = c;
//     }
//     return b;
// }
// console.log(fib(3));
// console.log(fib(7));
// console.log(fib(77));


// let list = { value: 1, next: { value: 2, next: { value: 3, next: { value: 4, next: null } } } };

// function printList(list) {
//   console.log(list.value);

//   if (list.next) {
//     printList(list.next);
//   }
// }

// printList(list);



// let sum = addTo(10);
// console.log(sum);
// function addTo(n) {
//   return n === 0 ? n : n + addTo(n - 1);
// }

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(4));


// function fib(n) {
//   // if (n <= 1) return n;
//   // return fib(n - 1) + fib(n - 2);

//   let a = 1, b = 1;

//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }

//   return b;
// }

// console.log(fib(77));



// function factorial(n) {
//   if(n === 1) return n;
//   return n * factorial(n - 1);
// }
// console.log(factorial(3));

// function fact(n) {
//   let res = 1;
//   for(let i = 2; i <= n; i++) {
//     res *= i;
//   }
//   return res;
// }
// console.log(fact(3));



// function fact(n) {
//   if (n < 1) return 0;
//   if (n === 1) return 1;

//   return n * fact(n - 1);
// }
// console.log(fact(4));



// let count = 0;

// function recurse() {
//   if (count === 11) return 'done';
//   count++;

//   return recurse();
// }
// console.log(recurse());
// console.log(count);



// function pow(x, n) {
//   if (n === 1) return n;

//   return x * pow(x, n - 1);
// }
// console.log(pow(3, 3));


// const sumOfDigits = num => num / 10 < 1 ? 1 : 1 + sumOfDigits(num / 10);

// function sumOfDigits(num) {
//   return (num / 10 < 1) ? 1 : 1 + sumOfDigits(num / 10);
// }
// console.log(sumOfDigits(55));


// let counter = 0;
// // 
// function callStackSize() {
//   counter++;
//   callStackSize();
// }
// //
// try{
//   callStackSize();
// } catch(e) {
//   console.log(counter);
// }



// function fact(n) {
//   const stack = [[n, 1,],];

//   while(stack.length > 0) {
//     const [curr, result] = stack.pop();

//     if (curr === 0 || curr === 1) return result;
//     stack.push( [curr - 1, result * curr] );
//   }
// }
// console.log(fact(3), fact(4), fact(5));



// function fibo(n) {
//   let a = 1, b = 1;

//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }

//   return b;
// }
// console.log(fibo(3), fibo(7), fibo(13));


// let str = 'hello';

// function reverse(str) {
//   if (str.length === 0) return '';
//   // return str[-1] + reverse(str[:-1]); // [:-1]
// }
// console.log(reverse(str));


