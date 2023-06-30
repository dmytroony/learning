export default class Queue {
  #list = [];
  #first = null;
  #last = null;
  #MAX_SIZE = 5;

  constructor(max = 5) {
    //5 is our default queue length
    this.#MAX_SIZE = max;
  }
  size() {
    return this.#list.length;
  }
  enqueue(item) {
    //add
    if (this.isFull()) throw new Error('Queue is full.');
    if (this.isEmpty()) {
      this.#first = item;
    }
    this.#list.push(item);
    this.#last = item;
  }
  dequeue() {
    let item = this.#list.shift();
    this.#first = this.#list[0];
    return item;
  }
  peek() {
    return this.#first;
  }
  tail() {
    return this.#last;
  }
  isEmpty() {
    return this.#list.length === 0;
  }
  isFull() {
    return this.#list.length === this.#MAX_SIZE;
  }
  toString() {
    return this.#list;
  }
}