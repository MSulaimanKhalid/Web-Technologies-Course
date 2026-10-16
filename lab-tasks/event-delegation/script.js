var inputBtn = document.getElementById("taskButton");
var inputField = document.getElementById("taskInput");
var main = document.getElementById("main1");
inputBtn.addEventListener("click", addTask);
main1.addEventListener("click", removeTask);

function addTask() {
  let newTask = inputField.value;
  let taskItem = document.createElement("div");
  let taskDeleteBtn = document.createElement("button");
  taskDeleteBtn.textContent = "Delete";
  taskItem.classList.add("taskItem");
  taskItem.textContent = newTask;
  taskDeleteBtn.classList.add("deleteBtn");
  taskItem.appendChild(taskDeleteBtn);
  document.querySelector("main").appendChild(taskItem);
  inputField.value = "";
}

function removeTask(e) {
  if (e.target.classList.contains("deleteBtn")) {
    let self = e.target.parentElement;
    main.removeChild(self);
  }
}
