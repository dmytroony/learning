
// Save data in the Local Storage
let theme = localStorage.getItem('theme');

if (theme == null) {
	setTheme('light');
} else {
	setTheme(theme);
}

// Change the Theme
let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode;
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode === 'light') {
		document.getElementById('theme-style').href = './css/default.css';
	}
	if (mode === 'blue') {
		document.getElementById('theme-style').href = './css/themes/blue.css';
	}
	if (mode === 'green') {
		document.getElementById('theme-style').href = './css/themes/green.css';
	}
	if (mode === 'purple') {
		document.getElementById('theme-style').href = './css/themes/purple.css';
	}

	// Record the current theme in LS
	localStorage.setItem('theme', mode);
}
