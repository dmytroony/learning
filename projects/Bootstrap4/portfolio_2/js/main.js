
// function getCurrentAge(date) {
// 	return ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
// }
// let myAge = getCurrentAge('1989-11-07');




const getCurrentAge = date => ((new Date().getTime() - new Date(date)) / (24 * 3600 * 365.25 * 1000)) | 0;
const myAge = getCurrentAge('1989-11-07');
const currentAge = document.getElementById('currentAge').innerText = myAge;
// currentAge

// currentAge.textContent(myAge);

// let h3 = document.querySelectorAll('h1');
// console.log(h3.innerHTML);
// h3.innerHTML = "<i>Inner</i> Page title";
// console.log(h3.innerHTML);