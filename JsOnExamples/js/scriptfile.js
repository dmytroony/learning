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

let slider = {

	slides: ['6.jpg', '9.jpg', '20.jpg'],
	// begin frame
	frame: 0,
	set: function (image) { // set the fon image

		document.getElementById('scr').style.backgroundImage = 'url(images/'+image+')';

	},
	init: function () {// launching the slider with the begin image

		this.set(this.slides[this.frame]);

	},
	left: function () {

		this.frame--;
		if (this.frame < 0) this.frame = this.slides.length-1;
		this.set(this.slides[this.frame]);

	},
	right: function () {

		this.frame++;
		if (this.frame === this.slides.length) this.frame = 0;
		this.set(this.slides[this.frame]);

	}

};

window.onload = function () { // launching the slider after download this document

	slider.init();

	setInterval(function () { // 5 seconds

		slider.right(); // after switching to the right

	}, 8000);

};

// Tooltips
// let _tt = function () {
// 	let id = 'tt';
// 	let top = 3;
// 	let left = 3;
// 	let maxw = 300;
// 	let speed = 8;
// 	let timer = 10;
// 	let endalpha = 95;
// 	let alpha = 0;
// 	let tt,t,/*c,b,*/h;
// 	let ie = document.all ? true : false;
//
// 	return {
// 		show: function (e, v, w) {
// 			let t = getEventTarget(e);
// 			addEvent(t, 'mouseout', this.hide);
// 			t.style.cursor = 'help';
//
// 			if (tt === null) {
// 				tt = document.createElement('div');
// 				tt.setAttribute('id', id);
// 				document.body.appendChild(tt);
// 				tt.style.opacity=0;
// 				if (ie)tt.style.filter = 'alpha(opacity=0)';
// 			}
//
// 			tt.style.display = 'block';
// 			tt.innerHTML = v;
// 			tt.style.width = w ? w + 'px' : 'auto';
//
// 			if (tt.offsetWidth > maxw) {
// 				tt.style.width = maxw + 'px'
// 			}
//
// 			h = parseInt(tt.offsetHeight) + top;
// 			clearInterval(tt.timer);
// 			tt.timer=setInterval(function () {
// 				_tt.fade(1)
// 			}, timer);
// 			dd=getOffset(t);
// 			tt.style.top = (dd.top-h+4) + 'px';
// 			tt.style.left = (dd.left+13) + 'px';
// 		},
// 		pos:function (e) {
// 			let u = ie ? event.clientY + document.documentElement.scrollTop : e.pageY;
// 			let l = ie ? event.clientX + document.documentElement.scrollLeft : e.pageX;
// 			tt.style.top = (u-h) + 'px';
// 			tt.style.left = (l + left) + 'px';
// 		},
// 		fade:function (d) {
// 			let a = alpha;
// 			if ((a !== endalpha && d === 1) || (a !== 0 && d === -1)) {
// 				let i = speed;
// 				if (endalpha - a < speed && d === 1) {
// 					i = endalpha - a;
// 				} else if (alpha < speed && d === -1) {
// 					i = a;
// 				}
// 				alpha = a + (i * d);
// 				tt.style.opacity = alpha * .01;
// 				if (ie)tt.style.filter = 'alpha(opacity=' + alpha + ')';
// 			} else {
// 				clearInterval(tt.timer);
// 				if (d === -1) {
// 					tt.style.display = 'none'
// 				}
// 			},
// 			hide:function(e) {
// 				clearInterval(tt.timer);
// 				tt.timer = setInterval(function(){_tt.fade(-1)},timer);
// 			}
// 		};
// 	}();
// }