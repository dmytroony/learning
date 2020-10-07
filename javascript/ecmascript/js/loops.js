// let i = 0;
// // while (i < 10)  {
// //   console.log(i)
// //   i++
// // }
//
// // do {
// //   console.log(i)
// //   i++
// // }
// // while (i < 10)
//
// // for (i; i < 10; i++) {
// //   console.log(i);
// // }
//
// for (i; i < 10; i++) {
//   if (i % 2) console.log(i);
// }

// let div = document.querySelectorAll('.one');
// // console.log(div)
//
// // for (let i = 0; i < div.length; i = i + 2) {
// //   div[i].style.background = 'green'
// //   div[i].onclick = two
// // }
// //
// // function two() {
// //   console.log('work!')
// // }
// //
// // let b = document.getElementsByClassName('one');
//
// document.querySelector('button').onclick = () => {
//   let rrr = document.querySelectorAll('input[type="radio"]')
//   console.log(rrr)
//   for (let i = 0; i < rrr.length; i++) {
//     if (rrr[i].checked) {
//       console.log(rrr[i].value)
//     }
//   }
// }

// let res = ''
// for (let i = 0; i < 10; i++) {
//   res += i + ' ';
// }
// document.querySelector('#res').innerHTML = res;

// let arr = [4, 7, 9]
// // for (let i = 0; i < arr.length; i++) console.log(arr[i])
//
// // for (let key in arr) console.log(key, arr[key])
//
// // for (let item in arr) console.log(item)

// let ps = document.getElementsByTagName('p')
// let qP = document.querySelectorAll('p')
// console.log(ps)
// console.log(qP)

// for (let i = 0; i < ps.length; i++) console.log(ps[i])
// for (let psKey in ps) {
//   console.log(ps[psKey])
// }
// for (let item of ps) {
//   console.log(item)
// }

// let allP = document.querySelectorAll('p')
// allP.forEach((elem, index) => {
//   console.log(index, elem)
// })

// const people = [
//   {name: 'Alex', age: 16, budget: 4000},
//   {name: 'Marta', age: 23, budget: 5000},
//   {name: 'John', age: 17, budget: 7000},
//   {name: 'Nicole', age: 24, budget: 6000},
//   {name: 'Natalie', age: 27, budget: 9000},
//   {name: 'Bruce', age: 26, budget: 8000},
// ]

// for (let i = 0; i < people.length; i++) console.log(people[i])

// for (let  person in people) console.log(person)

// for (let  person of people) console.log(person)

// forEach
// people.forEach(person => console.log(person))

// Map
// const newPeople = people.map(person => `${person.name} (${person.age})`)
// console.log(newPeople)

// Filter
// const adult = people.filter(person => person.age >= 18)
// const young = people.filter(person => person.age <= 18)
// console.log('18+ :', adult)
// console.log('18- :', young)

// Reduce
// const totalBudget = people.reduce((total, person) => total + person.budget, 0)
// console.log(totalBudget)

// Find
// const alex = people.find(person => person.name === 'Alex')
// console.log(alex)

// FindIndex
// const alexIndex = people.findIndex(person => person.name === 'Alex')
// console.log(alexIndex)

// let newPeople = people
//     .filter(person => person.budget > 5500)
//     .map(person => {
//       return {
//         info: `${person.name} (${person.age})`,
//         budget: person.budget,
//       }
//     }).sort((a, b) => a.budget - b.budget)
//     .reduce((total, person) => total + person.budget, 0)
//
// console.log(newPeople)

// // Inserted loops
// let out = document.querySelector('.out');
// // for (let i = 0; i < 5; i++){
// //   for (let k = 0; k < 10; k++){
// //     out.innerHTML += k
// //   }
// //   out.innerHTML += '<br>'
// // }
//
// for (let i = 0; i <= 9; i++) {
//   // out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>'
//   out.innerHTML += `3*${i}=${3*i}<br>`
// }
