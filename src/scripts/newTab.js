import "../styles/buttons.css";
import { createList } from "./listTemplate";
import del from '../svg/delete.svg';

const createTab = function () {
  const projectsTab = document.getElementById("projectsTab");
  const addTabBtn = document.getElementById("addTabBtn");
  const tabsContent = {};
  const deleteSvg = new Image();
  deleteSvg.classList.add('deleteTab');
  deleteSvg.src = del;

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
            const deleteSvg = new Image();
            deleteSvg.classList.add('deleteTab');
            deleteSvg.src = del;
            const deleteTab = document.createElement('div');
            deleteTab.appendChild(deleteSvg);
            
            let newTab = document.createElement("h3");
            newTab.classList.add("userProject");
            newTab.textContent =
              textField.value.charAt(0).toUpperCase() +
              textField.value.slice(1);
            
            
            newTab.appendChild(deleteTab); 
            deleteSvg.addEventListener('click', function (event) {
              if (event.target.classList.contains('deleteTab')) {
                const tabToDelete = event.target.closest('.userProject');
            
                if (tabToDelete) {
                  const tabNameToDelete = tabToDelete.textContent;
                  tabToDelete.remove();
            
                  const listToDelete = document.getElementById(tabNameToDelete);
                  if (listToDelete) {
                    listToDelete.remove();
                  }
            
                  delete tabsContent[tabNameToDelete];
                }
              }
            });

            
            projectsTab.insertBefore(newTab, addTabBtn);
            tabsContent[newTab.textContent] = [];
            projectsTab.removeChild(textField);
            createList(newTab);
          }
        }
      });
    }
  });


  deleteSvg.addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteTab')) {
      
      const tabToDelete = event.target.closest('.userProject');

      if (tabToDelete) {
        const tabNameToDelete = tabToDelete.textContent;
        tabToDelete.remove();

        const listToDelete = document.getElementById(tabNameToDelete);
        if (listToDelete) {
          listToDelete.remove();
        }

        delete tabsContent[tabNameToDelete];
      }
    }
  });


  const deleteTab = document.createElement('div');
  deleteTab.appendChild(deleteSvg);
  
  let defaultTab = document.createElement('h3');
  defaultTab.textContent = "Today";
  defaultTab.classList.add('userProject');
  defaultTab.appendChild(deleteTab);
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
