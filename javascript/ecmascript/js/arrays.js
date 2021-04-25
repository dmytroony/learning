// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes',];
// const people = [
//     {name: 'Dmytro', budget: 4200,},
//     {name: 'Vasyl', budget: 3500,},
//     {name: 'Oleksandr', budget: 1700,},
// ];
// const fib = [1, 1, 2, 3, 5, 8, 13];

// console.log(fib);

// cars.push('Porsche');
// cars.unshift('Reno');
// console.log(cars);
//
// const firstCar = cars.shift();
// const lastCar = cars.pop();
//
// console.log(firstCar, lastCar);
// console.log(cars);
// console.log(cars.reverse());
//
// const text = 'Hello, we study JS';
// const reverseText = text.split('').reverse().join('');
// console.log(reverseText);

// const index = cars.indexOf('BMW');
// console.log(index, cars[index]);

// let foundPerson;
// for (const person of people) {
//     console.log(person);
//     if (person.budget === 3500) {
//         foundPerson = [person];
//     }
// }
// console.log(foundPerson);
//
// // const index = people.findIndex(function (person){
// //     return person.budget === 3500;
// // });
// // const person = people.find(function (person){
// //     return person.budget === 3500;
// // });
// const person = people.find(person => person.budget === 3500);
// // console.log(index, people[index]);
// console.log(person);

// console.log(cars.includes('Mazda'));

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase();
// })
// console.log(upperCaseCars);
// console.log(cars);
//
// const pow2 = num => num ** 2;
// const sqrt = num => Math.sqrt(num);
//
// // const pow2fib = fib.map(num => num ** 2);
// const pow2fib = fib.map(pow2).map(Math.sqrt);
// console.log(pow2fib);

// const pow2 = num => num ** 2;
// const pow2Fib = fib.map(pow2);
// const filteredNumbers = pow2Fib.filter(num => num > 20);
// console.log(pow2Fib);
// console.log(filteredNumbers);

// const people = [
//   {name: 'Dmytro', budget: 4200,},
//   {name: 'Vasyl', budget: 3500,},
//   {name: 'Oleksandr', budget: 1700,},
// ];
//
// const allBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//       acc += person.budget;
//       return acc;
//     }, 0);
// console.log(allBudget);

// const cars = ['Mazda', 'Ford', 'BMW', 'Mercedes',];
// const people = [
//   {name: 'Dmytro', budget: 4200,},
//   {name: 'Vasyl', budget: 3500,},
//   {name: 'Oleksandr', budget: 1700,},
// ];
// const fib = [1, 1, 2, 3, 5, 8, 13,];
//
// // console.log(cars);
// // cars.push('Reno');
// // console.log(cars);
// // cars.unshift('Volga');
// // console.log(cars);
//
// // const text = 'Hello, we love JS';
// // const reversedText = text.split('').reverse().join('');
// //
// // console.log(reversedText);
//
// // // console.log(cars.indexOf('BMW'));
// //
// // // const index = people.findIndex(function (person) {
// // //   return person.budget === 3500;
// // // });
// // //
// // // console.log(index);
// //
// // let findPerson;
// //
// // // for(const person of people) {
// // //   // console.log(person);
// // //
// // //   if (person.budget === 3500) {
// // //     findPerson = person;
// // //   }
// // // }
// //
// // // console.log(findPerson);
// //
// // const person = people.find(person => person.budget === 3500)
// // console.log(person);
//
// // const upperCaseCars = cars.map(car => car.toUpperCase());
// // console.log(upperCaseCars);
// // console.log(cars);
//
// // console.log(fib);
// // const pow2fib = fib.map(num => num ** 2);
// // console.log(pow2fib);
//
// // console.log(fib);
// //
// // const pow2 = num => num ** 2;
// // const pow3 = num => num ** 3;
// // const sqrt = num => Math.sqrt(num);
// //
// // const pow2fib = fib.map(pow2);
// // const pow3fib = fib.map(pow3);
// // const sqrtFib = fib.map(sqrt)
// //
// // console.log(pow2fib);
// // // console.log(pow3fib);
// // // console.log(sqrtFib);
// //
// // const filteredPow2fib= pow2fib.filter(num => num > 20);
// // console.log(filteredPow2fib)
//
// const summaryBudget = people
//     .filter(person => person.budget > 2000)
//     .reduce((acc, person) => {
//       acc += person.budget;
//       return acc;
//     }, 0);
//
// console.log(summaryBudget);

// let arr = ['Apple', 'Orange', 'Plum', {a: 1,},];
// arr[5] = 'Pineapple';
// console.log(arr.length);
// console.log(arr[3].a = 2);
// console.log(arr[3].b = 3);
// console.log(arr[3]);
// console.log(arr[4]); // undefined
// arr[6] = function () { console.log('hello') };
// arr[6]();

// let arr = ['Apple', 'Orange', 'Plum',];
// console.log(arr);
// arr.push('end');
// console.log(arr);
// arr.unshift('start');
// console.log(arr);

// let arr = ['Apple', 'Orange', 'Plum',];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let key of arr) {
//   console.log(key);
// }
// for (let key in arr) {
//   console.log(`${key}: ${arr[key]}`);
// }
// console.log('0' in arr);
// 
// arr.length = 15;
// console.log(arr);
// arr.length = 2;
// console.log(arr);
// arr.length = 3;
// console.log(arr);
// console.log(arr[3]);
// arr.length = 0;
// console.log(arr);
// arr.push('hello');
// console.log(arr);

// let arr1 = [];
// // console.log(arr1);
// let arr2 = new Array;
// // console.log(arr2);
// let arr3 = new Array();
// // console.log(arr3);
// let arr4 = new Array(4);

// console.log(arr4);
// console.log(arr4.length);
// console.log(arr4.toString());

// console.log([1, 2]);
// alert([1, 2]);

// let fruits = ['Apples', 'Pear', 'Orange',];
// let shoppingCart = fruits;
// shoppingCart.push('Banana');
// console.log(fruits.length);

// let styles = ['Jazz', 'Blues',];
// styles.push('Rock-n-Roll');
// let middle = Math.floor((styles.length -1) / 2);
// styles[middle] = 'Classic';
// console.log(styles);
// let first = styles.shift();
// console.log(first);
// styles.unshift('Rap', 'Reggie');
// console.log(styles);

// let arr = ['a', 'b',];
// arr.push(function () {
//   console.log(this);
// });
// arr[2]();

// function sumInput() {
//   let numbers = [];
//   let num;
//
//   do {
//     num = parseInt(prompt('enter a number'));
//
//     if (typeof num === 'number') {
//       numbers.push(num);
//     }
//
//   } while (num);
//
//   numbers.pop();
//
//   let sum = 0;
//   for (let key of numbers) {
//     sum += key;
//   }
//   console.log(sum);
// }
//
// sumInput();

// function sumInput() {
//   let numbers = [];
//
//   while (true) {
//     let value = prompt('Enter a number', 0);
//
//     if (value === '' || value === null || !isFinite(value)) break;
//
//     numbers.push(+value);
//   }
//
//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//
//   return sum;
// }
//
// console.log(sumInput());

// function getMaxSubSum(arr) {
//   // let res = [];
//   // let sum = 0;
//   //
//   // for (let i = 0; i <= arr.length; i++) {
//   //   if (arr[i] > 0 && (arr[i] - arr[i - 1]) === 1) {
//   //     res.push(arr[i]);
//   //   }
//   // }
//   //
//   // for (let el of res) {
//   //   sum += el;
//   // }
//   //
//   // console.log(`res: ${res} = ${sum}`);
//
//   // let maxSum = 0;
//   //
//   // for (let i = 0; i < arr.length; i++) {
//   //   let sumFixedStart = 0;
//   //
//   //   for (let j = i; j < arr.length; j++) {
//   //     sumFixedStart += arr[j];
//   //     maxSum = Math.max(maxSum, sumFixedStart);
//   //   }
//   // }
//
//   let maxSum = 0;
//   let partialSum = 0;
//
//   for (let item of arr) {
//     partialSum += item;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   }
//
//   console.log(maxSum);
// }
//
// getMaxSubSum([1, -2, 3, 4, 5, -9, 6]);
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 1, 3, -9, 12]);
// getMaxSubSum([-2, -1, 0, 1, 2, 3, 4]);

