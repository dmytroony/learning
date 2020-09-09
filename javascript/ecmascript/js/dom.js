// DOM - Document Object Model

// document.querySelector('#out').innerHTML = '<h1>Example</h1>';
// document.querySelector('h1').innerHTML = 'Joke!';

// Auto generation elements
let p = document.createElement('p');
p.innerHTML = 'Created element Example';
p.classList.add('main', 'green');

document.body.appendChild(p);

console.log(p);