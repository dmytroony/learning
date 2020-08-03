'use strict';

// let user0 = new Object();
// equal
// let user1 = {
//     name: 'Dmytro',
//     age: 30,
//     'likes birds': true,
// };
// user1.isAdmin = true;
// delete user1.age;

// let fruit = 'apple';
// let bag = {
//     [fruit + 'Computers']: 5,
// };
// console.log(bag.appleComputers);

// function makeUser(name, age) {
//     return {
//         name, // equal (name: name)
//         age, // (age: age)
//         // ... other
//     };
// }
// let user2 = makeUser('John', 30);
// console.log("-> userName:", user2.name);

// let user3 = {};
// console.log(user3.noSuchProperty === undefined);

// let user4 = {
//     name: 'John',
//     age: 30,
// };
// let key = "sex";
// console.log('age' in user4);
// console.log('sex' in user4);
// console.log(key in user4);

// let obj = {
//     test: undefined,
// };
// console.log(obj.test);
// console.log('test' in obj);

// for...in
// let user = {
//     name: 'John',
//     age: 30,
//     isAdmin: true,
// };
//
// for (let prop in user) {
//     // console.log(`${prop}`);
// }

// right
// let codes = {
//     '+49': 'Germany',
//     '+41': 'Switzerland',
//     '+44': 'England',
//     // ...,
//     '+1': 'USA',
// };
//
// for (let prop in codes) {
//     console.log(+prop);
// }

// let user = {
//     name: 'John',
// };
// let admin = user;
// admin.name = 'Pete';
// console.log("-> userName:", user.name);

// let a = {};
// let b = {};
// console.log(a < 5);

// const user = {
//     name: 'John',
// };
// user.age = 25;
//
// let clone = {};
// for (let prop in user) {
//     clone[prop] = user[prop]; // clone[key] = user[key];
// }
// clone.name = 'Pete';
//
// let assigned = {};
// Object.assign(assigned, clone);
// assigned.name = 'Andrew';
//
// console.log(assigned);
//
// let cloned = Object.assign({}, user);
// console.log(cloned);

// let arr = [1, {a: 1, b:2}];
// let user = {
//     name: 'John',
//     sizes: {
//         height: 182,
//         width: 50,
//     },
// };

// clone with ... (spread operator)
// let clonedUser = { ...user };
// clonedUser.sizes.height = 192;

// deep clone with for
// let book = {
//     title: 'Book name',
//     author: 'Author',
//     nPages: 0,
//     price: 0,
//     size: {
//         height: 100,
//         width: 50,
//     },
// };

// let lib = cloneDeepObj({}, book);
// book.size.height = 0;
// console.log(book.size.height, lib.size.height);

// function cloneDeepObj(dest, obj) {
//     for (let key in obj) {
//         if (typeof obj[key] == "object") {
//             dest[key] = cloneDeepObj({}, obj[key]);
//         } else {
//             dest[key] = obj[key];
//         }
//     }
//     return dest;
// }

// deep clone with JSON
// let newBook = JSON.parse(JSON.stringify(book));
// console.log(book, newBook);

// clone with a constructor function
// function Book(title, author, price) {
//     // if (new.target == undefined) // if you need to call without a 'new'
//     //     return new Book(title, author);
//
//     this.title = title;
//     this.author = author;
//     this.price = price;
// }
// let book = new Book('Lord of the Rings', 'Tolkien', 10);
// console.log(book);

// let car = new function () {
//     this.model = 'lexus';
//     this.go = function () {
//         console.log('The car goes');
//     };
// };
// console.log(car);

// deep clone with the LODASH
// let deepCloned = _.cloneDeep(user);
// console.log(user[1] === deepCloned[1]);

// garbage collector
// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
//
//     return {
//         father: man,
//         mother: woman
//     }
// }
//
// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// });
//
// delete family.father;
// delete family.mother.husband;

// Symbols
// let user = {
//     name: 'Dmytro',
// };
// let id = Symbol('identifier');
// let idAgain = Symbol.for('id');
// user[id] = 1;

// let symb1 = Symbol.for('Name');
// let symb2 = Symbol.for('id');
//
// console.log(Symbol.keyFor(symb1));
// console.log(Symbol.keyFor(symb2));

// let symbol1 = Symbol('mySymbol');
// let symbol2 = Symbol('mySymbol');
//
// let symbol3 = Symbol.for('mySymbol');
// let symbol4 = Symbol.for('mySymbol');
//
// console.log(symbol1 === symbol2);
// console.log(symbol3 === symbol4);
//
// let symbolName = Symbol.keyFor(symbol3);
// console.log(symbolName);
//
// let person = {
//     name: 'John',
//     age: 30,
//     // [Symbol.for('password')] : 'John30',
//     [Symbol('password')] : 'John30',
// };
// // console.log(person.password);
// // console.log(person[Symbol.for('password')]);
// console.log(Object.getOwnPropertySymbols(person)); // !! we get an ARRAY with object properties !!
// console.log(person);

// ===== //
// this //
// === //
// let user = {
//     name: 'John',
//     age: 30,
// };
//
// // ex.1
// user.sayHi = function () {
//     console.log('Hello! ex.1');
// };
// user.sayHi();
//
// // ex.2
// function sayHi() {
//     console.log(`Hello, my name is ${user.name}! ex.2`);
// }
// sayHi();
//
// ex.3 // the best
// user = {
//     sayHi: function () {
//         console.log("Hello! ex.3");
//     }
// };
// user.sayHi();

