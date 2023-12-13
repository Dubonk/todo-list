import "../styles/formStyling.css";

const addToList = function () {
  const listContent = document.getElementById("listTab");
  // Create form element
  const form = document.createElement("form");

  // Create input for title
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title: ";
  const titleInput = document.createElement("input");
  titleInput.setAttribute("type", "text");
  titleInput.setAttribute("name", "title");
  titleInput.setAttribute("placeholder", "Title");
  form.appendChild(titleInput);

  // Create input for notes
  const notesLabel = document.createElement("label");
  notesLabel.textContent = "Notes: ";
  const notesInput = document.createElement("textarea");
  notesInput.setAttribute("placeholder", "Notes:");
  notesInput.setAttribute("name", "notes");
  form.appendChild(notesInput);

  // Create input for due date
  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date: ";
  const dueDateInput = document.createElement("input");
  dueDateInput.setAttribute("type", "date");
  dueDateInput.setAttribute("name", "dueDate");
  form.appendChild(dueDateInput);

  // Append inputs to the form
  //   form.appendChild(titleLabel);
  //   form.appendChild(notesLabel);
  //   form.appendChild(dueDateLabel);

  // Get the element with ID 'listContent' and append the form to it
  listContent.appendChild(form);
};
export { addToList };
