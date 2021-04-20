// Copying arrays, make array clones
// How to copy an array
// How to clone an array
// 12 ways to surface copy arrays
let base = ['a', 'b', 'c', 'd',
  [
      'arr1', 'first',
    ['arr2', 'second'],
  ],
  {
    obj1: 'first',
    obj2: {second: 'second'}
  },
];
let arr1 = Array.from(base);
let arr2 = Array.of(...base);
let arr3 = base.entries();
let arr4 = base.concat();
let arr5 = [];
for (let el of base) {
  arr5.push(el);
}
let arr6 = [];
for (const el in base) {
  arr6.push(base[el]);
}
let arr7 = [];
for (let i = 0; i < base.length; i++) {
  arr7.push(base[i]);
}
let arr8 = [...base];
let arr9 = new Array(...base);
let arr10 = base.slice();
let arr11 = base.map(e => e);
let arr12 = Object.assign([], base);

// console.log(base, 'base array');
// console.log(arr1, 'Array.from()');
// console.log(arr2, 'Array.of()');
// console.log(arr3, arr3.next().value, '.entries(), it returns the Array Iterator');
// console.log(arr4, '.concat()');
// console.log(arr5, 'for...of');
// console.log(arr6, 'for...in');
// console.log(arr7, 'for');
// console.log(arr8, '[...base]');
// console.log(arr9, 'new Array(...base)');
// console.log(arr10, 'base.slice()');
// console.log(arr11, 'base.map(e => e)');
// console.log(arr12, 'Object.assign()');

// console.log(base === arr12); // equality check === from arr2 to arr12

// console.table([base, arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10, arr11, arr12]);


// Copying objects, make objects clones
// How to copy an object
// How to clone an object
// __ ways to copy objects

let obj1 = { a: 1, b: { c: 2, }, };
console.log(obj1);
function objCopy(obj1) {
  let copy = Object.create(Object.getPrototypeOf(obj1));
  let propNames = Object.getOwnPropertyNames(obj1);

  propNames.forEach(function(name) {
    let desc = Object.getOwnPropertyDescriptor(obj1, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}
let obj2 = objCopy(obj1);
console.log(obj2);