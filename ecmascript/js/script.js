// function sum(a, b) {
//     return a + b;
// }

// function cube(a) {
//     return a**3;
// }

// const sum = (a, b) => {
//     return a + b;
// }

// const cube = a => a**3;

// setTimeout(function(){
//     console.log('After 10 second');
// }, 10000);

// setTimeout(() => console.log('After 10 second'), 10000);

// Context
function log() {
    console.log(this);
}
const arrowLog = () => console.log(this);

const person = {
    name: 'Elena',
    age: 20,
    log: log,
    arrowLog: arrowLog,
};

console.log(person.name);