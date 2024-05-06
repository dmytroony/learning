import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler (name) {
  console.log(`Hello ${name}!`);
}

function byeHandler () {
  console.log('Goodbye World');
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', byeHandler);

// Emit events
myEmitter.emit('greet', 'John Doe');
myEmitter.emit('bye', 'John Doe');

// Error handling
myEmitter.on('error', err => console.log(`An error ocurred | ${err}`));
myEmitter.emit('error', new Error('Sth went wrong!'));
