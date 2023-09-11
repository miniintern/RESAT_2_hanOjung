function addTask() {
    const taskList = document.getElementById("task-list");

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.placeholder = "할 일 입력";

    const prioritySelect = document.createElement("select");
    const priorities = ["낮음", "보통", "높음", "아주 높음"];
    for (const priority of priorities) {
        const option = document.createElement("option");
        option.text = priority;
        prioritySelect.add(option);
    }

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    taskItem.appendChild(checkBox);
    taskItem.appendChild(taskInput);
    taskItem.appendChild(prioritySelect);
    taskList.appendChild(taskItem);
}
