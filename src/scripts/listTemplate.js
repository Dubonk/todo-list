import { addToList } from "./addToList";

const createList = function (event) {
  const listTab = document.getElementById("listTab");

  const listTitle = document.createElement("h2");
  listTitle.textContent = event.target.textContent + " " +'List';

  const addToListBtn = document.createElement("button");
  addToListBtn.setAttribute("id", "addToList");
  addToListBtn.textContent = "Add to list";

  const listContainer = document.createElement('div');
  listContainer.setAttribute('id', 'listContainer');

  listTab.appendChild(listTitle);
  listTab.appendChild(addToListBtn);
  listTab.appendChild(listContainer);

  addToListBtn.addEventListener("click", () => {
const formExists = document.getElementById('formId');

if(!formExists) {
    addToList();
} else {
  console.log('form already present');
}
  });
};

const clearContent = function () {
  const content = document.getElementById("listTab");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
};

export { createList, clearContent };
