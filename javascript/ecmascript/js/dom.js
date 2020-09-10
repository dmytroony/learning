// DOM - Document Object Model

// Lesson 1
// // document.querySelector('#out').innerHTML = '<h1>Example</h1>';
// // document.querySelector('h1').innerHTML = 'Joke!';
//
// // Auto generation elements
// let p = document.createElement('p');
// document.body.insertBefore(p, document.querySelector('#out'));
//
// p.innerHTML = 'Created element Example';
// p.classList.add('main', 'green');
//
// // document.body.appendChild(p);
//
// console.log(p);

// // Lesson 2
// // let div4 = document.getElementById('four4');
// // let p = div4.getElementsByTagName('p');
// // // console.log(div4);
// // // console.log(p);
// //
// // let div = document.getElementsByTagName('div');
// // console.log(div, div.length + ' founded elements');
// //
// // div[2].style.background = 'skyblue';
// //
// // let div = document.querySelector('div');
// // // CSS selector, return single first element
// //
// // let divP = document.querySelector('div p');
// // // equal let divP = document.querySelector('div').querySelector('p');
// // // multiple querySelector
// //
// // let allDiv = document.querySelectorAll('div');
// //
// // console.log(div);
// // console.log('div p: ', divP);
// // console.log(allDiv);
// //
// // let div = document.querySelector('#four4 p');
// // let divAll = document.querySelectorAll('div');
// // console.log(div);
// // console.log(divAll);
// //
// // // four4.style.background = 'red'; // Not recommend style
//
// // Get children of any parental node
// // 1) get the parent element
// // 2) get these children
// let div = document.querySelector('div');
// // let child = div.childNodes;
// // console.log(child);
// // console.log(div.firstChild);
// // console.log(div.lastChild);
//
// // child = div.children;
// // console.log(div);
// // console.log(child);
//
// let hyper = document.querySelector('a');
// console.log(hyper.parentElement);
// console.log(hyper.parentElement.parentElement);
// console.log(hyper.parentElement.parentElement.parentElement);
// console.log(hyper.parentElement.nextElementSibling);
// console.log(hyper.parentElement.nextElementSibling);

// Lesson 3
// console.log(window.innerHeight); // Global Object - Parent for DOM and BOM
// document.body.style.background = 'green'; // DOM
// console.log(navigator.platform); // BOM

// let html = document.documentElement;
// let body = document.body;
// let head = document.head;
// console.log(html);
// console.log(body);
// console.log(head);

// for (let i = 0; i < document.body.childNodes.length; i++) {
//     console.log(i + ': ' + document.body.childNodes[i]);
// }

// for (let child of document.body.childNodes) {
//     console.log(child);
// }

// let arr = Array.from(document.body.childNodes);
// arr.forEach((elem) => console.log(elem) );

// let html = document.documentElement;
// // let first = html.firstChild;
// // let last = html.lastChild;
// let first = html.childNodes[0];
// let last = html.childNodes[html.childNodes.length-1];
//
// console.log(html);
// console.log(html.hasChildNodes());
// console.log(first);
// console.log(last);
// console.log(html.children);

// console.log(document.head.nextSibling);
// console.log(document.head.previousSibling);

// let html = document.documentElement;
// console.log(html.parentNode);
// console.log(html.parentElement);

console.log(table_digs.rows[0].cells[1].innerHTML);
