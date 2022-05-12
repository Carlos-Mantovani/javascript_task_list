var userInput = document.getElementById('userinput');
var button = document.getElementById('enter');
var taskList = document.getElementById('task-list');
var task = document.getElementsByClassName('task');

function checkInputLength() {
    return (userInput.value.length > 0);
}

function markAsDone(e) {
    e.target.classList.toggle('done');
}

function removeTask(e) {
    e.target.parentElement.remove();
}

function createTask() {
    var task = document.createElement('li');
    task.textContent = userInput.value;
    task.classList.add('task');
    task.addEventListener('click', markAsDone);
    var delButton = document.createElement('button');
    delButton.classList.add('del_btn');
    delButton.textContent = 'delete';
    delButton.addEventListener('click', removeTask);
    taskList.appendChild(task);
    task.appendChild(delButton);
    userInput.value = '';
}

function addTaskAfterClick() {
    if (checkInputLength()) {
        createTask();
    }
}

function addTasAfterKeypress(e) {
    if (checkInputLength() && e.keyCode == 13) {
        createTask();
    }
}

button.addEventListener('click', addTaskAfterClick);

userInput.addEventListener('keypress', addTasAfterKeypress);


