// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4],
// ]);
// console.log(prices);
// console.log(prices.orange);

// let map = new Map([
//     ['banana', 1],
//     ['orange', 2],
//     ['meat', 4],
// ]);
// console.log(map);
// let obj = Object.fromEntries(map.entries());
// console.log(obj);

// let map = new Map();
//
// map.set('1', 'str1');
// map.set(true, 'bool1');
// console.log(map.get('1'));
// console.log(map.has(1));
// console.log(map.has('1'));
// console.log(map.size);
// map.delete(true);
// console.log(map.size);
// map.clear();
// console.log(map.size);

// let john = {
//   name: 'John',
// };
//
// let visitsCountObj = {};
//
// visitsCountObj[john] = 123;
//
// console.log(visitsCountObj[john]);
// console.log(visitsCountObj['[object Object]']);
// console.log(visitsCountObj);
// visitsCountObj['[object Object]'] = 321;
// console.log(visitsCountObj['[object Object]']);
// visitsCountObj[john] = 999;
// console.log(visitsCountObj['[object Object]']);

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomato', 350],
//     ['onion', 50],
// ]);
// console.log(recipeMap.keys());
// console.log(recipeMap.values());
// console.log(recipeMap.entries());
// console.log(recipeMap);
// for (const recipeMapElement of recipeMap) {
//   console.log(recipeMapElement);
// }
// let i = 0;
// recipeMap.forEach((value, key, map) => {
//   console.log(`${++i}) ${key}: ${value}`);
// });

// // From Map to Object
// let map = new Map([
//     ['1', 'str1'],
//     [1, 'num1'],
//     [true, 'bool1'],
// ]);
//
// let obj = Object.fromEntries(map.entries());
// console.log(obj);

// // From Object to Map
// let obj = {
//   name: 'John',
//   age: 30,
// };
// let map = new Map(Object.entries(obj));
// console.log(map);

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);
// console.log(prices);

// let arr1 = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4, 5, 6,];
// let one = new Set(arr1);
// console.log(one);
// let arr2 = [...one];
// console.log(arr2);

// let usersOnline = new Set();
//
// let john = { name: 'John', };
// let pete = { name: 'Pete', };
// let mary = { name: 'Mary', };
//
// usersOnline.add(john);
// usersOnline.add(pete);
// usersOnline.add(mary);
// usersOnline.add(john);
// usersOnline.add(mary);
//
// console.log(usersOnline.size);
//
// for (const user of usersOnline) {
//   console.log(user.name);
// }

// let set = new Set(['orange', 'apple', 'banana',]);
//
// // for (const fruit of set) console.log(fruit);
//
// // set.forEach((value, valueAgain, set) => {
// //   console.log(value);
// // });
//
// // console.log(set.values());
// // console.log(set.keys());
// // console.log(set.entries());
// console.log(set[0]);

// // 1
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// function unique(arr) {
//   return [...(new Set(arr))];
// }
// console.log(unique(values));

// 2
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(anagrams) {
//   let map = new Map();
//
//   anagrams.map(word => {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   });
//
//
//   return Array.from(map.values());
// }
//
// console.log(aClean(arr));

// // 3
// let map = new Map();
// map.set('name', 'John');
//
// let keys = map.keys();
// console.log(keys);
// keys = [...keys];
// keys.push('more');
// console.log(keys);

// function unique(arr) {
//   return new Set(arr);
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// console.log( unique(values) );

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// function aClean(anagrams) {
//   let map = new Map();
//
//   anagrams.forEach(word => {
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word)
//   });
//
//   return [...map.values()];
// }
//
// console.log(aClean(arr));

// // WeakMap
//
// let john = { name: 'John', };
// let arr = [john,];
// john = null;
// console.log(john);
// console.log(arr[0]);

// let weakMap = new WeakMap();
// let obj = {key1: 'value1',};
//
// weakMap.set(obj, 'ok');
// weakMap.set('test', 'Whoops');

