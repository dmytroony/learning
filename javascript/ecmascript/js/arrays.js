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

const people = [
    {name: 'Dmytro', budget: 4200,},
    {name: 'Vasyl', budget: 3500,},
    {name: 'Oleksandr', budget: 1700,},
];

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget;
        return acc;
}, 0);
console.log(allBudget);