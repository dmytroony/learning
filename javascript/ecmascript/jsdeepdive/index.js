// import { hello, } from './src/modules/hello.js';

// console.log("Hello from main!");
// console.log(hello);

let name = "World";
const arr = [
    'Hello', false, null, undefined, 2,
];

const trueValues = arr.filter(Boolean);
console.log(trueValues);

let message = document.querySelector(".message").innerHTML = `${arr[0]}, ${name}!`;
console.log(message);

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs);