// let obj = {key1: 'value1',};

// let map = new Map();
// console.log(map);
// map.set(obj, 'ok');
// console.log(map);
// obj = null;
// console.log(obj);
// console.log(map.keys());

// let weakMap = new WeakMap();
// weakMap.set(obj, 'obj1');
// console.log(weakMap);
// obj = null;
// console.log(weakMap)
// console.log(obj);
// console.log(weakMap.has(obj));
// console.log(weakMap.get(obj));
// weakMap.set({}, 'obj2');
// console.log(weakMap);

// // Counting visits
// // part 1
// // let visitsCountMap = new Map();
// let visitsCountMap = new WeakMap();
//
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//
//   visitsCountMap.set(user, count++);
// }
//
// // part 2
// let john = {name: 'John',};
// countUser(john);
// countUser(john);
// countUser(john);
//
// // john = null;
//
// console.log(visitsCountMap);

// Caching
// v.1 using Map
// let cache = new Map();
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* code */ obj;
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
//
// let obj = {
//   key1: 'value1',
// };
// let result1 = process(obj);
// let result2 = process(obj);
// obj = null;
// console.log(cache.size);
//
// // v.2 using WeakMap - the Best Way for caching
// let cache = new WeakMap();
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* code */ obj;
//     cache.set(obj, result);
//   }
//   return cache.get(obj);
// }
//
// let obj = {key1: 'value1',};
// let result1 = process(obj);
// let result2 = process(obj);
// obj = null;

// let visitedSet = new WeakSet();
//
// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };
//
// visitedSet.add(john);
// visitedSet.add(pete);
// visitedSet.add(john);
//
// console.log(visitedSet.has(john), 'yes'); // John was visit a site? // true
// console.log(visitedSet.has(mary), 'no'); // Mary was visit a site? // false
//
// john = null;

// // 1
// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"},
// ];
//
// let readMessages = new WeakSet();
//
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
//
// readMessages.add(messages[0]);
//
// console.log(`Read message 0: ${readMessages.has(messages[0])}`);

// // 2
// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"},
// ];
//
// let readMap = new WeakMap();
//
// readMap.set(messages[0], new Date(2017, 1, 1));
// console.log(readMap.get(messages[0]));

// const myMap = new Map();
//
// const keyObj = {},
//     keyFunc = function () {},
//     keyString = 'a string';
//
// myMap.set(keyString, 'value of keyString');
// myMap.set(keyObj, 'value of keyObj');
// myMap.set(keyFunc, 'value of keyFunc');
//
// console.log(myMap.size);
//
// console.log(myMap.get(keyString));
// console.log(myMap.get(keyObj));
// console.log(myMap.get(keyFunc));
//
// console.log(myMap.get('a string'));
// console.log(myMap.get({})); // undefined
// console.log(myMap.get(function () {})); // undefined
//
// myMap.set(NaN, 'Not a Number');
// console.log(myMap.get(NaN));
//
// const otherNaN = Number('foo');
// console.log(myMap.get(otherNaN));
//
// for (const el of myMap.entries()) {
//   console.log(el);
// }
// for (const el of myMap) {
//   console.log(el);
// }
//
// let index = 0;
// myMap.forEach((val, key) => console.log(`${index++}) ${key}: ${val}`));

// const kvArray = [
//     ['key1', 'value1',],
//     ['key2', 'value2',],
// ];
// console.log(kvArray);
//
// const myMap = new Map(kvArray);
// console.log(myMap);
// console.log(Array.from(myMap));
// console.log(Array.from(myMap.keys()));
// console.log([...myMap]);

// const original = new Map([
//     [1, 'one'],
// ]);
//
// const clone = new Map(original);
//
// console.log(clone.set(1, 'first'));
// console.log(clone.get(1));
// console.log(clone.size);

// const first = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three'],
// ]);
//
// const second = new Map([
//   [1, 'uno'],
//   [2, 'dos']
// ]);
//
// const merged = new Map([...first, ...second, [1, 'ein']]);
// console.log(merged);
//
// console.log(merged.get(1));
// console.log(merged.get(2));
// console.log(merged.get(3));