// let arr = [];
// arr.key = 25;
// console.log(arr);
// arr.push('item1')
// console.log(arr);
// for (const arrKey in arr) {
//   console.log(arrKey)
// }

// let arr = ['a', {b: 1}, ['c', 2]];
//
// for (let el in arr) {
//   console.log(el, arr[el]);
// }
//
// for (let el of arr) {
//   console.log(el);
// }
//
// for (let i = 0; i < arr.length; i++) {
//   console.log(i, arr[i]);
// }

// let matrix = [
//     [1, 2, 3,],
//     [4, 5, 6,],
//     [7, 8, 9,],
// ];
//
// console.log(matrix[1][1]);
// console.log(matrix[2][2]);

// let arr = [1, 2, 3,];
//
// alert(arr);
// console.log(String(arr) === '1,2,3');

// let styles = ['Jazz', 'Blues',];
// styles.push('Rock-n-Roll');
// console.log(styles);
//
// styles[Math.floor((styles.length - 1) / 2)] = 'Classic';
// console.log(styles);
//
// console.log(styles.shift());
// console.log(styles);
//
// styles.unshift('Rap', 'Reggy');
// console.log(styles);

// Check for a number
// function sumInput() {
//   let arr = [];
//   let sum = 0;
//   let num;
//
//   do {
//     num = prompt('Enter a num');
//
//     if (num === '' || num === null || !isFinite(num)) break;
//     arr.push(+num);
//   } while (num);
//
//   console.log(arr);
//
//   for (let numElement of arr) {
//     sum += numElement;
//   }
//   console.log(sum);
// }
//
// sumInput();

// function getMaxSubSum(arr) {
//   let maxSum = 0, partialSum = 0;
//
//   for (let el of arr) {
//     partialSum += el;
//     maxSum = Math.max(maxSum, partialSum);
//     if (partialSum < 0) partialSum = 0;
//   }
//   console.log(arr, `: ${maxSum}`);
// }
// getMaxSubSum([-1, 2, 3, -9]); // 5
// getMaxSubSum([2, -1, 2, 3, -9]); // 6 ?!?!?! WHY!?!?
// console.log('test');
// getMaxSubSum([-1, 1, 2, 3, -9]); // 6
// getMaxSubSum([2, -1, 1, 2, 3, -9]); // 7 ?!?!?! WHY!?!?

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }
//
//   console.log(arr, maxSum);
// }
// getMaxSubSum([-1, 2, 3, -9]); // 5
// getMaxSubSum([2, -1, 2, 3, -9]); // 5
// getMaxSubSum([15, 2, -5, 3, 4, 11]); // 5

// function getMaxSubSum(arr) {
//   let res = []
//
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) continue;
//     res.push(arr[i]);
//   }
//
//   console.log(res);
// }
// getMaxSubSum([-1, 2, 3, 4, -9, 9]);
// getMaxSubSum([-5, 2, 7, 8, -2]);

// var arr = [-1, 2, 3, -9, 11];
//
// function getMaxSubSum(arr){
//   var sum = 0;
//   var max = 0;
//   //  получаем все возможные суммы.
//   for(var i=0;i<arr.length;i++){
//     for(var p=i;p < arr.length;p++){
//       sum += arr[p];
//       // Проверяем максимальную сумму в данный проход цикла.
//       if(sum < 0){
//         continue;
//       }else if(sum > max){
//         max = sum;
//       }
//     }
//     sum = 0;
//   }
//   return (max > 0)? max: -1;
// }
//
// console.log(getMaxSubSum( [-1, 2, 3, -9] ));
// console.log(getMaxSubSum( [2, -1, 2, 3, -9] ));
// console.log(getMaxSubSum( [-1, 2, 3, -9, 11] ));
// console.log(getMaxSubSum( [-2, -1, 1, 2]));
// console.log(getMaxSubSum( [100, -9, 2, -3, 5] ));
// console.log(getMaxSubSum( [1, 2, 3] ));
// console.log(getMaxSubSum( [-1, -2, -3] ));

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//
//   }
//   console.log(arr, maxSum);
// }
// getMaxSubSum([-1, 2, 3, -9]);
// // equal
// // getMaxSubSum([ [-1,], [-1, 2,], [-1, 2, 3,], [-1, 2, 3, -9,] ]);
//
// getMaxSubSum([2, -1, 2, 3, -9]); // 2, 1, 3, -6 // 2, 3, 6, 0
// getMaxSubSum([-1, 2, 3, -9, 11]); // -1, 1, 4, -5, 6 // 0, 4, -1, 5,

// let fruits = ['Apple', 'Banana',];
// let styles = ['Jazz', 'Blues',];
// console.log(fruits);
// console.log(styles);
// let last = fruits[fruits.length - 1];
// console.log(last);
// fruits.forEach( (item, index, arr) => {
//   console.log(item, index);
// });
// let removed = fruits.splice(1, 1, 'Plum');
// console.log(fruits);
// console.log(removed);
// let fruits2 = fruits;
// let fruitsShallowCopy = fruits.slice();
// console.log(fruitsShallowCopy);
// console.log(fruits === fruits2);
// console.log(fruits === shallowCopy);
// let fruitsNStyles1 = new Array(fruits, styles);
// let fruitsNStyles2 = new Array(...fruits, ...styles);
// let fruitsNStyles3 = [fruits, styles];
// let fruitsNStyles4 = [...fruits, ...styles];
// console.log(fruitsNStyles1);
// console.log(fruitsNStyles2);
// console.log(fruitsNStyles3);
// console.log(fruitsNStyles4);

// let fruits = ['Apple', 'Banana',];
// // let fruits2 = fruits.splice(0);
// let fruits3 = fruits.slice();
// // console.log(fruits2);
// console.log(fruits)
// console.log(fruits3);
// console.log(fruits === fruits3)

// let arr = [1, 2, 3, 4, 5, 6, 7,];
// console.log('arr:', arr);
// console.log('slice(1, 3):', arr.slice(1, 3));
// console.log('splice(2, 2)', arr.splice(2, 2, 8, 9));
// console.log('arr', arr);

// let arr = ['a', 'b', 'c', 'd'];
// console.log(arr.indexOf('c'));
// console.log(arr.includes('c'));
// console.log(Object.keys(arr));

// let myRe = /d(b+)(d)/i;
// let myArray = myRe.exec('cdbBdbsbz');
// console.log(myArray);

// console.log(Array.prototype);
// console.log(Array.prototype.length);

// let arr = ['a', 'b', 'c', 'd'];
// arr.fill('w');
// let arr2 = arr.copyWithin(0, 0, undefined);
// console.log(arr);
// console.log(arr2);
// let arrR = arr.reverse();
// console.log(arr);
// console.log(arrR);

// // Copying array methods
// let arr = ['a', 'b', 'c', 'd'];
// let arr2 = Array.from(arr);
// let arr3 = Array.of(...arr);
// // let arr4 = arr.copyWithin(); // === arr
// let arr5 = arr.entries();
// let arr6 = arr.concat();
// // let arr7 = Object.assign(arr); // === arr
// let arr8 = [];
// for (let el of arr) {
//   arr8.push(el);
// }
// let arr9 = [];
// for (const el in arr) {
//   arr9.push(arr[el]);
// }
// let arr10 = [];
// for (let i = 0; i < arr.length; i++) {
//   arr10.push(arr[i]);
// }
// let arr11 = [...arr];
//
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// // console.log(arr4);
// console.log(arr5.next().value);
// console.log(arr6);
// // console.log(arr7);
// console.log(arr8);
// console.log(arr9);
// console.log(arr10);
// console.log(arr11);
// console.log(arr === arr11);

// console.log(globalThis);
// console.log(this);
// console.log(window);
// console.log(Window);
//
// function canMakeHTTPRequest() {
//   return typeof globalThis.XMLHttpRequest === 'function';
// }
// console.log(canMakeHTTPRequest());

