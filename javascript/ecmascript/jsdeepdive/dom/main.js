// DOM manipulation

// // getElementById
// const title = document.getElementById('main-heading');
// console.log("getElementById", title);
// // getElementByClassName
// const listItem = document.getElementsByClassName('list-items');
// console.log("getElementByClassName", listItem);
// // getElementByTagName
// const liS = document.getElementsByTagName('li');
// console.log("getElementByTagName", liS);
// // querySelector
// const container = document.querySelector('div');
// console.log("querySelector", container);
// // querySelectorAll
// const list = document.querySelectorAll('li');
// console.log("querySelectorAll", list);

// const title = document.querySelector('#main-heading');
// console.log(title.getAttribute('id'));
// title.style.color = "firebrick";
// const listItems = document.querySelectorAll('.list-items');
// listItems.forEach(el => {
//   el.style.listStyle = 'none';
// });
// const ul = document.querySelector('ul');
// // Creating element
// const li = document.createElement('li');
// // Adding element
// ul.append(li);
// // Modifying the text
// // const firstListItem = document.querySelector('.list-items');
// // console.log(firstListItem.innerText);
// // console.log(firstListItem.textContent);
// // console.log(firstListItem.innerHTML);
// li.innerText = 'X-Men';
// // Modifying attributes and classes
// li.setAttribute('id', 'custom');
// li.removeAttribute('id');
// li.classList.add('list-items');
// console.log(li.classList.contains('list-items'));
// li.classList.remove('list-items');
// console.log(li.classList.contains('list-items'));
// // Remove elements
// li.remove();
// // Traverse the DOM
// // Parent Node Traversal
// const uL = document.querySelector('ul');
// console.log(uL);
// console.log(uL.parentNode);
// console.log(uL.parentElement);
// const html = document.documentElement
// console.log(html);
// // Child Node Traversal
// console.log(uL.childNodes);
// console.log(uL.children);
// uL.children[0].style.backgroundColor = "lightYellow";
// console.log(ul.firstChild);
// console.log(ul.lastChild);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// // Sibling Node Traversal
// console.log(uL.previousSibling);
// console.log(uL.nextSibling);
// console.log(uL.previousElementSibling);
// console.log(uL.nextElementSibling);

// Event Listeners
// const buttonTwo = document.querySelector('.btn-2');
// function logFrom2Btn() {
//   console.log('Hello from btn-2');
// }
// buttonTwo.addEventListener('click', logFrom2Btn);
// const btn3d = document.querySelector('.btn-3');
// function logFrom3d() {
//   console.log(`Hello from btn-3`);
// }
// btn3d.addEventListener('mouseover', logFrom3d);

// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');
// function revealContent() {
//   if(hiddenContent.classList.contains('reveal-btn')) {
//     hiddenContent.classList.remove('reveal-btn');
//   } else {
//     hiddenContent.classList.add('reveal-btn');
//   }
// }
// // revealBtn.addEventListener('click', () => {
// //   // revealBtn.nextElementSibling.style.visibility = 'visible';
// //   revealBtn.nextElementSibling.style.display = 'block';
// // });
// revealBtn.addEventListener('click', revealContent);

// Capturing -> Target -> Bubbling
// Capturing
// window.addEventListener('click', () => console.log('window'), true);
// document.addEventListener('click', () => console.log('document'), true);
// document.querySelector('.div2').addEventListener('click', (e) => {
//   // e.stopPropagation();
//   console.log('div2');
// }, true);
// document.querySelector('.div1').addEventListener('click', () => console.log('div1'), true);
// document.querySelector('button').addEventListener('click', (e) => {
//   console.log(e.target);
//   e.target.innerText = 'clicked';
// }, true);
// document.querySelector('button').addEventListener('click', e => e.stopPropagation, true);
// Bubbling
// window.addEventListener('click', () => console.log('window'), false);
// document.addEventListener('click', () => console.log('document'), false);
// document.querySelector('.div2').addEventListener('click', (e) => {
//   // e.stopPropagation();
//   console.log('div2');
// }, {once: true});
// document.querySelector('.div1').addEventListener('click', () => console.log('div1'), false);
// document.querySelector('button').addEventListener('click', (e) => {
//   // e.stopPropagation();
//   console.log(e.target);
//   e.target.innerText = 'button clicked';
// }, false);
// document.querySelector('.btn').addEventListener('click', (e) => {
//   // e.stopPropagation();
//   e.preventDefault();
//   console.log(e.target);
//   e.target.innerText = 'link clicked';
// }, false);
//
// Event Delegation
// standard
// document.querySelector('#football').addEventListener('click', (e) => {
//   console.log(`football is clicked`);
//   const target = e.target;
//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });
// document.querySelector('#basketball').addEventListener('click', (e) => {
//   console.log(`basketball is clicked`);
//   const target = e.target;
//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });
// document.querySelector('#boxing').addEventListener('click', (e) => {
//   console.log(`boxing is clicked`);
//   const target = e.target;
//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });
// document.querySelector('#tennis').addEventListener('click', (e) => {
//   console.log(`tennis is clicked`);
//   const target = e.target;
//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });
// document.querySelector('#golf').addEventListener('click', (e) => {
//   console.log(`golf is clicked`);
//   const target = e.target;
//   if (target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey';
//   }
// });
// delegation
// const sports = document.querySelector("#sports"), 
//   newSport = document.querySelector('li');
// sports.addEventListener('click', e => {
//   const target = e.target;
//   console.log(`${target.getAttribute('id')} is clicked`);
//   if (target.matches('li')) target.style.backgroundColor = "lightgrey";
// });
// newSport.innerText = 'Rugby';
// newSport.setAttribute('id', 'rugby');
// sports.appendChild(newSport);
