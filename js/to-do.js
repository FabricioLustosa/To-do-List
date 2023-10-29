function addTask() {
  const inputElement = document.querySelector("#input").value;
  const tasksDiv = document.getElementById("tasks-list");
  const textAlert = document.getElementById("text-alert");
  const taskList = document.querySelector("task-list");
  if (inputElement === "") {
    // Criar um novo elemento para a tarefa
    textAlert.innerHTML = "Digite um valor válido";
  } else {
    taskList.textContent = inputElement;
  }
}
