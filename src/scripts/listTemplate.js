import { addToList } from "./addToList";

const createList = (function (event) {
    const listTab = document.getElementById('listTab');

    const listTitle = document.createElement('h2');
    listTitle.textContent = event.target.textContent;

    const addToListBtn = document.createElement('button');
    addToListBtn.setAttribute('id', 'addToList');
    addToListBtn.textContent = 'Add to list';

    listTab.appendChild(listTitle);
    listTab.appendChild(addToListBtn);

    addToListBtn.addEventListener('click', () => {
        addToList();
    });
});

const clearContent = (function () {
    const content = document.getElementById('listTab');
    while(content.firstChild) {
        content.removeChild(content.lastChild);
    }
});

export {createList, clearContent};