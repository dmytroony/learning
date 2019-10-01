// function openWindow() {
//
// 	let msgWindow = open('../index2.html');
//
// }

// if (window.confirm('Push the Ok or the Cancel')) {
// 	window.alert('Ok!');
// } else {
// 	window.alert('Cancel!');
// }

// console.log(1+'1');

// let a = 0;
// let b = 1;
// let c;
//
// if (a !== 0) {
// 	c = 10 / a;
// 	document.write('c = ' + c);
// } else if (b !== 0) {
// 	c = 10 / b;
// 	document.write('c = ' + c);
// } else {
// 	document.write('Divide by 0');
// }

// let command = window.prompt('Enter the action.', '');
//
// if(command === null) {
// 	console.log('Cancel pressed!');
// } else {
// 	switch ( parseInt(command) ) {
// 		case 1: console.log('Action 1 selected'); break;
// 		case 2: console.log('Action 2 selected'); break;
// 		case 3: console.log('Action 3 selected'); break;
// 		case 4: console.log('Action 4 selected'); break;
// 		default: console.log('Unknown action!');
// 	}
// }

// let i = 1;
//
// while (i < 11) {
// 	console.log(i);
// 	i++;
// }

// do {
// 	console.log(i);
// 	i++;
// } while (i <= 10);

// for (let i = 1; i < 11; i++) {
// 	if (i === 5) break; {
// 		console.log(i + ' ');
// 	}
// }

// let  j = 1;
//
// while (j < 15) {
//
// 	for (let k = 0; k < j; k++)
//
// 		document.write('*');
// 	document.write('<br>');
//
// 	j++;
//
// }

// let m;
// m = [5, 3, 4, 1, 2];
//
// let months;
// months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//
// let num0 = m[0];
// let j = m[3];
// m[0] = [3, 2, 1];
// j = m[0][1];

// let m = [7, 66, 55, 4, 88, 1, 8, 99, 3];
//
// let Min = m[0];
// let Min_ind = 0;
//
// document.write('Array: <br>');
//
// for (let i = 1; i < m.length; i++) {
//
// 	if (m[i] < Min) {
//
// 		Min = m[i];
// 		Min_ind = i;
//
// 	}
//
// 	document.write(m[i] + ' ');
//
// }
//
// document.write('<br>Minimum: ' + Min);
// document.write('<br>Index: ' + Min_ind);

// let m;
// m = [0, 0, 0];
//
// m[0] = [3, 2, 1];
// m[1] = [7, 8, 9];
// m[2] = [5, 6, 7];
//
// let max = m[0][0];
// let ind = [0, 0];
//
// for (let i = 0; i < m.length; i++) {
//
// 	for (let j = 0; j < m[i].length; j++) {
//
// 		if (m[i][j] > max) {
//
// 			max = m[i][j];
// 			ind[0] = i;
// 			ind[i] = j;
//
// 		}
//
// 	}
//
// }
//
// document.write('Max ' + max);
// document.write('<br>Ind [' + ind[0] + '] [' + ind[1] + ']');