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
