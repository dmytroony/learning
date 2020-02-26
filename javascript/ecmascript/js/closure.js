// function createCalcFunction(n) {
//     return function () {
//         console.log(1000 * n);
//     }
// }
// const calc = createCalcFunction(2);
// calc();
// const calc1 = createCalcFunction(3);
// calc1();

// function createIncrementor(n) {
//     return function (num) {
//         return n + num;
//     }
// }
//
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(3));
// console.log(addTen(41));

// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com');
// const netUrl = urlGenerator('net');
// console.log(comUrl('google'));
// console.log(netUrl('zaycev'));

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, )
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {
    name: 'John',
    age: 32,
    job: 'Frontend',
};

const person2 = {
    name: 'Michael',
    age: 28,
    job: 'SMM',
};

bind(person1, logPerson)();
bind(person2, logPerson)();
