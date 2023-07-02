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

