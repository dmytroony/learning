// console.log(this);
//
// function abc() {
// 	console.log(this);
// 	console.log('Hello world!');
// 	this.style.background = 'red';
// }
//
// // document.querySelector('.lorem').onclick = abc;
//
// let p = document.querySelectorAll('p');
//
// // p.forEach(function (element) {
// // 	element.onclick = abc;
// // });
// // console.log(this);
//
// // document.querySelector('.lorem')
// // 	.addEventListener('click', abc);
//
// p.forEach(function (element) {
// 	element.addEventListener('click', abc);
// });

// let classes = {
// 	classA:["Tom","Alice"],
// 	classB:["Sam","Bob"],
// 	classC:["Ron","John"]
// };
//
// for(let key in classes){
//
// 	console.log(key+":");
//
// 	for(let val of classes[key]){
// 		console.log(val);
// 	}
//
// }

// SORTING
// function BubbleSort(A) {// A - массив, который нужно отсортировать по возрастанию.
//
// 	let n = A.length;
// 	for (let i = 0; i < n-1; i++) {
//
// 		for (let j = 0; j < n-1-i; j++)	{
//
// 			if (A[j+1] < A[j]) {
// 				let t = A[j+1]; A[j+1] = A[j]; A[j] = t;
//
// 			}
//
// 		}
//
// 	}
// 	return A;    // На выходе сортированный по возрастанию массив A.
// }
//
// console.log(BubbleSort([1, 18, 3, 15, 2, 4, 9, 7]));


