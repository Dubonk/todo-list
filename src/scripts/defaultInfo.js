import '../styles/template.css';

const createTemplate = (function () {
    const title = document.createElement('div');
    title.setAttribute('id', 'title');

    const titleText = document.createElement('h1');
    titleText.textContent = 'Todo List';

    title.appendChild(titleText);

    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const projectsTab = document.createElement('div');
    projectsTab.setAttribute('id', 'projectsTab');

    const projectTitle = document.createElement('h2');
    projectTitle.textContent = 'Projects';

    projectsTab.appendChild(projectTitle);

    const listTab = document.createElement('div');
    listTab.setAttribute('id', 'listTab');

    const listTitle = document.createElement('h2');
    listTitle.textContent = "List Name"; // The list name might be added in another module so it can change when a new project is selected.


    listTab.appendChild(listTitle);

    document.body.appendChild(title);
    document.body.appendChild(content);
    content.appendChild(projectsTab);
    content.appendChild(listTab);
});


export {createTemplate};