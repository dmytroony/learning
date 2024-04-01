'use strict';

(function (){
  // counter
  const $decrementBtn = document.querySelector('[data-decrement-btn]');
  const $incrementBtn = document.querySelector('[data-increment-btn]');
  const $counterField = document.querySelector('[data-counter-field]');
  const $total = document.querySelector('[data-total]');
  const minValue = 1;
  const maxValue = 99999999;

  // ++
  $incrementBtn.addEventListener('click', function () {
    const currentValue = $counterField.value;
    if (currentValue < maxValue) $counterField.value = Number(currentValue) + 1;
    updateTotal.call($counterField);
  });

  // --
  $decrementBtn.addEventListener('click', function () {
    const currentValue = $counterField.value;
    if (currentValue > minValue) $counterField.value = Number(currentValue) - 1;
    updateTotal.call($counterField);
  });

  const updateTotal = function () {
    $total.textContent = this.value;
  }

  $counterField.addEventListener('input', updateTotal.bind($counterField));


  // submit contribute form
  const contributeForm = document.querySelector('[data-contribute-form]');
  const submitBtn = document.querySelector('[data-submit-btn]');

  contributeForm.addEventListener('submit', async function (event) {
    event.preventDefault();
    try {
      submitBtn.setAttribute('disabled', '');
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      submitBtn.removeAttribute('disabled', '');
    }
  });

})();