// let user = {
//     name: 'John',
//     age: 30,
//     sayHi() {
//         console.log(this.name);
//     },
// };
//
// user.sayHi();

// let user = {
//     name: 'John',
// };
//
// let admin = {
//     name: 'admin',
// };
//
// function sayHi() {
//     console.log(this.name);
// }
//
// user.fn = sayHi;
// admin.fn = sayHi;
//
// user.fn();
// admin.fn();
// admin['f']();

// let user = {
//     name: 'John',
//     hi() {
//         console.log(this.name);
//     },
//     bye() {
//         console.log('ByeBye!');
//     },
// };
// user.hi();
// user.bye();
// (user.name === 'John' ? user.hi : user.bye)(); // => undefined

// let user = {
//     first_name: 'John',
//     sayHi() {
//         let arrow = () => console.log(this.first_name);
//         arrow();
//     },
// };
// user.sayHi();

// let user = {
//     name: 'John',
//     go: function () {
//         console.log(this.name);
//     },
// };
// (user.go)();

// let obj, method;
//
// obj = {
//     go: function() { console.log(this); }
// };
//
// obj.go();               // (1) [object Object]
//
// (obj.go)();             // (2) [object Object]
//
// (method = obj.go)();    // (3) undefined
//
// (obj.go || obj.stop)(); // (4) undefined

// function makeUser() {
//     return {
//         name: 'John',
//         ref: this,
//     };
// };
//
// let user = makeUser();
//
// console.log(user.ref.name);
// => Uncaught TypeError: Cannot read property 'name' of undefined

// function makeUser() {
//     return {
//         name: 'John',
//         ref() {
//             return this;
//         }
//     };
// }
//
// let user = makeUser();
//
// console.log( user.ref().name );

// let calculator = {
//     read(first_value, second_value) {
//         this.value1 = first_value;
//         this.value2 = second_value;
//     },
//     sum() {
//         return this.value1 + this.value2;
//     },
//     mul() {
//         return this.value1 * this.value2;
//     },
// };
//
// calculator.read(5, 3);
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step--;
//     },
//     showStep() {
//         console.log(this.step);
//     },
// };
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

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
//
// ladder.up().up().down().showStep();

// // Symbol.toPrimitive
// let user = {
//     name: 'John',
//     money: 1000,
//
//     [Symbol.toPrimitive](hint) {
//         alert(`hint: ${hint}`);
//         return hint == 'string' ? `{name: '${this.name}'}` : this.money;
//     }
// };
// alert(user);
// alert(+user);
// alert(user + 500);

// // toString / valueOf
// let user = {
//     name: 'John',
//     money: 1000,
//
//     toString() {
//         return `{name: "${this.name}"}`
//     },
//     valueOf() {
//         return this.money;
//     },
// };
// alert(user);
// alert(+user);
// alert(user + 500);

// let obj = {
//     toString() {
//         return "2";
//     },
// };
// alert(obj * 2); // -> 4
// alert(obj + 2); // -> 22

// function multiply(multiplier, ...theArgs) {
//     return theArgs.map(x => multiplier * x);
// }
//
// let arr = multiply(2, 1, 2, 3);
// console.log(arr); // [2, 4, 6]

// let arr = [1, 2, 3];
//
// function displayNums(a, b, c) {
//     console.log(`${a}, ${b}, ${c}`);
//     console.log(a, b, c);
// }
// displayNums(...arr);

// let display = (...args) => {
//     let res = '';
//     for (let val of args) {
//         res += val + " ";
//     }
//     console.log(res);
// };
// display();
// display(1, 2);

// function display(str, ...args){
//     console.log(str);
//
//     for(let index in args){
//         console.log(args[index]);
//     }
// }
// display("My Nums:", -2, -3, 4, 2, 5); //My Nums: -2 -3 4 2 5
// display("Strings:", 'str1', 'str2', 'str3');//Strings: str1 str2 str3

// function sum(a, b) {
//     return a + b;
// }
//
// function print(a, b, func) {
//     let res = func(a, b);
//     console.log(`Result: ${res}`);
// }
// print(5, 5, sum);

// function getInfo() {
//     return ['Tom', '25'];
// }
// const [name, age] = getInfo();
// console.log(`${name}: ${age}`);
//
// function getInfo2() {
//     return {name2: 'Derek', age2: 29,};
// }
// const {name2, age2} = getInfo2();
// console.log(`${name2}: ${age2}`);

// let age = 18;
//
// let confirmUser = age >= 18 ?
//     () => console.log('вход разрешен') :
//     () => console.log('вход запрещен');
//
// confirmUser(age);//вход разрешен

// var func = function minus (a) {
//     if (a > 10) {
//         minus(--a);
//         console.log('-1');
//     }
// };
// func(12);

// let obj = {
//     name: 'Some object',
//     display: function () {
//         // console.log(this.name);
//         console.log(this);
//     },
//     // print: () => {console.log(this.name)},
//     print: () => {console.log(this)},
// };
// obj.display();
// obj.print();

const person = {
    name: 'Dmytro',
    age: 30,
    isProgrammer: true,
    languages: ['ua', 'ru', 'en'],
    'complex key': 'Complex value',
    ['key_' + (1 + 3)]: 'Computed key',
    greet() {
        console.log('greet from person');
    },
};

console.log(person.name);
const ageKey = 'age';
console.log(person[ageKey]);
console.log(person['complex key']);
console.log(person);
person.greet();

delete person['key_4'];
console.log(person);