// let str = 'string all';
// str.split(' ');
// console.log(typeof str);

// let numbers = [4, 2, 5, 1, 3,];
// console.log(numbers);
// // console.log(numbers.sort());
// numbers.sort(function (a, b) {
//   // return a - b;
//   return b - a;
// });
// console.log(numbers);

// // sorting objects using arr.sort()
// let items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic' },
//   { name: 'Zeros', value: 37 }
// ];
// console.log(items);
// // sorting by name
// items.sort(function (a, b) {
//   if (a.name > b.name) {
//     return 1;
//   }
//   if (a.name < b.name) {
//     return -1;
//   }
//   // a === b
//   return 0;
// });
// // sorting by value
// items.sort(function (a, b) {
//   if (a.value > b.value) {
//     return 1;
//   }
//   if (a.value < b.value) {
//     return -1;
//   }
//   // a === b
//   return 0;
// });
// console.log(items);

// let stringArray = ['Tuna', 'Shark', 'Dolphin',];
// let numericStringArray = ['80', '9', '700', '200',];
// let numberArray = [80, 9, 700, 200,];
// let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200,];
//
// function compareNumbers(a, b) {
//   return a - b;
// }
//
// console.log(stringArray.toString());
// console.log('stringArray.join():', stringArray.join());
// console.log('stringArray.sort():', stringArray.sort());

// console.log('numberArray.join():', numberArray.join());
// console.log('numberArray.sort():', numberArray.sort());
// console.log('numberArray.sort(compareNumbers a - b):', numberArray.sort(compareNumbers));
// console.log(
//     'numberArray.sort(arrow compareNumbers b - a):',
//     numberArray.sort((a, b) => b - a)
// );
//
// console.log('numericStringArray.join():', numericStringArray.join());
// console.log('numericStringArray.sort():', numericStringArray.sort());
// console.log('numericStringArray.sort(compareNumbers a - b):', numericStringArray.sort(compareNumbers));
// console.log(
//     'numericStringArray.sort(arrow compareNumbers b - a):',
//     numericStringArray.sort((a, b) => b - a)
// );

// console.log('mixedNumericArray:', mixedNumericArray.join());
// console.log('mixedNumericArray without compareFn:', mixedNumericArray.sort());
// console.log('mixedNumericArray with compareFn:', mixedNumericArray.sort(compareNumbers));

// let str = 'hello';
// console.log(str.split('').reverse().join(' ').toUpperCase());

// let items = ['Ще', 'не', 'вмерла', 'України',];
// // items.sort();
// items.sort((a, b) => a.localeCompare(b));
// console.log(items);

// // Sorting using .map()
// let list = ['Delta', 'alpha', 'CHARLEY', 'bravo',];
// let mapped = list.map(function(el, i) {
//   return { index: i, value: el.toLowerCase() };
// });
// console.log(mapped);
// mapped.sort(function (a, b) {
//   if (a.value > b.value) return 1;
//   if (a.value < b.value) return -1;
//
//   return 0;
// });
// let result = mapped.map(function (el) {
//   return list[el.index];
// });
// console.log(result);

// let mapped = list.map((value) => value + value);
// console.log(mapped);

// let arr1 = [1, 2,];
// let arr2 = arr1.concat();
// console.log(arr1);
// console.log(arr2);
// console.log(arr1 === arr2);

// Get an array from a pseudo-array of function // v.1 using .call()
// function list() {
//   // return Array.prototype.slice.call(arguments, 0);
//   return [].slice.call(arguments, 0);
// }
// let listArgs = list(1, 2, 3);
// console.log(listArgs);

// Get an array from a pseudo-array of function // v.1 using .call.bind()
// let unboundSlice = Array.prototype.slice;
// let slice = Function.prototype.call.bind(unboundSlice);
// function list() {
//   return slice(arguments, 0);
// }
// let listArgs = list(1, 2, 3);
// console.log(listArgs);

// function fn(...args) {
//   console.log(arguments);
//   console.log(args);
// }
// fn(1, 2, 3);

// let nums = [1, 2, 3, 4, 5,];
// console.log(nums.toString());
// console.log(nums.join());
// console.log(nums);

// let num = 1337;
// let date = new Date();
// let myArr = [num, date, 'foo',];
// let str = myArr.toLocaleString();
// console.log(str);

// let arr = ['a', 'b', 'c', undefined,];
// arr.forEach((el, i) => console.log(i, el));
// // arr.forEach(function (el, i, rra) {
// //   console.log(i, el, rra, this)
// // });
// console.table(arr);

// function Counter() {
//   this.sum = 0;
//   this.count = 0;
// }
// Counter.prototype.add = function(array) {
//   array.forEach((entry) => {
//     this.sum += entry;
//     ++this.count;
//   }, this)
// }
// const obj = new Counter();
// obj.add([2, 5, 9,]);
// console.log(obj.count);
// console.log(obj.sum);

// let THRESHOLD = 15;
// let v = [5, 2, 16, 4, 3, 18, 20,];
// let res;
//
// // let sortedV = v.sort((a, b) => a - b);
// // console.log(sortedV);
//
// res = v.every(function (element, index, array) {
//   console.log('element:', element);
//   // if (element >= THRESHOLD) return false;
//   // return true;
//   return element < THRESHOLD;
// });
// console.log('res:', res);
//
// console.log(4 + 5 + '6');


// let obj1 = { a: 1, b: { c: 2, }, };
// console.log(obj1);
// function objCopy(obj1) {
//   let copy = Object.create(Object.getPrototypeOf(obj1));
//   let propNames = Object.getOwnPropertyNames(obj1);
//
//   propNames.forEach(function(name) {
//     let desc = Object.getOwnPropertyDescriptor(obj1, name);
//     Object.defineProperty(copy, name, desc);
//   });
//
//   return copy;
// }
// let obj2 = objCopy(obj1);
//
// console.log(obj2);
// console.log(obj1.b.c === obj2.b.c);

// let words = ['one', 'two', 'three', 'four',];
// words.forEach(word => {
//   console.log(word);
//   if (word === 'two') words.shift();
// });

// // recursive deep .flat()
// function flatten(arr) {
//   const result = [];
//
//   arr.forEach(i => {
//     if (Array.isArray(i)) result.push(...flatten(i));
//     else result.push(i);
//   });
//
//   return result;
// }
// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9,],];
// // console.log(flatten(nested));
//
// // surface .flat()
// console.log(nested.flat());

// const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9,],];
// let eNested = nested.entries();
// console.log(eNested.next().value);
// console.log(eNested.next().value);
// console.log(eNested.next().value);
// console.log(eNested.next().value[1][2]);

// function isPrime(el) {
//   let start = 2;
//
//   while (start <= Math.sqrt(el)) {
//     if (el % start++ < 1) return false;
//   }
//
//   return el > 1;
// }
// console.log([4, 6, 8, 12,].findIndex(isPrime));
// console.log([4, 6, 7, 12,].findIndex(isPrime));

// console.log([4, 6, 7, 12,].indexOf(7, 1));

// let arr = [1, 2, 4, 5,];
// console.log(arr.includes(8));

// function isPrime(el) {
//   let start = 2;
//
//   while (start <= Math.sqrt(el)) {
//     if (el % start++ < 1) return false;
//   }
//
//   return el > 1;
// }
// console.log([4, 6, 8, 12,].find(isPrime));
// console.log([4, 5, 8, 12,].find(isPrime));

// function isBigEnough(el) {
//   return el >= 10;
// }
// console.log([12, 5, 8, 130, 44].every(isBigEnough));
// console.log([12, 54, 18, 130, 44].every(isBigEnough));
// console.log([].every(isBigEnough)); // vacuously true

// const arr = [1, 2, 3, 4, 5,];
// const even = el => el %2 === 0;
// console.log(arr.some(even));

// let isBiggerThan10 = el => el > 10;
// console.log([2, 5, 8, 1, 4,].some(isBiggerThan10));
// console.log([12, 5, 8, 1, 4,].some(isBiggerThan10));

