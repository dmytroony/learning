// jQuery(document).ready(function () {
// 	// Allows to download our script file after download our html file
// });
// OR
// jQuery(function () {
// 	// Allows to download our script file after download our html file
// });

// $('.first').css({'color': 'darkcyan'});
$('#second').css({'color': '#999900'});
$('h2[title|="test"]').css({'color': 'darkred'});
$('h2[title$="word"]').css({'color': 'darkgreen'});
let yearsData = jQuery('h1').data('years');
let nameData = $('h1').data('name');// receive a data from the object

console.log(nameData + ': ' + yearsData);

$('ul li').css({'opacity': '0.2'});
$('ul li:even').css({'color': 'brown'});
$('ul li:odd').css({'color': 'black'});

$('ul li:nth-child(3)').css({'opacity': '1', 'textDecoration': 'underline'});

$('ul li:has("span")').css({'border': '1px dotted black', 'padding': '2px'});

$('table tr td:parent').css({'backgroundColor': 'cyan', 'border': '1px solid darkgrey'});
$('table tr td:empty').css({'backgroundColor': 'lightcyan', 'border': '1px solid darkgrey'});

$('h2:contains("Hello")').css({'color': 'brown'});

$('button').on('click',() => {
	console.log('+');
});

$('button').dblclick( () => {
	alert('++');
});

$('button').mouseenter( () => {
	console.log('On focus');
});

$('button').mouseleave( () => {
	console.log('No focus');
});

// $('input[name="name"]').change(function() {
// 	let value = $(this).val();
// 	$('input[name="submit"]').val(value);
// });

let value;

$('input[name="name"]').keyup(function() {
	value = $(this).val();
	$('input[name="submit"]').val(value);
});

$('form').submit(function() {
	alert(value);
});

// CSS
// $('form').css({'display': 'none'}); // hide form

// jQuery
$('form').delay(1000).show(3000); //.delay(20000).hide(10000); // hide()

$('.hi').animate({'width': '50px', 'height': '50px'}, 2000);

$('.hi').fadeOut(2000).fadeIn(2000); // analog hide() || fadeIn() - analog show()

let attrib = $('input[name="name"]').attr('value');
console.log(attrib);

let attrDataYears = $('.first').attr('data-years');
console.log(attrDataYears);

console.log($('.first').data('years'));

$(window).resize(function () {
	let width = $(this).width();
	let height = $(this).height();
	console.log(height + 'x' + width);
});

$(window).scroll(function () {
	console.log('Scrolled!')
});

$('h1').addClass('red');

$('h1').hover(function () {
	$(this).addClass('blue');
});

