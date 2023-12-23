import { addToList } from "./addToList";
import addSvg from "../svg/add.svg";
// create the whole list tab instead of just title and container


const createList = function (newTab) {
  const content = document.getElementById('content');
  const listTab = document.createElement('div');
  listTab.classList.add('listTab');
  listTab.setAttribute('id', newTab.textContent);
  const listTitle = document.createElement("h2");
  listTitle.textContent = newTab.textContent + " " +'List';

  const addIcon = new Image();
  addIcon.classList.add('svg');
  addIcon.setAttribute('id', 'showFormBtn')
  addIcon.src = addSvg;

  const addToListBtn = document.createElement("button");
  addToListBtn.classList.add('addToList');
  addToListBtn.appendChild(addIcon);

  const listContainer = document.createElement('div');
  listContainer.classList.add('listContainer');
  listContainer.setAttribute('id', newTab.textContent + "listContainer");

  listTab.appendChild(listTitle);
  listTab.appendChild(addToListBtn);
  listTab.appendChild(listContainer);
  content.appendChild(listTab);

  addToListBtn.addEventListener("click", () => {
const formExists = document.getElementById('formId');

if(!formExists) {
    addToList(listContainer);
} else {
  console.log('form already present');
}
  });
};

export { createList, };
