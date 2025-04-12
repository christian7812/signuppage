const username = localStorage.getItem("loggedInUser");

if(!username) {
    window.location.href="login.html";
}
document.getElementById('user').textContent = username;

const userData = JSON.parse(localStorage.getItem(username));

function loadTasks(filteredTasks = null){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = "";
    const taskToShow = filteredTasks || userData.tasks;
    taskToShow.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
        ${task}
        <button onclick = "deleteTask(this)" class="delete-btn">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if(task) {
        userData.tasks.push(task);
        localStorage.setItem(username, JSON.stringify(userData));
    }
    taskInput.value ="";
    loadTasks();
}
function deleteTask(button) {
    button.parentElement.remove();
}

function logOut() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}

function searchTask() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const searchedTasks = userData.tasks.filter(task => {
        task.toLowerCase().includes(searchInput);
    });
    loadTasks(searchedTasks);
}
loadTasks();