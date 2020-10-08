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

// console.log(table_digs.rows[0].cells[1].innerHTML);

// Lesson 4

// let divElem = document.getElementById('div_id');
// console.log(divElem);
// console.log(divElem.innerHTML);
// console.log(divElem.innerText);

// console.log( div_id ); // not recommend

// let list = document.querySelectorAll('ul > li');
// let list = document.querySelectorAll('ul > li:first-child');
// for (let val of list) {
//     console.log(val);
// }

// let list = document.querySelector('ol > li');
// console.log(list);

// let list = document.querySelectorAll("ul.stars-list > li");
// for (let item of list) {
//     if (item.matches("li.star")) {
//         console.log(item);
//     }
// }

// let li = document.querySelector("li.star");
// console.log(li.closest('.stars-list'));
// console.log(li.closest('.content-table'));
// console.log(li.closest('h1'));

// let div = document.querySelector('div.content-table');
// let ul = document.querySelector('ul.stars-list');
//
// if (div.contains(ul)) {
//     console.log('<ul> is a child');
// }

// console.log(document.body.constructor.name);
//
// console.log(document.body instanceof HTMLBodyElement); // true
// console.log(document.body instanceof HTMLElement); // true
// console.log(document.body instanceof Element); // true
// console.log(document.body instanceof Text); // false

// console.dir(document.body);
// console.log(document.body);
// console.log(document.body.nodeType);

// let comm = document.body.firstChild;
// console.log(comm.nodeName);
// console.log(comm.tagName);
// console.log(document.body.nodeName);
// console.log(document.body.tagName);

// let h1 = document.querySelector('h1');
// console.log(h1.innerHTML);
// h1.innerHTML = "<i>Inner</i> Page title";
// console.log(h1.innerHTML);
//
// h1.innerHTML += " plus added text";
// console.log(h1.innerHTML);
// console.log(h1.outerHTML);
//
// h1.outerHTML = "<h2>Smaller Page title</h2>"

// console.log(document.body.textContent);
// let msg = prompt('Your comment', '');
// comm.textContent = msg;

// // equal style="display: none / block" in CSS
// let comm = document.getElementById("comm");
// comm.hidden = true;
// setInterval(() => comm.hidden = !comm.hidden, 1000);

// let body = document.body;
// // body.myStyle = "color: green";
// body.myStyle = {
// 	color: "green",
// 	fontSize: 20,
// }
// console.log(body.myStyle);
//
// console.log(body.myStyle.fontSize);
//
// body.getFontSize = function() {
// 	return this.myStyle.fontSize;
// }
//
// console.log(body.getFontSize())
//
// console.dir(body);

// let comm = document.getElementById("comm");
// console.log(comm.hasAttribute("id"));
// console.log(comm.getAttribute("id"));
// comm.setAttribute("newID", "newProperty");
// console.log(comm.getAttribute("newID"));
//
// for (let val of comm.attributes) {
// 	console.log(val);
// }

// let inp = document.getElementById('input');
// console.log(typeof inp.checked);

// Lesson 6
// for (let cell of document.querySelectorAll('[data-cell-red]')) {
// 	let attr = cell.getAttribute('data-cell-red');
// 	cell.style.background = attr;
// }

// let div = document.createElement('div');
// div.className = 'msg';
// div.innerHTML = 'Important information!';
// document.body.append(div);

// let list = document.querySelector('ul');
// // list.before('before');
// // list.after('after');
// //
// // let li_1 = document.createElement('li');
// // li_1.innerHTML = 'first element';
// // list.prepend(li_1);
// //
// // let li_2 = document.createElement('li');
// // li_2.innerHTML = 'last element';
// // list.append(li_2);
//
// // list.replaceWith(
// // 	document.createElement('hr'),
// // 	'replace',
// // 	document.createElement('br'));

// let li = document.querySelector('ul > li:first-child');
// let list = document.querySelector('ul');
// list.append(li);

// let textNode = document.createElement('Text element');
// document.body.append(textNode);

// document.body.append('<p>Text with a tag</p>');
// document.body.insertAdjacentHTML('beforebegin', '<p>Text with a tag</p>');
// document.body.insertAdjacentHTML('afterend', '<p>Text with a tag</p>');

// let idRemove = setInterval(function () {
// 	let li = document.querySelector('ul.list > li:last-child');
//
// 	if (li === null) {
// 		clearInterval(idRemove);
// 		alert('List was deleted!');
// 	} else {
// 		li.remove();
// 	}
// }, 500);

// let t = document.querySelector('table');
// let r = document.querySelector('table > tbody > tr:last-child');
//
// let row = r.cloneNode(true);
// row.firstChild.innerHTML = 'Venus';
// t.append(row);

// let fr = new DocumentFragment();
// let list = ['Mercury', 'Venus', 'Earth', 'Mars'];
//
// for (let p of list) {
// 	let item = document.createElement('li');
// 	item.innerHTML = p;
// 	fr.append(item);
// }
//
// let ul = document.querySelector('ul');
// ul.append(fr);

// let element = document.getElementById('text-link')
// element.href = 'https://google.com'
// element.title = 'Googol'

// let element = document.getElementById('block-1')
// let link = document.createElement('a')
// let br = document.createElement('br')
//
// function addLink() {
//   link.innerHTML = 'Go to Google'
//   link.href = 'https://google.com'
//   element.appendChild(br)
//   element.appendChild(link)
// }
//
// function removeLink() {
//   element.removeChild(br)
//   element.removeChild(link)
// }
//
// document.querySelector('.addBtn').onclick = () => addLink()
// document.querySelector('.removeBtn').onclick = () => removeLink()
