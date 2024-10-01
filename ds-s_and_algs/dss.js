// * STACK - LIFO ds, stores objects into a sort of "vertical tower"
// 
// Usage cases:
// - undo/redo in text editors
// - back/forward through browser history
// - backtracking algorithms (maze, file directories)
// - calling functions
// Methods: .push(), .pop()

// let stack_1 = [];

// function stackIn(stack, el) {
//   return stack.push(el);
// }

// function stackOut(stack) {
//   return stack.pop();
// }
// stackIn(stack_1, "Minecraft");
// stackIn(stack_1, "Skyrim");
// stackIn(stack_1, "DOOM");
// stackIn(stack_1, "Borderlands");
// stackIn(stack_1, "FFVII");

// console.log(stack_1);
// stackOut(stack_1);
// console.log(stack_1);
// console.log(stack_1.shift());
// console.log(stack_1);
// console.log(stack_1.find(el => el === "FFVII"));
// console.log(stack_1.find(el => el === "Fallout"));


// * QUEUE - FIFO ds,- a collection designed for holding elements 
// prior to processing Linear data structure
//
// enqueue - push()
// dequeue - shift()
// class Queue {
// 	constructor() {
// 		this.items = {}
// 		this.frontIndex = 0
// 		this.backIndex = 0
// 	}
// 	enqueue(item) {
// 		this.items[this.backIndex] = item
// 		this.backIndex++
// 		return item + ' inserted'
// 	}
// 	dequeue() {
// 		const item = this.items[this.frontIndex]
// 		delete this.items[this.frontIndex]
// 		this.frontIndex++
// 		return item
// 	}
// 	peek() {
// 		return this.items[this.frontIndex]
// 	}
// 	get printQueue() {
// 		return this.items;
// 	}
// }
// const queue = new Queue();
// console.log(queue.enqueue(7));
// console.log(queue.enqueue(2));
// console.log(queue.enqueue(6));
// console.log(queue.enqueue(4));
// let str1 = queue.printQueue;
// console.log(str1);
// console.log(queue.dequeue());
// console.log(queue.peek());
// let str2 = queue.printQueue;
// console.log(str2);

// vid2

// ARRAY DS
// const students = ["Alex", "James", "Emma", "Louis", "Brian",];

// function findStudent(allStudents, studentName) {
// 	for (let index = 0; index < allStudents.length; index++) {
// 		if (allStudents[index] === studentName) {
// 			console.log(`Found ${studentName}`);
// 		}
// 	}
// 	console.log(allStudents.find(student => student === studentName));
// }
// findStudent(students, "Emma");

// O(n)
const groceries = ["milk", "bread", "eggs", "flour", "cheese", "sugar",];

const searchForItem = el => {
	for (let i = 0; i < groceries.length; i++) {
		groceries[i] === el ? console.log(`Found: ${el} on index: ${i}`) : console.log(`${el} not found on index: ${i}`);
	}

	for (let j = 0; j < groceries.length; j++) {
		groceries[j] === el ? console.log(`Found_2: ${el} on index: ${j}`) : console.log(`${el} 2_not found on index: ${j}`);
	}

	// n + n = 2n ==> O(2n)
	// Drop the constant so it becomes O(n)
};
searchForItem("cheese");