// // .includes() imitation
// const fruits = ['apple', 'banana', 'mango', 'guava',];
// function checkAvailability(arr, val) {
//   return arr.some(function (arrVal) {
//     return val === arrVal;
//   });
// }
// console.log(checkAvailability(fruits, 'kela'));
// console.log(checkAvailability(fruits, 'banana'));

// const fruits = ['apple', 'banana', 'mango', 'guava'];
// function checkAvailability(arr, val) {
//   return arr.some(arrVal => val === arrVal);
// }
// console.log(checkAvailability(fruits, 'kela'));
// console.log(checkAvailability(fruits, 'banana'));

// const TRUTHY_VALUES = [true, 'true', 1,];
//
// function getBoolean(value) {
//   'use strict';
//
//   if (typeof value === 'string') {
//     value = value.toLowerCase().trim();
//     // console.log(value);
//   }
//
//   return TRUTHY_VALUES.some(function (t) {
//     return t === value;
//   });
// }
// console.log(getBoolean(false));
// console.log(getBoolean('false'));
// console.log(getBoolean(1));
// console.log(getBoolean('true'));

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(words);
// console.log(result);

// function isBigEnough(value) {
//   return value >= 10;
// }
// let filtered = [12, 5, 8, 350, 7, 130, 44,].filter(isBigEnough);
// console.log(filtered);

// let arr = [4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17,];
// function isPrime(num) {
//   if (num <= 1) return false;
//   else if (num === 2) return true;
//   else {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
// }
// let filtered = arr.filter(isPrime);
// console.log(filtered);

// let arr = [
//   {id: 15,},
//   {id: -1,},
//   {id: 0,},
//   {id: 3,},
//   {id: 12.3,},
//   {},
//   {id: null,},
//   {id: NaN,},
//   {id: 'undefined',},
// ];
// let invalidEntries = 0;
//
// function isNumber(obj) {
//   return obj !== undefined && typeof obj === 'number' && !isNaN(obj);
// }
//
// function filterById(item) {
//   if (isNumber(item.id)) return true;
//   invalidEntries++;
//
//   return false;
// }
//
// let arrById = arr.filter(filterById);
// console.log('filtered JSON', arrById);
// console.log('Errors:', invalidEntries);

// let fruits = ['apple', 'banana', 'grapes', 'mango', 'orange',];
//
// function filterItems(query) {
//   return fruits.filter(function (el) {
//     return el.toLowerCase().indexOf(query.toLocaleString()) > -1;
//   });
// }
//
// console.log(filterItems('ap'));
// console.log(filterItems('an'));

// const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange',];
//
// const filterItems = query => {
//   return fruits.filter(el =>
//       el.toLowerCase().indexOf(query.toLowerCase()) > -1
//   );
// };
//
// console.log(filterItems('ap'));
// console.log(filterItems('an'));

// let words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present',];
// console.log(words);
//
// const modifiedWords = words
//     .filter((word, index, arr) => {
//       arr[index + 1] += ' extra';
//
//       return word.length < 6;
//     });
//
// console.log(words);
// console.log(modifiedWords);
//
// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present',];
// const appendedWords = words
//     .filter((word, index, arr) => {
//       arr.push('new');
//
//       return word.length < 6;
//     });
// console.log(appendedWords);
//
// words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present',];
//
// const deleteWords = words
//     .filter((word, index, arr) => {
//       arr.pop();
//
//       return word.length < 6;
//     });
//
// console.log(deleteWords);

// const array1 = ['a', 'b', 'c',];
// const iterator = array1.keys();
// console.log(iterator);
// for (let key of iterator) {
//   console.log(key);
// }

// let arr = [1, 2, 3, 4, 5,];
// let newArr = arr.map(el => el * 2);
// console.log('base:', arr);
// console.log('base x2:', newArr);
// let roots = newArr.map(Math.sqrt);
// console.log('x2 sqrt:', roots);

// let map = Array.prototype.map;
// let a = map.call('Hello World', function (x) {
//   return x.charCodeAt(0);
// });
// console.log(a);

// let elems = document.querySelectorAll('select option:checked');
// let values = [].map.call(elems, function (obj) {
//   return obj.value;
// });

// let str = '12345';
// [].map.call(str, function (x) {
//   return x;
// }).reverse().join();

// const arr1 = [1, 2, 3, 4,];
//
// const reducer = (acc, currentValue) => acc + currentValue;
// console.log(arr1.reduce(reducer));

// const arr = [1, 2, 3, 4, 5,];
// let reduced = arr.reduce((previousValue, currentValue, index, array) => {
//   return previousValue + currentValue;
// });
// console.log(reduced);

// console.log([0, 1, 2, 3, 4,].reduce((acc, currVal, i, arr) => {
//   return acc + currVal;
// }, 10));

// let total = [0, 1, 2, 3,].reduce((a, b) => {
//   return a + b;
// }, 1);
// console.log(total);

// let initVal = 5;
//
// let sum = [
//   {x: 1,}, {x: 2,}, {x: 3,}
// ].reduce((acc, currVal) => {
//   return acc + currVal.x;
// }, initVal);
// console.log(sum);

// let flattened = [
//   [0, 1,],
//   [2, 3,],
//   [4, 5,],
// ];
// let flReduced = flattened
//     .reduce((a, b) => a.concat(b));
// console.log(flReduced);

// let friends = [
//   {name: "Anna", books: ["Bible", "Harry Potter"], age: 21,},
//   {name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26,},
//   {name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18,},
// ];
//
// let allBooks = friends.reduce((prev, curr) => {
//   return [...prev, ...curr.books];
// }, ['Alphabet']);
// console.log(allBooks);

// let flattened = [
//     [0, 1,],
//     [2, 3,],
//     [4, 5,],
// ];
// console.log(flattened.reduceRight((a, b) => {
//   return a.concat(b);
// }, []));

// let arr = [1, 2, 3, 4, 5,];
// let arrVals = arr.values();
// console.log(arrVals);
// for (const arrVal of arrVals) {
//   console.log(arrVal);
// }

// console.log(Array.prototype[@@iterator]())
// let arr = ['w', 'y', 'k', 'o', 'p'];
// let eArr = arr[Symbol.iterator]();
// console.log(eArr);
// console.log(eArr.next().value);
// console.log(eArr.next().value);
// console.log(eArr.next().value);
// console.log(eArr.next().value);
// console.log(eArr.next().value);
// for (const string of eArr) {
//   console.log(string);
// }
// for (const string of arr) {
//   console.log(string);
// }

// function isLetter(character) {
//   return character >= 'a' && character <= 'z';
// }
// if (Array.prototype.every.call(str, isLetter)) {
//   console.log(`String ${str} includes only latin letters!`);
// }

// function isLetter(character) {
//   return character >= 'a' && character <= 'z';
// }
// if (Array.every(str, isLetter)) {
//   console.log(`String ${str} includes only latin letters!`);
// }

// (function f() {
//   'use strict';
//
//   let i,
//       methods = [
//         'join', 'reverse', 'sort', 'push', 'pop', 'shift', 'unshift',
//         'splice', 'concat', 'slice', 'indexOf', 'lastIndexOf',
//         'forEach', 'map', 'reduce', 'reduceRight', 'filter',
//         'some', 'every'
//       ],
//       methodCount = methods.length,
//       assignArrayGeneric = function (methodName) {
//         if (!Array[methodName]) {
//           let method = Array.prototype[methodName];
//
//           if (typeof method === 'function') {
//             Array[methodName] = function () {
//               return method.call.apply(method, arguments);
//             };
//           }
//         }
//       }
//
//   for (let i = 0; i < methodCount; i++) {
//     assignArrayGeneric(methods[i]);
//   }
// }());

// let msgArr = [];
// msgArr[0] = 'Hello';
// msgArr[99] = 'World';
// if (msgArr.length === 100) console.log('Length equal 100.');
// console.log(msgArr);

