function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const listItem = document.createElement("li");

  // ✅ Create checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // 📦 Create task text span
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;
  taskSpan.style.marginLeft = "10px";

  // ✅ When checkbox is clicked, toggle 'done' style
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      taskSpan.style.textDecoration = "line-through";
      taskSpan.style.color = "gray";
    } else {
      taskSpan.style.textDecoration = "none";
      taskSpan.style.color = "black";
    }
  });

  // ❌ Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.className = "delete-btn";
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };

  // 📦 Add checkbox, task text, and delete button to the list item
  listItem.appendChild(checkbox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);

  // 🚀 Add list item to the task list
  taskList.appendChild(listItem);

  taskInput.value = ""; // clear input box
}
