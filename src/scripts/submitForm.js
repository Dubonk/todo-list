const submitForm = (function () {
    const listContainer = document.querySelector('.listContainer');
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

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'deleteFromListBtn');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'x';

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
        if (event.target.classList.contains('deleteBtn')) {
            const listItem = event.target.closest('.listItem');
            if (listItem && listContainer.contains(listItem)) {
                listContainer.removeChild(listItem);
            }
        }
    };

    listContainer.removeChild(form);
    listContainer.appendChild(newListItem);

    listContainer.addEventListener('click', removeListItem);
});

export {submitForm};