// let mySet = new Set();
//
// mySet.add(1);
// mySet.add(5);
// mySet.add(5);
// console.log(mySet);
// mySet.add('some text');
// console.log(mySet);
// let obj = { a: 1, b: 2, };
// mySet.add(obj);
// console.log(mySet);
// mySet.add({ a: 1, b: 2, });
// console.log(mySet);
// console.log(mySet.has(Math.sqrt(25)));
// mySet.add(document.body);
// console.log(mySet);
// console.log(mySet.has(document.querySelector('body')));

// let mySet2 = new Set([1, 2, 3, 4,]);
// console.log([...mySet2]);

// function isSuperset(set, subset) {
//   for (const el of subset) {
//     if (!set.has(el)) return false;
//   }
//
//   return true;
// }
//
// function union(setA, setB) {
//   let _union = new Set(setA);
//   for (const el of setB) {
//     _union.add(el);
//   }
//   return _union;
// }
//
// function intersection(setA, setB) {
//   let _intersection = new Set();
//   for (const el of setB) {
//     if (setA.has(el)) _intersection.add(el);
//   }
//   return _intersection;
// }
//
// function difference(setA, setB) {
//   let _difference = new Set(setA);
//   for (const el of setB) {
//     _difference.delete(el);
//   }
//   return _difference;
// }
//
// let setA = new Set([1, 2, 3, 4,]),
//     setB = new Set([2, 3,]),
//     setC = new Set([3, 4, 5, 6,]);
//
// console.log(isSuperset(setA, setB));
// console.log(union(setA, setC));
// console.log(intersection(setA, setC));
// console.log(difference(setA, setC));

// let myArr = ['val1', 'val2', 'val3',];
// let mySet = new Set(myArr);
//
// console.log(mySet.has('val1'));
// console.log([...mySet]);

// let text = 'India';
// let mySet = new Set(text);
//
// console.log([...mySet]);

// const wm1 = new WeakMap(),
//     wm2 = new WeakMap(),
//     wm3 = new WeakMap();
//
// const obj1 = {},
//     obj2 = function () {},
//     obj3 = window,
//     obj4 = [1, 2, 3,];
//
// wm1.set(obj1, 37);
// wm1.set(obj2, 'qwerty');
// wm2.set(obj1, obj2);
// wm2.set(obj3, undefined);
// wm2.set(wm1, wm2);
//
// console.log(wm1.get(obj2));
// console.log(wm2.get(obj2));
// console.log(wm2.get(obj3));
//
// console.log(wm1.has(obj2));
// console.log(wm2.has(obj2));
// console.log(wm2.has(obj3));

// class ClearableWeakMap {
//   constructor(init) {
//     this._wm = new WeakMap(init);
//   }
//   clear() {
//     this._wm = new WeakMap();
//   }
//   delete(k) {
//     return this._wm.delete(k);
//   }
//   get(k) {
//     return this._wm.get(k);
//   }
//   has(k) {
//     return this._wm.has(k);
//   }
//   set(k, v) {
//     this._wm.set(k, v);
//     return this;
//   }
// }

// let ws = new WeakSet();
// let obj = {};
// let foo = {};
//
// console.log(ws);
//
// ws.add(window);
// ws.add(obj);
//
// console.log(ws);

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];
//
// let readMessages = new WeakSet();
//
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
//
// console.log(readMessages);
//
// readMessages.add(messages[0]);
// console.log(`Read message 0: ${readMessages.has(messages[0])}`);
// messages.shift();
// console.log(messages);
//
// let isRead = Symbol('isRead');
// messages[0][isRead] = true;
// console.log(messages);

// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" }
// ];
//
// let readMap = new WeakMap();
//
// readMap.set(messages[0], new Date(2021, 1, 1));
//
// console.log(readMap.get(messages[0]));
