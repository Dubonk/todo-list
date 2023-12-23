import dele from '../svg/delete.svg';
import check from '../svg/checkmark.svg';

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

    const checkImg = new Image();
    checkImg.classList.add('hidden');
    checkImg.src = check;

    const del = new Image();
    del.classList.add('svg');
    del.classList.add('deleteSvg');
    del.setAttribute('id', 'deleteFromListBtn')
    del.src = dele;

    const markContainer = document.createElement('div');
    markContainer.classList.add('circle');
    markContainer.setAttribute('id', 'markDone');

    const buttonContainer = document.createElement('div');
    buttonContainer.setAttribute('id', 'buttonContainer')
    buttonContainer.appendChild(del)
    buttonContainer.appendChild(markContainer)

    const titleElement = document.createElement('h3');
     titleElement.appendChild(titleTextNode);

     const notesElement = document.createElement('p');
     notesElement.appendChild(notesTextNode);

     const dueDateElement = document.createElement('p');
     dueDateElement.appendChild(dueDateTextNode);

     newListItem.appendChild(titleElement);
     newListItem.appendChild(notesElement);
     newListItem.appendChild(dueDateElement);
     newListItem.appendChild(buttonContainer);

     markContainer.appendChild(checkImg);

     const markComplete = function (event) {
          if (event.target.classList.contains('circle')) {
                checkImg.classList.toggle('hidden');
                checkImg.classList.toggle('shown');
        }
    }

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

    listContainers.addEventListener('click', removeListItem);
    markContainer.addEventListener('click', markComplete);

});

export {submitForm};
