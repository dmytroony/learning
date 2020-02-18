const startButton = document.querySelector('.start-button'),
    endButton = document.querySelector('.end-button'),
    firstScreen = document.querySelector('.first-screen'),
    mainForm = document.querySelector('.main-form'),
    formCalculate = document.querySelector('.form-calculate'),
    summary = document.querySelector('.total'),
    fastRange = document.querySelector('.fast-range');

const showElement = element => element.style.display = 'block';

const hideElement = element => element.style.display = 'none';

const handlerCallBackForm = event => {
    let target = event.target;
    
    if (target.classList.contains('want-faster')) {
        target.checked ? showElement(fastRange) : hideElement(fastRange);
    }

};

startButton.addEventListener('click', () => {
    showElement(mainForm);
    hideElement(firstScreen);
});

endButton.addEventListener('click', () => {
    for (const elem of formCalculate.elements) {
        if (elem.tagName === 'FIELDSET') {
            hideElement(elem);
        }
    }

    showElement(summary);
});

formCalculate.addEventListener('change', handlerCallBackForm);