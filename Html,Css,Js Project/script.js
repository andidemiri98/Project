function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        const newTask = document.createElement("li");
        newTask.innerHTML = `
            <span>${taskInput.value}</span>
            <div class="actions">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.toggle("completed");
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector("span").innerText;

    taskItem.classList.add("editMode");
    taskItem.innerHTML = `
        <input type="text" value="${taskText}">
        <div class="actions">
            <button onclick="saveTask(this)">Save</button>
            <button class="cancel" onclick="cancelEdit(this)">Cancel</button>
        </div>
    `;
}

function saveTask(button) {
    const taskItem = button.parentElement.parentElement;
    const editedText = taskItem.querySelector("input").value;

    if (editedText.trim() !== "") {
        taskItem.innerHTML = `
            <span>${editedText}</span>
            <div class="actions">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="completeTask(this)">Complete</button>
                <button onclick="deleteTask(this)">Delete</button>
            </div>
        `;
    } else {
        alert("Task cannot be empty. Please enter a valid task.");
    }
}

function cancelEdit(button) {
    const taskItem = button.parentElement.parentElement;
    const originalText = taskItem.querySelector("span").innerText;

    taskItem.innerHTML = `
        <span>${originalText}</span>
        <div class="actions">
            <button onclick="editTask(this)">Edit</button>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;
}
