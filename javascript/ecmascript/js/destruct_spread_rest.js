// // Arrays
// function calculateValues(a, b) {
//   return [
//     a + b,
//     // a - b,
//     undefined,
//     a * b,
//     a / b,
//     a ** 2,
//   ]
// }
//
// // console.log(calculateValues(42, 10))
// // const result = calculateValues(42, 10)
// // const sum = result[0]
// // const sub = result[1]
//
// // const [sum, sub, mult, ] = calculateValues(42, 10)
// // const [sum,, mult, ] = calculateValues(42, 10)
// // const [sum, , mult, ...other] = calculateValues(42, 10)
// const [sum, sub = 'nothing', mult, ...other] = calculateValues(42, 10)
// console.log(sum, sub, mult, other)

// // Objects
// const person = {
//   name: 'Alex',
//   age: 20,
//   address: {
//     country: 'Ukraine',
//     city: 'Chernivtsi',
//   },
// }
// //
// // const {name, age} = person
// // console.log(name, age)
//
// function logPerson( {name, age, address} ) {
//   console.log(name + ' ' + age)
// }
//
// logPerson(person)

// ==================================================================================
// SPRREAD , REST
// ==================================================================================
// // Spread for arrays
// const uaCities = ['Kiev', 'Chernivtsi', 'Vinnytsya', 'Odessa', 'Crimea',]
// const euCities = ['Berlin', 'Prague', 'Paris', 'London', 'Munich',]
//
// // console.log(...uaCities)
// // console.log(...euCities)
//
// const allCities = [...uaCities, ...euCities]
// // const allCities = [...uaCities, 'Texas', ...euCities]
// console.log(allCities)

// // Spread for objects
// const citiesUaWithPopulation = {
//   Kiev: 20,
//   Chernivtsi: 8,
//   Odessa: 5,
//   Crimea: 3,
// }
// const citiesEuWithPopulation = {
//   Kiev: 26,
//   Berlin: 15,
//   Prague: 11,
//   Paris: 7,
//   London: 4,
// }
//
// // console.log({...citiesUaWithPopulation})
// // console.log({...citiesUaWithPopulation, ...citiesEuWithPopulation})
//
// // console.log(Math.max(5, 37, 42, 17));
//
// // const numbers = [5, 37, 42, 17]
// // console.log(Math.max(...numbers))
//
// const divs = document.querySelectorAll('.block-div')
//
// console.log(divs);
//
// const nodes = [...divs]
// console.log(nodes)

// Rest
// function sum(a, b, ...rest) {
//   // console.log(rest) // 3, 4, 5
//   return a + b + rest.reduce((a, i) => a + i, 0)
// }

// const numbers = [1, 2, 3, 4, 5,]
// // console.log(sum(...numbers))
// const [a, b, ...rest] = numbers

const person = {
  name: "Max",
  age: 20,
  city: "Chernivtsi",
  country: "UA"
};

const { name, age, ...otherInfo } = person;
console.log(otherInfo);
