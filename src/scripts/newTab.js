import "../styles/buttons.css";
import { createList } from "./listTemplate";

const createTab = function () {
  const projectsTab = document.getElementById("projectsTab");
  const addTabBtn = document.getElementById("addTabBtn");
  const tabsContent = {};

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
            tabsContent[newTab.textContent] = [];
            projectsTab.removeChild(textField);
            createList(newTab);
          }
        }
      });
    }
  });

  let defaultTab = document.createElement('h3');
  defaultTab.textContent = "Today";
  defaultTab.classList.add('userProject');
  projectsTab.insertBefore(defaultTab, addTabBtn);
  tabsContent["Today"] = [];
  createList(defaultTab);

  projectsTab.addEventListener("click", function (event) {
    if (event.target.classList.contains("userProject")) {

      const clickedTabName = event.target.textContent;
      const clickedTabElement = document.getElementById(clickedTabName);
      if (clickedTabElement) {
        
        // Loop through all tabs and hide their corresponding lists
        Object.keys(tabsContent).forEach(tabName => {
          const tabElement = document.getElementById(tabName);
          if (tabElement) {
            tabElement.style.display = tabName === clickedTabName ? 'flex' : 'none';
          }
        });
      }
    }
  });
};

export { createTab };
