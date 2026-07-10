const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        if(task.completed){
            li.classList.add("completed");
        }

        li.innerHTML = `
            <span>${task.text}</span>

            <div class="actions">

                <button class="complete" onclick="toggleComplete(${index})">
                ✔
                </button>

                <button class="edit" onclick="editTask(${index})">
                ✏
                </button>

                <button class="delete" onclick="deleteTask(${index})">
                🗑
                </button>

            </div>
        `;

        taskList.appendChild(li);

    });

}

addBtn.addEventListener("click", () => {

    const text = taskInput.value.trim();

    if(text===""){
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text:text,
        completed:false
    });

    saveTasks();
    displayTasks();

    taskInput.value="";
});

function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    displayTasks();
}

function editTask(index){

    const updated = prompt("Edit Task", tasks[index].text);

    if(updated!==null && updated.trim()!==""){
        tasks[index].text = updated.trim();
        saveTasks();
        displayTasks();
    }

}

function toggleComplete(index){

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    displayTasks();

}

displayTasks();