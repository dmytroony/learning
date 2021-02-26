// 'use strict';

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

// const person = {
//   name: 'Dmytro',
//   age: 30,
//   isProgrammer: true,
//   languages: ['ua', 'ru', 'en'],
//   'complex key': 'Complex value',
//   ['key_' + (1 + 3)]: 'Computed key',
//   greet() {
//     console.log('greet from person');
//   },
//   info() {
//     console.log(this);
//     console.log('Info about a person named:', this.name);
//   },
// };
// console.log(person);
// console.log(person.name);
// const ageKey = 'age';
// console.log(person[ageKey]);
// console.log(person['complex key']);
// console.log(person);
// person.greet();
//
// delete person['key_4'];
// console.log(person);

// const name = person.name;
// const age = person.age;
// const languages = person.languages;

// const {name, age, languages} = person;
// console.log(name, age, languages);

// for (let key in person) {
//     if (person.hasOwnProperty(key)) { // defense prototype
//         console.log('key: ' + key);
//         console.log('value: ' + person[key]);
//     }
// }
//
// const keys = Object.keys(person);
// console.log(keys);
//
// keys.forEach((key) => {
//     console.log('key: ' + key);
//     console.log('value: ' + person[key]);
// });

// // Context
// // person.info();
// const logger = {
//     keys() {
//         console.log('Object keys: ', Object.keys(this));
//     },
//     keysAndValues() {
//         // Object.keys(this).forEach(key =>{
//         //     console.log(`"${key}": ${this[key]}`);
//         // });
//         // const self = this;
//         Object.keys(this)
//             .forEach(function(key) {
//                 console.log(`"${key}": ${this[key]}`);
//             }.bind(this));
//     },
//     withParams(top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('----- Start -----');
//         }
//         Object.keys(this)
//             .forEach((key, index, array) => {
//                 console.log(`"${key}": ${this[key]}`);
//                 if (between && index !== array.length - 1) {
//                     console.log('---------------');
//                 }
//             });
//         if (bottom) {
//             console.log('----- End -----');
//         }
//     },
// };
// // const bound = logger.keys.bind(person);
// // bound();
// // logger.keys.call(person);
// // logger.keysAndValues.call({a: 1, c: 2,});
// // logger.keysAndValues.call(person);
// // logger.withParams.call(person, true, true, true);
// logger.withParams.apply(person, [true, true, true]);

// Map
// const obj = {
//   name: 'Dmytro',
//   age: 26,
//   job: 'Frontend',
// }
//
// const arrayArrays = [
//   ['name', 'Dmytro',],
//   ['age', 26,],
//   ['job', 'Frontend',],
// ]

// // object => array
// console.log(Object.entries(obj))
// // array => object
// console.log(Object.fromEntries(entries))

// const map = new Map(arrayArrays)
//
// // console.log(map)
// // console.log(map.get('job'))
//
// map.set('newKey', 'newValue')
//     .set(obj, 'objValue')
//     .set(NaN, 'Nan ??')
// console.log(map.entries())
// for (let entry of map.entries()) console.log(entry)
// for (let val of map.values()) console.log(val)
// for (let key of map.keys()) console.log(key)
// map.forEach((val, key) => console.log(val, key))

// // const newArray = [...map]
// const newArray = Array.from(map)
// // console.log(newArray)
// const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)

// const users = [
//   {name: 'Helen',},
//   {name: 'Alex',},
//   {name: 'Drew',},
// ]
//
// const visits = new Map()
//
// visits
//     .set(users[0], new Date())
//     .set(users[1], new Date(new Date().getTime() + 1000 * 60))
//     .set(users[1], new Date(new Date().getTime() + 5000 * 60))
//
// function lastVisit(user) {
//   return visits.get(user)
// }
//
// console.log(lastVisit(users[1]))

// // Set
// const setTed = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])
//
// setTed.add(10)
// // console.log(setTed)
//
// function uniqValues(array) {
//   // return [...new Set(array)]
//   return Array.from(new Set(array))
// }
//
// console.log(uniqValues([1, 1, 2, 2, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6]))

// // WeakMap
// // let objEct = {name: 'weakMap'}
// //
// // const mAp = new WeakMap([[objEct, 'objEct data']])
//
// const cache = new WeakMap()
//
// function cacheUser(user) {
//   if (!cache.has(user)) {
//     cache.set(user, Date.now())
//   }
//   return cache.get(user)
// }
//
// let alex = {name: 'Alex',}
// let viktor = {name: 'Viktor',}
//
// cacheUser(alex)
// cacheUser(viktor)
//
// console.log(cache.has(alex))
// console.log(cache.get(viktor))
//
// alex = null
//
// console.log(cache.has(alex))

// // WeakSet
// const users = [
//   {name: 'Alex',},
//   {name: 'Viktor',},
//   {name: 'Natalie',},
// ]
//
// const visits = new WeakSet()
//
// visits.add(users[0]).add(users[1])
//
// users.splice(1, 1)
//
// console.log(visits.has(users[0]))
// console.log(visits.has(users[1]))