// Chess board
// let board = [
//   ['R','N','B','Q','K','B','N','R'],
//   ['P','P','P','P','P','P','P','P'],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   ['p','p','p','p','p','p','p','p'],
//   ['r','n','b','q','k','b','n','r'],
// ];
// // console.log(board.join(`\n\n\n`));
// console.log(board.join('\n'+ '\n\n'));
// board[4][4] = board[6][4];
// console.log(board.join('\n'+ '\n\n'));

// function fn(a, b, c) {
//   // for (const el of arguments) {
//   //   console.log(el);
//   // }
//   // let args = Array.prototype.slice.call(arguments);
//   // let args = [].slice.call(arguments);
//   // console.log(args);
//   // es2015
//   // const args = Array.from(arguments);
//   const args = [...arguments];
//   console.log(args);
//   console.log(arguments);
// }
// fn('a', 'b', 'c');

// // 'use strict';
// let f = function test() {
//   console.log(test);
//   console.log(arguments.callee);
// }
// f();

// function myConcat(separator) {
//   let args = Array.prototype.slice.call(arguments, 1);
//   let joined = args.join(separator);
//   console.log(joined);
// }
// myConcat(', ', 'red', 'orange', 'blue');
// myConcat("; ", "elephant", "giraffe", "lion", "cheetah");
// myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");

// function list(type) {
//   let result = '<' + type + 'l><li>';
//   let args = Array.prototype.slice.call(arguments, 1);
//   console.log(args);
//   result += args.join('</li><li>');
//   result += '</li></' + type + 'l>';
//
//   return result;
// }
// let listHTML = list('u', 'One', 'Two', 'Three');
// console.log(listHTML);

// function foo(...args) {
//   return arguments;
// }
// console.log(foo('a', 'b', 'c'));

// function bar(a = 1) {
//   arguments[0] = 100;
//   return a;
// }
// console.log(bar(10));

// function bar(a) {
//   arguments[0] = 100;
//   return a;
// }
// console.log(bar(10));

// function fn() {
//   return [1, 2];
// }
// console.log(fn());

// function fn1(a, b) {
//   arguments[0] = 90;
//   arguments[1] = 99;
//
//   console.log(a + ' ' + b);
// }
// fn1(1, 2);
//
// function fn2(a, b) {
//   a = 9;
//   b = 99;
//
//   console.log(arguments[0] + ' ' + arguments[1]);
// }
// fn2(3, 4);
//
// function fn3(a, b, c = 9) {
//   arguments[0] = 99;
//   arguments[1] = 98;
//
//   console.log(a + ' ' + b);
// }
// fn3(3, 4);

// function fn(a, b, c) {
//   let args = [...arguments];
//   args.forEach((el) => console.log(el));
// }
// fn('A', 'B', 'C');

// function func(a, b, c=9) {
//   arguments[0] = 99;
//   arguments[1] = 98;
//   arguments[1] = 97;
//   console.log(a + " " + b + ' ' + c);
// }
// func(3, 4, 5);

// function sum(...args) {
//   return args.reduce((prev, curr) => prev + curr);
// }
// console.log(sum(1, 2, 3, 4, 5, 6));


// function fn(a, b, ...args) {
//   console.log(a, b, args);
// }
// fn(1, 2, 3, 4, 5);

// function fn(a, b) {
//   let normalArr1 = Array.prototype.slice.call(arguments);
//   let normalArr2 = [].slice.call(arguments);
//   let normalArr3 = Array.from(arguments);
//   let normalArr4 = [...arguments];
//   console.log(normalArr1);
//   console.log(normalArr2);
//   console.log(normalArr3);
//   console.log(normalArr4);
// }
// fn(1, 2);

// function fn(...args) {
//   let normalArr = args;
//   console.log(normalArr);
//   let first = normalArr.shift();
//   console.log(first);
//   console.log(normalArr);
// }
// fn(1, 2, 3, 4);

// function fn(...[a, b, c]) {
//   return a + b + c;
// }
// console.log(fn(1));
// console.log(fn(1, 2, 3));
// console.log(fn(1, 2, 3, 4));

// function multiply(multiplier, ...args) {
//   return args.map(el => multiplier * el);
// }
// let arr = multiply(2, 1, 2, 3);
// console.log(arr);

// destructuring assignment
// let a, b, rest;
//
// [a, b] = [1, 2];
// console.log(a, b);
//
// [a, b, ...rest] = [1, 2, 3, 4, 5,];
// console.log(a, b, rest);
//
// ({a, b} = {a: 'a', b: 'b'});
// console.log(a, b);
//
// ({a, b, ...rest} = {a: 'a', b: 'b', c: 'c', d: 'd',});
// console.log(a, b, rest.c, rest.d);

// let foo = ['one', 'two', 'three',];
// //without destructuring
// // let one = foo[0];
// // let two = foo[1];
// // let three = foo[2];
//
// // destructuring
// let [one, two, three] = foo;
// console.log(two);

// let a = 1, b = 3;
// console.log(a, b);
//
// [a, b] = [b, a];
// console.log(a, b);

// function fn() {
//   return [1, 2];
// }
// console.log(fn());


// function fn() {
//   return [1, 2];
// }
// let a, b;
// [a, b] = fn();
// console.log(a, b);

// function fn() {
//   return [1, 2, 3,];
// }
// let [a, , c] = fn();
// console.log(a, c);

// let url = "https://developer.mozilla.org/en-US/Web/JavaScript";
// let parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
// let [, protocol, fullhost, fullpath] = parsedURL;
// console.log(protocol, fullhost);
// console.log(fullpath);

// let o = {
//   p: 42,
//   q: true,
// };
// let { p, q } = o;
// console.log(p, q);
// let { p: foo, q: bar } = o;
// console.log(foo, bar);

// const { Loader, main } = require('toolkit/loader');

// let metadata = {
//   title: 'Scratchpad',
//   translations: [
//     {
//       locale: 'de',
//       location_tags: [],
//       last_edit: '2014-04-14T08:43:37',
//       url: '/de/docs/Tools/Scratchpad',
//       title: 'Javascript-Umgebung',
//     },
//   ],
//   url: '/en-US/docs/Tools/Scratchpad',
// };
// let {title: englishTitle, translations: [{title: localeTitle, last_edit: lastEdit}]} = metadata;
// console.log(englishTitle);
// console.log(localeTitle);
// console.log(lastEdit);

// let people = [
//   {
//     name: "Mike Smith",
//     family: {
//       mother: "Jane Smith",
//       father: "Harry Smith",
//       sister: "Samantha Smith"
//     },
//     age: 35
//   },
//   {
//     name: "Tom Jones",
//     family: {
//       mother: "Norah Jones",
//       father: "Richard Jones",
//       brother: "Howard Jones"
//     },
//     age: 25
//   }
// ];
// // for (let {name: n, family: {father: f}} of people) {
// //   console.log(`Name: ${n}, Father: ${f}`);
// // }
// for (let {name: n, age: a} of people) {
//   console.log(`${n}: ${a}`);
// }

// function userId({ id }) {
//   return id;
// }
// function whois({ displayName, fullName: { firstName: name } }) {
//   console.log(`${displayName} is ${name}`);
// }
// let user = {
//   id: 42,
//   displayName: 'jDoe',
//   fullName: {
//     firstName: 'John',
//     lastName: 'Doe',
//   },
// };
// console.log(`userID: ${userId(user)}`);
// whois(user);

// let key = 'z';
// let { [key]: foo } = { z: 'bar' };
// console.log(foo);

// function sum(x, y, z) {
//   return x + y + z;
// }
// const numbers = [1, 2, 3,];
// console.log(sum(...numbers));

// function fn(v, w, x, y, z) {
//   let argums = [...arguments];
//   console.log(argums);
// }
// let args = [0, 1,];
// fn(-1, ...args, 2, ...[3]);

// let dateFields = [1970, 0, 1,];
// let d = new Date(...dateFields);
// console.log(d);

// function applyAndNew(constructor, args) {
//   function partial() {
//     return constructor.apply(this, args);
//   };
//   if (typeof constructor.prototype === 'object') {
//     partial.prototype = Object.create(constructor.prototype);
//   }
//
//   return partial;
// }
// function myConstructor() {
//   console.log(`arguments.length: ${arguments.length}`);
//   console.log(arguments);
//
//   this.prop1 = 'val1';
//   this.prop2 = 'val2';
// };
// let myArguments = ['hi', 'how', 'are', 'you', 'mr', 'null',];
// let myConstructorWithArguments = applyAndNew(myConstructor, myArguments);
// console.log(new myConstructorWithArguments);

