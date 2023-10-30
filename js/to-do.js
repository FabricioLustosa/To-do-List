const localStorageKey = "to-do-list-fl";

function validadeIfExistNewTask() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]"); // obtém os dados da lista de tarefas do localStorage, converte esses dados em um objeto JavaScript e, se não houver dados salvos, inicia a variável values com um array vazio.
  let inputValue = document.getElementById("input").value;
  let exists = values.find((x) => x.name == inputValue); //verifica se já existe uma tarefa com o mesmo nome daquilo que foi digitado no campo de entrada (inputValue).
  return !exists ? false : true;
}

function addTask() {
  let input = document.getElementById("input");
  input.style.border = "";

  const textAlert = document.querySelector("#text-alert");
  // validação
  if (!input.value) {
    input.style.border = "2px solid red";
    // Criar um novo elemento para a tarefa
    textAlert.innerHTML = "Digite um valor válido";
    textAlert.style.color = "#fb3640";
    textAlert.style.backgroundColor = "white";
  } else if (validadeIfExistNewTask()) {
    textAlert.innerHTML = "Já existe uma task com essa descrição";
  } else {
    // incrementando no loocal storage
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]"); //JSON.parse() usado para converter string json em objetos javascript. Isso possibilitou que eu usasse o .push no values.
    values.push({
      name: input.value,
    });
    localStorage.setItem(localStorageKey, JSON.stringify(values)); //.setItem () é uma chamada ao método setItem do localStorage.
    //JSON.stringfy -> Antes de armazenar os dados, eles são convertidos em uma string JSON usando a função JSON.stringify()
    showValues();

    textAlert.innerHTML = "Aqui abaixo vai aparecer suas tarefas...";
    textAlert.style.color = "white";
    textAlert.style.backgroundColor = "#fb3640";
    input.value = "";
  }
  input.value = "";
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let list = document.getElementById("elements-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li id="list-elements">${values[i]["name"]}<button id='btn-ok' onclick= "removeItem('${values[i]["name"]}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
    <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
  </svg></botton></li>`;
  }
}

function removeItem(data) {
  let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  let index = values.findIndex((x) => x.name == data);
  values.splice(index, 1);
  localStorage.setItem(localStorageKey, JSON.stringify(values));
  showValues();
}

showValues();
