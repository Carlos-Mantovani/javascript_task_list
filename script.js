var userInput = document.getElementById('userinput');
var button = document.getElementById('enter');
var taskList = document.getElementById('task-list');

function checkInputLength() {
    return (userInput.value.length > 0);
}

function createTask() {
    var task = document.createElement('li');
        task.textContent = userInput.value;
        task.classList.add('task');
        taskList.appendChild(task);
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



