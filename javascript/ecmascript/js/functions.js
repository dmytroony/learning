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

// function sumAll(...all) {
//     let result = 0
//     for (let num of all)
//         result += num
//
//     return result
// }
// const res = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)
// console.log(res)

// function t1() {
//     console.log(1)
//     debugger
//     console.log(2)
//     console.log(3)
// }
//
// t1()
// // let two = () => 5
// // console.log(two());
//
// const t2 = () => {
//     console.log(1)
//     debugger
//     console.log(2)
//     console.log(3)
// }
// t2()

// const a = [1, 2, 3,]
//
// let b = a.map(item => item * 3)
//
// console.log(b);

// function zet(n) {
//     if (n >= 0) return 1
//     else return 0
// }
//
// console.log(zet(-3));
// console.log(zet(4));

// let zet2 = (n) => (n >= 0 ? 1 : 0)
// console.log(zet2(2))
// console.log(zet2(-1))

// const b = [2, 3, 5]
// let mb = b.map(item => ({'num': item}))
// console.log(mb);

document.querySelector("#test-btn").addEventListener("click", () => {
  fetch("./file.json")
    .then(res => res.json())
    .then(file => {
      file.forEach(item => {
        console.log(item.name);
      });
    });
});
