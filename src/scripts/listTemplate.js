const createList = (function (newTab) {
    const listTab = document.getElementById('listTab');

    const listTitle = document.createElement('h2');
    listTitle.textContent = newTab.textContent;

    const addToListBtn = document.createElement('button');
    addToListBtn.setAttribute('id', 'addToList');
    addToListBtn.textContent = '+';

    listTab.appendChild(listTitle);
    listTab.appendChild(addToListBtn);
});

export {createList};