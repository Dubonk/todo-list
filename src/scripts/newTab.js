import "../styles/buttons.css";
import { createList, clearContent } from "./listTemplate";

const createTab = function () {
  const projectsTab = document.getElementById("projectsTab");
  const addTabBtn = document.getElementById("addTabBtn");

  addTabBtn.addEventListener("click", () => {
    let textField = document.getElementById("projectTextField");

    if (!textField) {
      textField = document.createElement("input");
      textField.type = "text";
      textField.setAttribute("id", "projectTextField");
      textField.setAttribute("type", "text");
      projectsTab.insertBefore(textField, addTabBtn).focus();

      textField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
          if (textField.value.trim() !== "") {
            let newTab = document.createElement("h3");
            newTab.classList.add("userProject");
            newTab.textContent =
              textField.value.charAt(0).toUpperCase() +
              textField.value.slice(1);

            projectsTab.insertBefore(newTab, addTabBtn);
            projectsTab.removeChild(textField);
          }
        }
      });
    }
  });

  //let newTab = document.getElementsByClassName('userProject');
  projectsTab.addEventListener("click", function (event) {
    if (event.target.classList.contains("userProject")) {
      clearContent();
      createList(event);
    }
  });
};

export { createTab };