// let parts = ['shoulders', 'knees',];
// let lyrics = ['head', ...parts, 'and', 'toes',];
// console.log(lyrics);

// let arr1 = [1, 2, 3,];
// let arr2 = [...arr1];
// arr2.push(4);
// console.log(arr1);
// console.log(arr2);

// const a = [ [1,], [2,], [3,], ];
// const b = [...a];
// console.log(b);
// b.shift().shift();
// console.log(b);

// let obj1 = { foo: 'bar', x: 42, };
// let obj2 = { foo: 'baz', y: 13, };
// let cloneObj1 = {...obj1};
// console.log(cloneObj1);
// let mergedObjs = {...obj1, ...obj2};
// console.log(mergedObjs);

// let obj1 = { foo: 'bar', x: 42, };
// let obj2 = { foo: 'baz', y: 13, };
// const merge = (...objects) => ({...objects});
// let mergedObj1 = merge(obj1, obj2);
// let mergedObj2 = merge({}, obj1, obj2);
// console.log(mergedObj1);
// console.log(mergedObj2);

// let obj = {'key1': 'value1',};
// let arr = [...obj];
// console.log(arr); // TypeError

// let arr = ['a', 'b', 'c',];
// let obj = {...arr};
// console.log(obj);

// How many arguments can send into a function
// let args = [];
//
// while(true){
//   try{
//     (() => {})(...args);
//     args.push(0);
//   }catch(e){
//     console.log(e.message);
//     console.log(`Number of arguments: ${args.length}`);
//     break;
//   }
// }

// let projects = ['Learn Spanish', 'Learn Go', 'Code more',];
// let newProjects = projects.map((project, index) => {
//   return { [index]: project };
// });
// console.log(newProjects);

// let data = [
//   {name: "Raphael", gender: "male"},
//   {name: "Tom", gender: "male"},
//   {name: "Jerry", gender: "male"},
//   {name: "Dorry", gender: "female"},
//   {name: "Suzie", gender: "female"},
//   {name: "Dianna", gender: "female"},
//   {name: "Prem", gender: "male"},
// ];
//
// let genderWise = data.reduce((acc, item, index) => {
//   acc[item.gender].push(item);
//   return acc;
// }, { male: [], female: [] }
// );
// console.log(genderWise);

// function map(arr, fn) {
//   return arr.reduce((acc, item) => [...acc, fn(item)], []);
// }
//
// function filter(arr, fn) {
//   return arr.reduce(function(acc, item, index) {
//     if (fn(item, index)) acc.push(item);
//
//     return acc;
//   }, []);
// }
//
// function forEach(arr, fn) {
//   arr.reduce((acc, item, index) => {
//     item = fn(item, index);
//   }, []);
// }

// let num = [1, 2, 3, 4, 5,];
// console.log(num);
// delete num[2];
// console.log(num);

// const allActivities = [
//   {title: 'My activity', coordinates: [50.123, 3.291],},
//   {title: 'Another activity', coordinates: [1.238, 4.292],},
// ];
// const allCoordinates = allActivities.map(activity => activity.coordinates);
// console.log(allCoordinates);
// console.log(...allCoordinates);

// const numbers = [1, 2, 3, 4, 5, 6,];
// const oddNumbers = numbers
//     .filter(n => n % 2 !== 0);
// console.log(oddNumbers);

// const participants = [
//   { id: 'a3f47', username: 'john', },
//   { id: 'fek28', username: 'mary', },
//   { id: 'n3j44', username: 'sam', },
// ];
// function removeParticipant(participants, id) {
//   return participants.filter(participant => participant.id !== id);
// }
// console.log(participants);
// console.log(removeParticipant(participants, 'a3f47'));

// const numbers = [37, 12, 28, 4, 9];
// const total = numbers.reduce((total, n) => total + n);
// console.log(total);

// const map = (arr, fn) => {
//   return arr.reduce((mappedArr, element) => {
//     return [...mappedArr, fn(element)];
//   }, []);
// };
// console.log(map([1, 2, 3, 4,], n => n + 1));

// const filter = (arr, fn) => {
//   return arr.reduce((filteredArr, element) => {
//     return fn(element) ? [...filteredArr] : [...filteredArr, element];
//   }, []);
// }

// // How to rest a deep array into one array
// function flatDeep(arr) {
//   return arr.reduce((flattenArray, element) => {
//     return Array.isArray(element) ? [...flattenArray, ...flatDeep(element)] : [...flattenArray, element];
//   }, []);
// }
// console.log(flatDeep([1, 2, 3, [4, [5, [6, 7],], 8,],]));

// const numbers = [1, 2, [3, 4, [5, [6, 7,],], [[[[8,],],],],],];
// console.log(numbers);
// // const numbersFlattenOnce = numbers.flat();
// // console.log(numbersFlattenOnce);
// // const numbersFlattenTwice = numbers.flat(2);
// // console.log(numbersFlattenTwice);
// const numbersFlattenInfinity = numbers.flat(Infinity);
// console.log(numbersFlattenInfinity);

// const sentences = [
//   'This is a sentence',
//   'This is another sentence',
//   "I can't find any original phrases",
// ];
//
// const allWords = sentences.flatMap(sentence => sentence.split(' '));
// // console.log(allWords);
//
// const wordsCount = allWords.reduce((count, word) => {
//   count[word] = count[word] ? count[word] + 1 : 1;
//
//   return count;
// }, {});
// console.log(wordsCount);

// const potentialParticipants = [
//   { id: 'k38i', name: 'john', age: 17, },
//   { id: 'baf3', name: 'mary', age: 13, },
//   { id: 'a111', name: 'gary', age: 24, },
//   { id: 'fx34', name: 'emma', age: 34, },
// ];
// const participantsFormatted = potentialParticipants
//     .filter(user => user.age > 18).map(user => user.name).join(', ');
// console.log(participantsFormatted);
// let arrFrom = Array.from(participantsFormatted);
// console.log(arrFrom);

// let str = 'Hello World';
// console.log(Array.from(str));
// console.log(str.split(''));

// const nodes = document.querySelectorAll('.todo');
// const todoItems = Array.from(nodes);
// console.log(todoItems);
//
// todoItems.forEach(item => {
//   item.addEventListener('click', function () {
//     console.log(`You clicked on ${item.innerHTML}`);
//   })
// });

// let nums = [2, 13, -2, 0, 8, 43,];
// let abNums = nums.sort((a, b) => a - b);
// console.log(abNums);
// // let baNums = nums.sort((a, b) => b - a);
// // console.log(baNums);

// function fakeUser() {
//   return {
//     id: 'fe38',
//     name: 'Thomas',
//   };
// }
// const posts = Array(3).fill(fakeUser());
// console.log(posts);

// let arr = [1, 2, 3,];
// console.log(arr);
// // let newArr = [];
// // newArr.push(...arr);
// // console.log(newArr);
// // arr.splice(1, 1);
// let first = arr.shift();
// console.log(arr);
// console.log(first);

// let arr1 = [1, 2, null, 3, undefined, 4, , 5, 'str',];
//
// let arr2 = [];
// for (let el of arr1) {
//   arr2.push(el * 2);
// }
// console.log(arr2); // [2, 4, 0, 6, NaN, 8, NaN, 10, NaN]
//
// let arr3 = [];
// arr1.forEach(el => {
//   arr3.push(el * 2)
// });
// console.log(arr3); // [2, 4, 0, 6, NaN, 8, 10, NaN]

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//
//   for (let i = 0; i < arr.length; i++) {
//     let sumFixedStart = 0;
//
//     for (let j = i; j < arr.length; j++) {
//       sumFixedStart += arr[j];
//       maxSum = Math.max(maxSum, sumFixedStart);
//     }
//   }
//
//   console.log(maxSum);
// }
//
// // найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
//
// getMaxSubSum([-1, 2, 3, -9]) // = 5
// // getMaxSubSum([2, -1, 2, 3, -9]) // = 6
// // getMaxSubSum([-1, 2, 3, -9, 11]) // = 11
// // getMaxSubSum([-2, -1, 1, 2]) // = 3
// // getMaxSubSum([100, -9, 2, -3, 5]) // = 100
// // getMaxSubSum([1, 2, 3]) // = 6

