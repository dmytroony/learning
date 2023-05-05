// import { hello, } from './src/modules/hello.js';

// console.log("Hello from main!");
// console.log(hello);

// let name = "World";
// const arr = [
//     'Hello', false, null, undefined, 2,
// ];

// const trueValues = arr.filter(Boolean);
// console.log(trueValues);

// let message = document.querySelector(".message").innerHTML = `${arr[0]}, ${name}!`;
// console.log(message);

// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs);


// const calendarEvent = {
//     title: "Builder Conf",
//     date: new Date(123),
//     attendees: ["Steve",],
// };
// console.log("calendarEvent =", calendarEvent);

// const copied = structuredClone(calendarEvent);
// console.log("structuredClone = ", copied);

// const kitchenSink = {
//     set: new Set([1, 2, 3,]),
//     map: new Map([[1, 2,],]),
//     regex: /foo/,
//     deep: {
//         array: [ new File(someBoolData, 'file.txt',), ],
//     },
//     error: new Error('Hello'),
// };
// kitchenSink.circular = kitchenSink;
// console.log(kitchenSink);

// const clonedSink = structuredClone(kitchenSink);
// console.log(clonedSink);


// const simpleEvent = {
//     title: "Builder Conf",
// };
// const shallowCopy = {...simpleEvent};
// console.log(shallowCopy);

// const shallowCopy1 = Object.assign({}, simpleEvent);
// console.log(shallowCopy1);

// const shallowCopy2 = Object.create(simpleEvent);
// console.log(shallowCopy2);


// const calendarEvent = {
//     title: "Builder Conf",
//     date: new Date(123),
//     attendees: ["Steve"],
// };
// const shallowCopy = {...calendarEvent};
// console.log(shallowCopy);

// shallowCopy.attendees.push("Bob");
// console.log(shallowCopy);

// shallowCopy.date.setTime(456);
// console.log(calendarEvent, shallowCopy);


// const calendarEvent = {
//     title: "Builder Conf",
//     date: new Date(123),
//     attendees: ["Steve"],
// };
// const problematicCopy = JSON.parse(JSON.stringify(calendarEvent));
// console.log(problematicCopy);


// const kitchenSink = {
//     set: new Set([1, 3, 3]),
//     map: new Map([[1, 2]]),
//     regex: /foo/,
//     deep: { array: [ new File(someBlobData, 'file.txt') ] },
//     error: new Error('Hello!')
// };
// const veryProblematicCopy = JSON.parse(JSON.stringify(kitchenSink));
// console.log(veryProblematicCopy);


// console.log(structuredClone({fn: () => {}}));
// console.log(structuredClone({ el: document.body }));
// console.log(structuredClone({get foo() {return 'bar'}}));

// TRANSFERABLE OBJECTS

// const uInt8Array = new Uint8Array(1024 * 1024 * 8).map((v, i) => i);
// console.log(uInt8Array.byteLength);
// worker.postMessage(uInt8Array, [uInt8Array.buffer]);
// console.log(uInt8Array.byteLength);


const original = new Uint8Array(1024);
const clone = structuredClone(original);
console.log(original.byteLength);
console.log(clone.byteLength);
original[0] = 1;
console.log(original[0]);
console.log(clone[0]);
const transferred = structuredClone(original, { transfer: original.buffer });
console.log(transferred.byteLength);
console.log(transferred[0]);
console.log(original.byteLength);
