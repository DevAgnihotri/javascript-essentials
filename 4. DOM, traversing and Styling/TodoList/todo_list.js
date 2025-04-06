const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const checkalltasksBtn = document.getElementById("checkalltasksBtn");
const uncheckalltasksBtn = document.getElementById("uncheckalltasksBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    if (tasks.length === 0) {
        alert('No tasks to clear');
    } else {
        tasks = tasks.filter(task => !task.completed);
        displayTasks();
    }
}

function clearAllTasks() {
    tasks = [];
    displayTasks();
}

function checkalltasks() {
    tasks.forEach(task => task.completed = true);
    displayTasks();
}

function uncheckedalltasks() {
    tasks.forEach(task => task.completed = false);
    displayTasks();
}

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks);
checkalltasksBtn.addEventListener("click", checkalltasks);
uncheckalltasksBtn.addEventListener("click", uncheckedalltasks);