// CodeWars kata 1
// let list1 = [
//   {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript'},
//   {firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript'},
//   {firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML'},
//   {firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS'}
// ];
// let list2 = [
//   {firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML'},
//   {firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML'}
// ];
//
// function countDevelopers(list1) {
//   return list1.filter(el => el.language === 'JavaScript' && el.continent === 'Europe').length;
// }
// console.log(countDevelopers(list1));
// console.log(countDevelopers(list2));

// const arr = [1, 2, 3, 4,];
// const reducer = (acc, currVal) => acc + currVal;
// console.log(arr);
// console.log(arr.reduce(reducer));
// console.log(arr.reduce(reducer, 5));

// function nbYear(p0, percent, aug, p) {
//   return  [...arguments];
// }
// console.log(nbYear(1500, 5, 100, 5000)); // 15

// let total = [1, 2, 3, 4,];
// console.log(total.reduce((a, b) => a + b));

// let start = 0;
// let sum = [
//   {x: 1,}, {x: 2,}, {x: 3,},
// ].reduce(function (acc, currVal) {
//   return acc + currVal.x;
// }, start);
// console.log(sum);

// let start = 0;
// let sum = [
//   {x: 1,}, {x: 2,}, {x: 3,},
// ].reduce((acc, currVal) => acc + currVal, start);

// let flattened = [[0, 1], [2, 3], [4, 5]].flat();
// console.log(flattened);

// let flattened = [[0, 1], [2, 3], [4, 5]].reduce(function (a, b) {
//   return a.concat(b);
// });
// console.log(flattened);

// let friends = [
//   { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//   { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//   { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 }
// ];
//
// let allBooks = friends.reduce((prev, curr) => {
//   return [...prev, ...curr.books];
// }, ['Alphabet']);
// console.log(allBooks);

// const cb = (acc, currVal, i) => {
//   console.log('test');
// }
// const result = arr.reduce(cb, initialValue);

// const numbers = [1, 2, 3, 4, 5,];
// const total1 = numbers.reduce((acc, currVal) => acc + currVal, []);
// const total2 = numbers.reduce((acc, currVal) => acc + currVal);
// console.log(total1, typeof total1);
// console.log(total2, typeof total2);

// const str = 'hello';
// console.log([str]);
// console.log([...str]);

// const fruits = ['apple', 'apple', 'banana', 'banana', 'orange', 'pear', 'apple',];
//
// const tally = fruits.reduce((acc, fruit) => {
//   // if (acc[fruit]) acc[fruit] = acc[fruit] + 1;
//   // else acc[fruit] = 1;
//
//   acc[fruit] ? acc[fruit] = acc[fruit] + 1 : acc[fruit] = 1;
//
//   return acc;
// }, {});
// console.log(tally);

// function sumInput() {
//   let numbers = [];
//
//   while (true) {
//     let answer = prompt('Enter a num...', 0);
//
//     if (answer === '' || answer === null || !isFinite(answer)) break;
//
//     numbers.push(+answer);
//   }
//
//   return numbers.reduce((acc, val) => acc + val, 0);
// }
//
// console.log(sumInput());

// function getMaxSum(arr) {
//   let maxSum = 0,
//       partialSum = 0;
//
//   for (let el of arr) {
//     partialSum += el;
//     maxSum = Math.max(maxSum, partialSum);
//
//     if (partialSum < 0) partialSum = 0;
//   }
//
//   return maxSum;
// }
//
// console.log(getMaxSum([-1, 2, 3, -9,]));

// let isAnimal = true;
// const name = 'ehot';
// console.log({
//   age: 123,
//   ...isAnimal && { name }
// });
//
//
// Object.prototype.isObject = function (value) {
//   return (typeof value === 'object');
// }
//
// console.log(Array.isObject(0));

// const foo = {
//   ...{
//     id: ticket.id,
//     line,
//     margin,
//   },
//   ...multiline && {
//     bars: {
//       upper_bar: lines.up,
//       lower_bar: lines.low,
//     },
//   },
// }

// const buildAndObjectFromAQuery1 = query => {
//   const obj = {};
//
//   if (query.foo) obj.foo = query.foo;
//   if (query.bar) obj.bar = query.bar;
//
//   return obj;
// };
//
// const buildAnObjectFromAQuery2 = query => ({
//   ...query.foo && { foo: query.foo },
//   ...query.bar && { bar: query.bar },
// });

// let arr = [1, 2, 3, 4,];
// arr.forEach(el => console.log(el));

// let arr = [1, 0, false, 1, 'parrot',];
// console.log(arr.includes('parrot'));

// let users = [
//   {id: 1, name: "John"},
//   {id: 2, name: "Peter"},
//   {id: 3, name: "Maria"}
// ];
// let user = users.find(el => el.id === 1);
// console.log(user.name);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// let obj = {one: 1, two: 2,};
// Object.prototype.isObject = (val => typeof val === 'object');
// // let res = arr.reduce((sum, el) => sum + el, 0);
// // console.log(res);
//
// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));
// console.log(Object.isObject(obj));
// console.log(arr);
// arr.copyWithin(2, 3, 5);
// console.log(arr);

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   },
// };
//
// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30},
// ];
//
// let soldiers = users.filter(army.canJoin, army);
//
// console.log(soldiers, soldiers.length);
// soldiers.forEach(el => console.log(el));

// 1
// function camelize(str) {
//   let arr = str.split('');
// }
// // console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// // console.log(camelize("-webkit-transition"));

// 2
// let arr = [5, 3, 8, 1,];
// function filterRange(arr, a, b) {
//   return arr.filter(el => (el > a && el < b));
// }
// let filtered = filterRange(arr, 1, 9);
// console.log(filtered);

// 3
// let arr = [5, 3, 8, 1,];
// function filterRangeInPlace(arr, a, b) {
//  //
// }
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// 4
// let arr = [5, 2, 1, -10, 8,];
// arr.sort((a, b) => b - a);
// console.log(arr);

// 5
// let arr = ["HTML", "JavaScript", "CSS"];
// function copySorted(arr) {
//   return arr.slice().sort();
// }
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// 6
// function Calculator() {
//   this.methods = {
//     '-': (a, b) => a - b,
//     '+': (a, b) => a + b,
//   };
//
//   this.calculate = function (str) {
//     let splitted = str.split(' '),
//         a = +splitted[0],
//         b = +splitted[2],
//         operator = splitted[1];
//
//     if (!this.methods[operator] || isNaN(a) || isNaN(b)) return NaN;
//
//     return this.methods[operator](a, b);
//   }
//
//   this.addMethod = function(methodName, callbackFn) {
//     this.methods[methodName] = callbackFn;
//   }
// }
// let calc = new Calculator();
// console.log(calc.calculate('3 - 7')); // -4
// console.log(calc.calculate('3 + 7')); // 10
//
// let powerCalc = new Calculator;
// powerCalc.addMethod('*', (a, b) => a * b );
// powerCalc.addMethod('/', (a, b) => Number((a / b).toFixed(4)) );
// powerCalc.addMethod('**', (a, b) => a ** b );
// console.log(powerCalc.calculate('3 * 7'));
// console.log(powerCalc.calculate('3 / 7'));
// console.log(powerCalc.calculate('3 ** 7'));

// 7
// let john = { name: "John", age: 25 };
// let peter = { name: "Peter", age: 30 };
// let maria = { name: "Maria", age: 28 };
//
// let users = [
//   john,
//   peter,
//   maria,
// ];
//
// for (let user of users) {
//   console.log(user.name);
// }
//
// // let names = [];
// // users.forEach(user => names.push(user.name));
//
// let names = users.map(user => user.name);
//
// console.log(names);

