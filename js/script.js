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

let classes = {
	classA:["Tom","Alice"],
	classB:["Sam","Bob"],
	classC:["Ron","John"]
};

for(let key in classes){

	console.log(key+":");

	for(let val of classes[key]){
		console.log(val);
	}

}