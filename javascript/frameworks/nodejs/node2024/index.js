// console.log("Hello NodeJS !\n==============");
// console.log("global:\n", global);
// console.log("globalThis:\n", globalThis);
// console.log(document);
// console.log(process);

// CommonJS built-in module system used via require()
// const generateRandomNumber = require('./utils');
// const { generateRandomNumber, celsiusToFahrenheit } = require('./utils');
// console.log(generateRandomNumber());
// console.log(celsiusToFahrenheit(19));

// import { getPosts } from "./postController.js"; 
// import getPosts from "./postController.js"; 
import getPosts, { getPostsLength } from "./postController.js"; 

console.log(getPosts());
console.log(getPostsLength());