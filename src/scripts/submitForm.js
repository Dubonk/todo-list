import dele from '../svg/delete.svg';

const submitForm = (function (listContainer) {
    
    const listContainers = listContainer;
    const form = document.getElementById('formId');
    const titleInput = document.getElementById('formTitle');
    const notesInput = document.getElementById('formNotes');
    const dueDateInput = document.getElementById('formDate');
    const titleValue = titleInput.value;
    const notesValue = notesInput.value;
    const dueDateValue = dueDateInput.value;

    const newListItem = document.createElement('div');
    newListItem.classList.add('listItem');
    const titleTextNode = document.createTextNode(titleValue);
    const notesTextNode = document.createTextNode(notesValue);
    const dueDateTextNode = document.createTextNode(`Due: ${dueDateValue}`);

    const del = new Image();
    del.classList.add('deleteSvg');
    del.src = dele;

    const deleteBtn = document.createElement('div');
    deleteBtn.setAttribute('id', 'deleteFromListBtn');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.appendChild(del);

    const titleElement = document.createElement('h3');
     titleElement.appendChild(titleTextNode);

     const notesElement = document.createElement('p');
     notesElement.appendChild(notesTextNode);

     const dueDateElement = document.createElement('p');
     dueDateElement.appendChild(dueDateTextNode);

     newListItem.appendChild(titleElement);
     newListItem.appendChild(notesElement);
     newListItem.appendChild(dueDateElement);
     newListItem.appendChild(deleteBtn);

     const removeListItem = function (event) {
        if (event.target.classList.contains('deleteSvg')) {
            const listItem = event.target.closest('.listItem');
            if (listItem && listContainer.contains(listItem)) {
                listContainer.removeChild(listItem);
            }
        }
    };

    listContainers.removeChild(form);
    listContainers.appendChild(newListItem);

    listContainer.addEventListener('click', removeListItem);

});

export {submitForm};