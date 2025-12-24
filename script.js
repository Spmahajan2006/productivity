let taskList = document.getElementById("taskList");

// Load tasks when page opens
function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || "";
    updateCounter();
}

// Add new task
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this)">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    saveTasks();
    updateCounter();
}

// Delete task
function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
    updateCounter();
}

// Mark task as completed
function toggleTask(task) {
    task.classList.toggle("completed");
    saveTasks();
}

// Clear all tasks
function clearAll() {
    taskList.innerHTML = "";
    localStorage.clear();
    updateCounter();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

// Update task counter
function updateCounter() {
    let totalTasks = taskList.children.length;
    document.getElementById("counter").innerText =
        "Total Tasks: " + totalTasks;
}

// Call loadTasks on start
loadTasks();
