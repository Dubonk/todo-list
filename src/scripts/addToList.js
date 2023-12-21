import "../styles/formStyling.css";
import "../styles/template.css";
import { submitForm } from "./submitForm";

const addToList = function () {
  //const listContent = document.getElementById("listTab");
  const listContainer = document.querySelector('.listContainer');
  // Create form element
  const form = document.createElement("form");
  form.setAttribute('id', 'formId');

  // Create input for title
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title: ";
  const titleInput = document.createElement("input");
  titleInput.required = true;
  titleInput.setAttribute('id', 'formTitle');
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("placeholder", "Title");
  form.appendChild(titleInput);

  // Create input for notes
  const notesLabel = document.createElement("label");
  notesLabel.textContent = "Notes: ";
  const notesInput = document.createElement("textarea");
  notesInput.setAttribute('id', 'formNotes');
  notesInput.setAttribute("placeholder", "Notes:");
  notesInput.setAttribute("name", "notes");
  form.appendChild(notesInput);

  // Create input for due date
  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date: ";
  const dueDateInput = document.createElement("input");
  dueDateInput.required = true;
  dueDateInput.setAttribute('id', 'formDate');
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("name", "dueDate");
  form.appendChild(dueDateInput);

  // Create submit button
  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('id', 'submitFormBtn');
  submitBtn.textContent = 'Submit';
  form.appendChild(submitBtn);

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    submitForm();
  })
  listContainer.appendChild(form);
};
export { addToList };
