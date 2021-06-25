// imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

// getting the tabs by
const queryParamsContainer = document
    .querySelector('[data-query-params]');
const requestHeadersContainer = document
    .querySelector('[data-request-headers]');
const keyValueTemplate = document
    .querySelector('[data-key-value-template]');

const form = document.querySelector('[data-form]');

// adding listeners to the tabs on click [Add] buttons
document
    .querySelector('[data-add-query-param-btn]')
    .addEventListener('click', () => {
        queryParamsContainer.append(createDeleteKeyValuePair());
    });
document
    .querySelector('[data-add-request-header-btn]')
    .addEventListener('click', () => {
        requestHeadersContainer.append(createDeleteKeyValuePair());
    });

// creating the new [key-value-pairs] elements
// in chosen tab on the html page
queryParamsContainer.append(createDeleteKeyValuePair());
requestHeadersContainer.append(createDeleteKeyValuePair());

// form listener for the form fields to click on [Send]
form.addEventListener('submit', e => {
    e.preventDefault();

    axios({
        url: document.querySelector('[data-url]').value,
        method: document.querySelector('[data-method]').value,
        params: keyValuePairsToObjects(queryParamsContainer),
        headers: keyValuePairsToObjects(requestHeadersContainer),
    })
        .then(response => console.log(response));
});

// create or delete a key-value pair
function createDeleteKeyValuePair() {
    // creating by click on [Add]
    const element = keyValueTemplate.content.cloneNode(true);
    // deleting by click on [Remove]
    element
        .querySelector('[data-remove-btn]')
        .addEventListener('click', (e) => {
            e.target
                .closest('[data-key-value-pair]').remove();
        });

    return element;
}

// converting pairs to objects
function keyValuePairsToObjects(container) {
    const pairs = container.querySelectorAll('[data-key-value-pair]');

    return [...pairs].reduce((data, pair) => {
        const key = pair.querySelector('[data-key]').value;
        const value = pair.querySelector('[data-value]').value;

        if (key === '') return data;

        return { ...data, [key]: value, };
    }, {});
}
