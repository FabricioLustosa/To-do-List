function addTask() {
  const inputElement = document.querySelector("#input").value;
  const textAlert = document.getElementById("text-alert");
  const tasksList = document.querySelector("#tasks-list");

  if (inputElement === "") {
    // Criar um novo elemento para a tarefa
    textAlert.innerHTML = "Digite um valor válido";
    textAlert.style.color = "#fb3640";
    textAlert.style.backgroundColor = "white";
  } else {
    const newTask = document.createElement("div");
    newTask.textContent = inputElement.value;
    tasksList.appendChild(newTask);

    textAlert.innerHTML = "Aqui abaixo vai aparecer suas tarefas...";
    textAlert.style.color = "white";
    textAlert.style.backgroundColor = "#fb3640";
    inputElement.value = "";
  }
}