// 8
// let john = {name: "John", surname: 'Doe', id: 1,};
// let peter = {name: "Peter", surname: 'Doer', id: 2,};
// let maria = {name: "Maria", surname: 'Does', id: 3,};
// let users = [john, peter, maria,];
//
// let usersMapped = users.map(user => ({
//       fullName: `${user.name} ${user.surname}`,
//       id: user.id,
//     })
// );
// console.log(usersMapped);
// console.log(usersMapped[0].id);
// console.log(usersMapped[0].fullName);

// 9
// let john = { name: "John", age: 25 };
// let peter = { name: "Peter", age: 30 };
// let maria = { name: "Maria", age: 28 };
// let arr = [john, peter, maria,];
//
// function sortByAge(users) {
//   return users.sort((a, b) => a.age - b.age);
// }
//
// console.log(sortByAge(arr));
// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// let arr = [1, 2, 3,];
//
// function shuffle(array) {
//   // return array.sort(() => Math.random() - 0.5);
//
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }
//
// console.log(shuffle(arr));
// console.log(shuffle(arr));
// console.log(shuffle(arr));

// 10
// let john = {name: "John", age: 25};
// let peter = {name: "Peter", age: 30};
// let maria = {name: "Maria", age: 28};
// let arr = [john, peter, maria,];
//
// function getAverageAge(users) {
//   // return Math.ceil(array.map(user => user.age).reduce((acc, age) => acc + age, 0) / array.length);
//   return Math.ceil(users.reduce((acc, user) => acc + user.age, 0) / users.length);
// }
// console.log(getAverageAge(arr));

// 11
// let strings = ["Lorem", "ipsum", "ipsum", "sit",
//   "sit", "consectetur", "elit", "elit", ":-0"
// ];
//
// function unique(arr) {
//   let result = [];
//
//   for (const el of arr) {
//     if (!result.includes(el)) result.push(el);
//   }
//
//   return result;
// }
//
// console.log(unique(strings));

// // 1
// function camelize(str) {
//   return str
//       .split('-')
//       .map((el, i) => i === 0 ? el : el[0].toUpperCase() + el.slice(1))
//       .join('');
// }
// console.log(camelize("list-style-image"));
//
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// // 2
// let arr = [5, 3, 8, 1, 2,];
//
// function filterRange(array, a, b) {
//   return array.filter(el => el > a && el < b);
// }
//
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered);

// // 3
// let arr = [5, 3, 8, 1];
// console.log(arr);
//
// function filterRangeInPlace(numbers, a, b) {
//
//   numbers.forEach((el, i) => {
//     if (el < a || el > b) {
//       arr.splice(i, 1);
//     }
//   });
//
// }
//
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// // 4
// let arr = [5, 2, 1, -10, 8,];
// console.log(arr.sort((a, b) => b - a));

// // 5
// let arr = ["HTML", "JavaScript", "CSS",];
//
// function copySorted(array) {
//   return [...array].sort();
// }
// let sorted = copySorted(arr);
//
// console.log(arr);
// console.log(sorted);

// // 6
// function Calculator() {
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//   };
//   this.calculate = function calculate(str) {
//     let splitT = str.split(' ');
//     let operator = splitT[1],
//         a = +splitT[0],
//         b = +splitT[2];
//
//     if (!this.methods[operator] || isNaN(a) || isNaN(b)) return NaN;
//
//     return this.methods[operator](a, b);
//   }
//
//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }
//
// let calc = new Calculator;
// console.log(calc.calculate('3 + 7'));
// console.log(calc.calculate('3 - 7'));
//
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// console.log(powerCalc.calculate('2 ** 3'));

// // 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map(user => user.name);
// console.log(names);

// // 8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));
// console.log(usersMapped);

// // 9
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// console.log(arr);
// function sortByAge(users) {
//   users.sort((a, b) => a.age - b.age);
// }
// sortByAge(arr);
//
// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// // 10
// let arr = [1, 2, 3,];
//
// function shuffle(numbers) {
//   // console.log(numbers.sort(() => Math.random() - .5)); // v.1
//
//   for (let i = numbers.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//
//     // let t = numbers[i];
//     // numbers[i] = numbers[j];
//     // numbers[j] = t;
//   }
//   console.log(numbers);
// }
//
// shuffle(arr);
// // shuffle(arr);
// // shuffle(arr);

// // 11
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
//
// function getAverageAge(users) {
//   return users
//       .map(user => user.age)
//       .reduce((acc, age) => acc + age / users.length, 0);
// }
//
// console.log(getAverageAge(arr));

// // 12
// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
// function unique(arr) {
//   let result = [];
//   arr.forEach((el, i, arr) => {
//     if (!result.includes(el)) result.push(el);
//   });
//   return result;
// }
//
// console.log(unique(strings));

// // Symbol.iterator
// let range = {
//   from: 1,
//   to: 5,
// };
// range[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,
//     next() {
//       if (this.current <= this.last) {
//         return {done: false, value: this.current++};
//       }
//       else return { done: true, };
//     }
//   };
// };
//
// for (const el of range) {
//   console.log(el);
// }

// let str = 'hello world';
// for (const strElement of str) {
//   console.log(strElement);
// }

// let str = 'Hello';
// let iterator = str[Symbol.iterator]();
//
// while (true) {
//   let result = iterator.next();
//
//   if (result.done) break;
//
//   console.log(result.value);
// }

// let arrayLike = {
//   0: 'Hello',
//   1: 'World',
//   length: 2,
// };
//
// let arr1 = Array.from(arrayLike);
// console.log(arr1);

// let str = 'hello';
// let arr1 = Array.from(str);
// console.log(arr1);
// let arr2 = [...str];
// console.log(arr2);

// let map = new Map();
// console.log(map);
// map.set('a', 1);
// console.log(map);
// map.set(1, 'num1');
// console.log(map);
// map.set(true, 'bool1');
// map.set("1", "str1");
// console.log(map);
// console.log(map.get(1));
// console.log(map.get("1"));
// console.log(map.get(true));
// console.log(map.size);
//
// for (const mapElement of map) {
//   console.log(mapElement);
// }

// let john = {
//   name: 'John',
// };
// let visitsCountMap = new Map();
//
// visitsCountMap.set(john, 23);
// console.log(visitsCountMap.get(john));

// let john = {
//   name: 'John',
// };
// let visitsCountObj = {};
// visitsCountObj[john] = 123;
// console.log(visitsCountObj[john]);
// console.log(visitsCountObj["[object Object]"]);
// console.log(visitsCountObj);

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomato', 340],
//     ['onion', 50],
// ]);
// // for (const vegetable of recipeMap.keys()) {
// //   console.log(vegetable);
// // }
// // for (const amount of recipeMap.values()) {
// //   console.log(amount);
// // }
// // for (const entry of recipeMap) { // equal to map.entries()
// //   console.log(entry);
// // }
//
// recipeMap.forEach((value, key, map) => {
//   console.log(`${key}: ${value}`);
// });

// let map = new Map([
//     ['1', 'str1',],
//     [1, 'num1',],
//     [true, 'bool1',],
// ]);
// console.log(map.get('1'));

// let obj = {
//   name: "John",
//   age: 30,
// };
//
// let map = new Map(Object.entries(obj));
// console.log(map);
// map.set('name', 'Peter');
// console.log(map, map.size);
// // map.clear();
// // console.log(map);
// map.set('1', 'str1')
//     .set(1, 'num1')
//     .set(true, 'bool1');
// console.log(map);
// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// let recipeMap = new Map([
//   ['cucumber', 500,],
//   ['tomato', 350,],
//   ['onion', 50,],
// ]);
// // for (const vegetable of recipeMap.entries()) {
// //   console.log(vegetable);
// // }
// let i = 1;
// recipeMap.forEach((value, key, map) => console.log(`${i++}) ${key}: ${value};`));

// let map = new Map([
//     ['1', 'str1',],
//     [1, 'num1',],
//     [true, 'bool1',],
// ]);
// console.log(map.get('1'));
