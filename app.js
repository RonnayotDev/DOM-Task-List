const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearTasks = document.querySelector(".clear-tasks");
const Taskinput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners() {
  form.addEventListener("submit", addTask);

  taskList.addEventListener("click", removeTask);

  clearTasks.addEventListener("click", clearTask);
}

function addTask(e) {
  if (Taskinput.value === "") {
    alert("Plese Add a Task");
  }

  const li = document.createElement("li");
  li.className = "collection-item";

  const textNode = document.createTextNode(Taskinput.value);
  li.appendChild(textNode);

  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  link.innerHTML = '<i class="material-icons">delete</i>';


  li.appendChild(link);

  taskList.appendChild(li);

  Taskinput.value = "";

  console.log(li);

  e.preventDefault();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
  }
}
function clearTask() {
  taskList.innerHTML = "";
}
