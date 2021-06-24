// imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// getting the tabs by
const queryParamsContainer = document
    .querySelector('[data-query-params]');
const requestHeadersContainer = document
    .querySelector('[data-request-headers]');
const keyValueTemplate = document
    .querySelector('[data-key-value-template]');

// adding listeners to the tabs  on click [Add] buttons
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

