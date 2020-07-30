
// Function Declaration
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet('Dmytro');

// Function Expression
// const greet2 = name =>
//     console.log(`Hello, ${name}`);
// greet('Vasyl');

// console.log(typeof greet);
// console.dir(greet);
// console.log(typeof greet2);
// console.dir(greet2);

//Anon fn
// // setInterval(function () {
// //     console.log(Math.random());
// // }, 1000);
//
// let counter = 0;
// const interval = setInterval(function () {
//     if (counter === 10){
//         clearInterval(interval);
//     } else {
//         console.log(++counter);
//     }
// }, 1000);

// Arrow fn
// const arrow = name =>
//     console.log(`Hello, ${name}!`)
//
// arrow('Dmytro')

// const sum = (a, b = 1) => a + b
// console.log(sum(41))

function sumAll(...all) {
    let result = 0
    for (let num of all)
        result += num

    return result
}
const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(res)