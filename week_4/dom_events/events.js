// events.js
let tasks = [];

const submitButton = document.getElementById("submitTask");
submitButton.addEventListener("click", function() {
    newTask();
});

const list = document.getElementById('todoList');
list.addEventListener('click', function(event) {
    manageTasks(event);
});

function renderTasks(tasks) {
    const todoList = document.getElementById('todoList');
    let listToDisplay = '';

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        listToDisplay += `<li ${task.completed ? 'class="strike"' : ''}>
            <p>${task.detail}</p>
            <div>
                <span data-function="delete">❎</span>
                <span data-function="complete">✅</span>
            </div>
        </li>`;
    }

    todoList.innerHTML = listToDisplay;
}

function newTask() {
    var newTask = { detail: "", completed: false };
    const input = document.getElementById('todo');

    newTask.detail = input.value;
    tasks.push(newTask);

    renderTasks(tasks);
}

function removeTask(taskElement) {
    // Note the use of Array.filter to remove the element from our task array
    // Notice also how we are using taskElement instead of document as our starting point?
    // This will restrict our search to the element instead of searching the whole document.
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );

    // this line removes the HTML element from the DOM
    taskElement.remove();
}

function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(event) {
    const target = event.target;
    const parentLiElement = target.closest('li');

    if (!target.dataset.function) {
        return;
    }

    if (target.dataset.function === 'complete') {
        completeTask(parentLiElement);
    } else if (target.dataset.function === 'delete') {
        removeTask(parentLiElement);
    }
}

// Add your event listeners here
// We need to attach listeners to the submit button and the list. Listen for a click, call the 'newTask' function on submit and call the 'manageTasks' function if either of the icons are clicked in the list of tasks.