// let out = document.querySelector('.out')
//
// let myFriend = {
//   "name": "Alex",
//   "legs": 2,
//   "friends": 2,
// }
//
// // console.log(myFriend["name"])
// console.log(myFriend.name)

// let menu = {
//   width: 400,
//   height: 200,
//   title: "Menu",
// }
//
// for (let key in menu) console.log(`${key}: ${menu[key]}`)

// let codes =  {
//   "5": "PL",
//   "12": "USA",
//   "73": "UA",
// }
//
// for (let prop in codes) {
//   prop = +prop
//   console.log(prop, typeof prop)
// }

// let user =  {
//   name: "Dmytro",
//   surname: "Onysko",
// }
//
// user.age = 25
//
// for (let prop in user) {
//   console.log(prop)
// }

// _______________________________________________________________________
// // Object.create getters, setters
// const person = Object.create(
//     {
//       calculateAge() {
//         console.log('Age: ', new Date().getFullYear() - this.birthYear)
//       }
//     },
//     {
//       name: {
//         value: 'Dmytro',
//         enumerable: true,
//         writable: true,
//         configurable: true,
//       },
//       birthYear: {
//         value: 1989,
//         enumerable: false, // default
//         writable: false, // default
//         configurable: false, // default
//       },
//       age: {
//         get() {
//           return new Date().getFullYear() - this.birthYear
//         },
//         set(value) {
//           console.log('Set age', value)
//         }
//       }
//     });
//
// // person.parents = 'Mother'
// //
// // console.log(person)
// //
// // person.name = 'Ivan'
// //
// // delete person.name
// //
// // for (let prop in person) {
// //   console.log('Prop', prop, person[prop])
// // }
// //
// // console.log(person)
//
// for (let prop in person) {
//   if (person.hasOwnProperty(prop)) console.log('Prop', prop, person[prop])
// }
//
// console.log(person.age)

const person = {
  firstName: "Abraham",
  lastName: "Lincoln",
  age: 212,
  isPresident: true,
  languages: ["en", "de", "uk"],
  // 'complex key': 'Complex Value',
  // ['key_' + (1 + 3)]: 'Computed Key',
  greet() {
    console.log(`greet from ${person}`);
  },
  info() {
    console.info("Info about:", this.firstName);
  }
};

// const {firstName, lastName, age: personAge} = person; // personAge - new var
// // const name = person.firstName;
//
// console.log(firstName, lastName, personAge);
//
// for (let key in person) {
//   if (person.hasOwnProperty(key)) console.log(`key: ${key}, value: ${person[key]}`);
// }
//
// const keys = Object.keys(person);
// console.log(keys);
// keys.forEach(key => console.log(`key: ${key}, value: ${person[key]}`));
//
// Object.keys(person).forEach(key => console.log(`key: ${key}, value: ${person[key]}`));

// person.info();

// const logger = {
//   keys(obj) {
//     console.log('Object Keys: ', Object.keys(obj));
//   }
// }

// const logger = {
//   keys() {
//     console.log('Object Keys: ', Object.keys(this));
//   },
//   keysAndValues() {
//     Object.keys(this).forEach(key => console.log(`"${key}": ${this[key]}`)).bind(this);
//   },
//   withParams(top = false, between = false, bottom = false) {
//     if (top) {
//       console.log('---------- Start ----------');
//     }
//     Object.keys(this).forEach((key, index, array) => {
//       console.log(`"${key}": ${this[key]}`);
//       if (between && index !== array.length -1) {
//         console.log('--------------------------');
//       }
//     });
//     if (bottom) {
//       console.log('---------- End ----------');
//     }
//   }
// }
//
// // logger.keys(person);
//
// // const bound = logger.keys.bind(logger);
//
// // const bound = logger.keys.bind(person);
// // bound();
//
// // logger.keys.call(person);
//
// // logger.keysAndValues.call(logger);
//
// logger.withParams.call(person, true, true, true)

// const menu = {
//   latte: 10,
//   cappuccino: 12,
//   mocha: 7,
//   espresso: 5
// };
//
// let drink = prompt("MENU:\nLatte\nCappuccino\nMocha\nEspresso\nEnter yor favorite drink.", "Cappuccino")
//     .toLowerCase();
//
// // let price;
// // if (drink === "latte") {
// //   price = menu.latte;
// // } else if (drink === "cappuccino") {
// //   price = menu.cappuccino;
// // } else if (drink === "mocha") {
// //   price = menu.mocha;
// // } else if (drink === "espresso") {
// //   price = menu.espresso;
// // }
//
// let price = menu[drink];
// console.log(`${drink} costs: ${price};`);

// let car = {
//   color: "red",
//   wheels: 4,
//   engine: {
//     cylinders: 4,
//     size: 2.2
//   },
//   color: "green"
// };
//
// let property = "color";
// console.log(car[property]);
//
// property = "wheels";
// console.log(car[property]);

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;

  console.log(i);
}
