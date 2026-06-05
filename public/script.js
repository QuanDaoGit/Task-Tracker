const addTaskButton = document.getElementById('add-task-btn');
const toggleListButton = document.getElementById('toggle-list-btn');
const toggleCompletedTaskButton = document.getElementById('toggle-complete-task-btn');
const taskList = document.getElementById('task-list');
const completeTaskList = document.getElementById('complete-task-list');
const taskTemplate = document.getElementById('task-item-template');
const completeTaskTemplate = document.getElementById('complete-task-item-template');

let taskCounter = 1;
let completeTaskCounter = 1;
let activeTaskDatabase = [];
let completeTaskDatabase = [];

addTaskButton.addEventListener('click', () => {
    const clone = taskTemplate.content.cloneNode(true);

    const taskIdLabel = clone.querySelector('.id');

    taskIdLabel.innerText = `Task #${taskCounter}`;
    taskList.appendChild(clone);
    taskCounter++;
});

toggleListButton.addEventListener('click', () => {
    taskList.classList.toggle('is-hidden');
});

toggleCompletedTaskButton.addEventListener('click', () => {
    completeTaskList.classList.toggle('is-hidden');
});

taskList.addEventListener('click', (event) => {
    const removeBtn = event.target.closest('.remove-task-btn');
    const completeBtn = event.target.closest('.complete-task-btn');

    if (removeBtn) {
        const matchingTask = removeBtn.closest('.task-item');
        matchingTask.remove();
    }

    if (completeBtn) {
        const completedTask = completeBtn.closest(".task-item");
        const taskInput = completedTask.querySelector('.input-field');
        const taskText = taskInput.value;

        const clone = completeTaskTemplate.content.cloneNode(true);

        const taskIdLabel = clone.querySelector(".id");
        taskIdLabel.innerText = `#${completeTaskCounter} Completed`;
        completeTaskCounter++;

        const completeTaskText = clone.querySelector(".complete-task-text");
        completeTaskText.innerText = taskText;

        completeTaskList.append(clone);

        activeTaskDatabase.push(taskText);
        completedTask.remove();
    }
});

