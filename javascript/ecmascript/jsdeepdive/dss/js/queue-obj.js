export default class Queue {
  #frontIndex = 0;
  #backIndex = 0;
  #length = 0;
  #items = {};
  #MAX_SIZE = 3;

  constructor(max = 3) {
    this.#MAX_SIZE = max;
  }

  size() {
    return this.#length;
  }
  enqueue(item) {
    //add to the end of the queue
    if (this.isFull())
      throw new Error('Queue is currently full. Try again later.');
    this.#items[this.#backIndex] = item;
    this.#backIndex++;
    this.#length++;
  }
  dequeue() {
    //remove the first item
    let item = this.#items[this.#frontIndex];
    delete this.#items[this.#frontIndex];
    this.#length--;
    this.#frontIndex++;
    return item;
  }
  peek() {
    //see the front of the line
    return this.#items[this.#frontIndex];
  }
  tail() {
    //see the end of the line
    return this.#items[this.#backIndex - 1];
  }
  isEmpty() {
    return this.#length === 0;
  }
  isFull() {
    return this.#length === this.#MAX_SIZE;
  }
  toString() {
    return this.#items;
  }
}