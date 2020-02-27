// console.log('Start');
// console.log('Start2');
//
// function timeout3sec() {
//     console.log('timeout3sec');
// }
//
// window.setTimeout(() => {
//     console.log('Inside timeout, after 2sec');
// }, 2000);
//
// setTimeout(timeout3sec, 3000);
//
// console.log('End');

setTimeout(function () {
    console.log('timeout zero');
}, 0);

console.log('Start');

setTimeout(function () {
    console.log('timeout 2sec');
}, 2000);

setTimeout(function () {
    console.log('timeout 1sec');
}, 1000);





console.log('End');
console.log('End1');
console.log('End2');