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

// clone with ... (spead operator)
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

// type Symbol
// let user = {
//     name: 'Dmytro',
// };
// let id = Symbol('identificator');
// let idAgain = Symbol.for('id');
// user[id] = 1;

let symb1 = Symbol.for('Name');
let symb2 = Symbol.for('id');

console.log(Symbol.keyFor(symb1));
console.log(Symbol.keyFor(symb2));