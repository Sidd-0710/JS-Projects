document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task;
        span.onclick = () => editTask(index);

        const editBtn = document.createElement("button");
        editBtn.textContent = "✏️";
        editBtn.className = "edit";
        editBtn.onclick = () => editTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.className = "delete";
        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById("taskInput");
    let task = input.value.trim();
    
    if (task) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        input.value = "";
        loadTasks();
    } else {
        alert("Please enter a task!");
    }
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let newTask = prompt("Edit your task:", tasks[index]);

    if (newTask !== null && newTask.trim() !== "") {
        tasks[index] = newTask.trim();
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
    }
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
}
