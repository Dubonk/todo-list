import "../styles/buttons.css";
import { createList, clearContent } from "./listTemplate";

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
          }
        }
      });
    }
  });

  let defaultTab = document.createElement('h3');
  defaultTab.textContent = 'Market';
  defaultTab.classList.add('userProject');
  projectsTab.insertBefore(defaultTab, addTabBtn);
  tabsContent['Market'] = [];

  projectsTab.addEventListener("click", function (event) {
    if (event.target.classList.contains("userProject")) {
      const clickedTab = event.target.textContent;
      
      // Hide all content
      Object.values(tabsContent).forEach(contentArray => {
        contentArray.forEach(content => {
          content.style.display = 'none';
        });
      });

      // Show content for the clicked tab
      tabsContent[clickedTab].forEach(content => {
        content.style.display = 'block';
      });

      clearContent();
      createList(clickedTab);
    }
  });
};

export { createTab };
