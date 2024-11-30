let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    
    if (task) {
        tasks.push({ text: task, completed: false });
        taskInput.value = ''; 
        displayTasks();
    }
}

function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        li.innerHTML = `
            ${task.text}
            <div>
                <button onclick="toggleTask(${index})">✓</button>
                <button class="remove-btn" onclick="removeTask(${index})">x</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
