// ## Challenge 1
// let greeting: string = "Hello, TypeScript!";
// console.log(greeting.toUpperCase());

// let age: number = 25;
// console.log(age + 5);

// let isAdult: boolean = age >= 18;
// console.log(isAdult);

// greeting = 10;
// age = "thirty";
// isAdult = 'yes';
//
// console.log(greeting, age, isAdult);


// UNIONS
// let tax: number | string = 10;
// console.log(tax);
// tax = '$10';
// console.log(tax);


// let requestStatus: "pending" | "success" | "error" = "pending";
// console.log(requestStatus);
// requestStatus = "error";
// console.log(requestStatus);


// let notSure: any = 4;
// console.log(notSure);
// notSure = "a string";
// notSure = false;
// console.log(notSure);


// const books: string[] = ['1984', 'Brave New World', 'Fahrenheit 451',];
// let foundBook: string | undefined;
//
// for (let book of books) {
//   if (book === '1984') {
//     foundBook = book;
//     foundBook = foundBook.toUpperCase();
//     break;
//   }
// }
//
// console.log(foundBook?.length);


// // ## Challenge 2
// let discount: number | string = 20;
// console.log(discount);
// discount = '20%';
// console.log(discount);
// // discount = true;
// // console.log(discount);
//
// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
// orderStatus = 'shipped';
// orderStatus = 'delivered';
// console.log(orderStatus);


// let prices: number[] = [100, 75, 42];
// let fruits: string[] = ['apple', 'orange', 'banana'];
// // let randomValues: [] = []; // always empty array
// // let emptyValues = []; // array with anything
// let emptyValues: number[] = [];
// let names: string[] = ['peter', 'susan', 'andrew'];
// // let names = ['peter', 'susan', 'andrew', 12];
// console.log(names[2]);
// let array:(string | boolean)[] = ['apple', true, 'banana', false];

let temperatures: number[] = [20, 25, 30];
temperatures.push(35);
console.log(temperatures);

let colors: string[] = ['red', 'green', 'blue'];
colors.push('violet');

let mixedArr: (number | string)[] = [1, 'two', 3];
mixedArr.push('four');
console.log(mixedArr);