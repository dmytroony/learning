import Queue from './queue.js';
let q = new Queue(3);

document.addEventListener('DOMContentLoaded', () => {
  let btnAdd = document.getElementById('btnAdd');
  btnAdd.addEventListener('click', addMovie); //add the input value to the end of the queue
  let btnRemove = document.getElementById('btnRemove');
  btnRemove.addEventListener('click', removeMovie); //remove one item from the front of the queue
  let btnLog = document.getElementById('btnLog');
  btnLog.addEventListener('click', logMovies); //show the contents of the queue
});

function addMovie() {
  //attempt to add another item to the queue
  let movie = document.getElementById('movie');
  let txt = movie.value.trim();
  if (txt) {
    q.enqueue(txt);
    console.log(`the queue now has ${q.size()} items`);
    addToHTMLList(txt);
    movie.value = '';
    movie.focus();
    console.log(`the last movie in the Queue is now ${q.tail()}`);
  }
}

function removeMovie() {
  //dequeue the first item in the queue
  let removed = q.dequeue();
  console.log(`${removed} has been removed from the queue`);
  removeFromHTMLList(removed);
}

function addToHTMLList(txt) {
  //update the HTML list of things
  let ol = document.querySelector('main > ol');
  ol.innerHTML += `<li>${txt}</li>`;
}

function removeFromHTMLList(txt) {
  //remove the dequeued item from the HTML
  let listItems = document.querySelectorAll('ol > li');
  listItems.forEach((li) => {
    if (li.textContent === txt) {
      li.remove();
    }
  });
}

function logMovies() {
  console.log(q.toString());
}