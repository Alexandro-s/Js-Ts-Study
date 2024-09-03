// const inputTarefa = document.querySelector('.input-nova-tarefa');
// const btnTarefa = document.querySelector('.btn-add-tarefa');
// const tarefas = document.querySelector('.tarefas');

// // Cria um novo elemento Li 
// function criaLi() {
//     const li = document.createElement('li');
//     return li;
// }

// // Limpa o campo de entrada de texto
// function limpaInput() {
//     inputTarefa.value = '';
//     inputTarefa.focus();
// }

// // Cria uma nova tarefa
// function criaTarefa(textoInput) {
//     const li = criaLi();
//     li.innerText = textoInput;
//     tarefas.appendChild(li);
//     limpaInput();
//     criaBtnApagar(li);
//     salvaTarefas();
// }

// // Cria um botão para apagar as tarefas
// function criaBtnApagar(li) {
//     const btnApagar = document.createElement('button');
//     btnApagar.innerText = 'Apagar';
//     btnApagar.setAttribute('class', 'apagar');
//     li.appendChild(btnApagar);
// }

// // Salva as tarefas no localStorage do navegador 
// function salvaTarefas() {
//     const liTarefas = tarefas.querySelectorAll('li');
//     const listaDetarefas = [];

//     for (let tarefa of liTarefas) {
//         let tarefaTexto = tarefa.textContent; 
//         tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
//         listaDetarefas.push(tarefaTexto);
//     }
//     const tarefasJSON = JSON.stringify(listaDetarefas); 
//     localStorage.setItem('tarefas', tarefasJSON);
// }

// function addTarefasSalvas() {
//     const tarefas = localStorage.getItem('tarefas');
//     if (tarefas) {
//         const listaDeTarefas = JSON.parse(tarefas);
//         for (let tarefa of listaDeTarefas) {
//             criaTarefa(tarefa);
//         }
//     }
// }

// inputTarefa.addEventListener('keypress', (e) => {
//     if (e.keyCode === 13) { 
//         if (inputTarefa.value) {
//             criaTarefa(inputTarefa.value); 
//         }
//     }
// });

// btnTarefa.addEventListener('click', () => {
//     if (inputTarefa.value) { 
//         criaTarefa(inputTarefa.value);
//     }
// });

// document.addEventListener('click', (e) => {
//     const el = e.target;
//     if (el.classList.contains('apagar')) {
//         el.parentElement.remove();
//         salvaTarefas();
//     }
// });


// addTarefasSalvas();













































































// const inputTarefa = document.querySelector('.input-nova-tarefa');
// const btnTarefa = document.querySelector('.btn-add-tarefa');
// const tarefas = document.querySelector('.tarefas');


// function criaLi () {
//     const li = document.createElement('li');
//     return li;
// }

// inputTarefa.addEventListener('keypress', (e) => {
//     if(e.keyCode === 13) {
//         if (!inputTarefa.value)  return
//         criaTarefa(inputTarefa.value);

//     }


// });

// function limpaInput () {
//     inputTarefa.value = ' ';
//     inputTarefa.focus();

// }
// function criaTarefa(textoInput) {
//     const li = criaLi();
//     li.innerText = textoInput;
//     tarefas.appendChild(li);
//     limpaInput();
//     criaBtnApagar(li);
//     salvaTarefas();
 
//     }

//     function criaBtnApagar(li) {
//         li.innerText += ' ';
//         let btnApagar = document.createElement('button');
//         btnApagar.innerText = 'Apagar';
//         li.appendChild(btnApagar);
//         btnApagar.setAttribute('class', 'apagar');
//     }

 
    
 
// btnTarefa.addEventListener('click', () => {
//     if (!inputTarefa.value)  return
//      criaTarefa(inputTarefa.value);
// });

// document.addEventListener('click', (e) => {
//     const el = e.target;
//     if (el.classList.contains('apagar')) {
//         el.parentElement.remove();
//         salvaTarefas()
//     }
// } )


// function salvaTarefas () {
//     const liTarefas = tarefas.querySelectorAll('li');

//   const listaDeTarefas = [];

//     for (let tarefa of liTarefas) {
//         let tarefaTexto = tarefa.innerText;
//         tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
//         listaDeTarefas.push(tarefaTexto);
//     }

//     const tarefasJSON = JSON.stringify(listaDeTarefas);
//     localStorage.setItem('tarefas', tarefasJSON);
// }

// function addTarefasSalvas() {
//     const tarefas = localStorage.getItem('tarefas');
//     if (tarefas) {
//         const listaDeTarefas = JSON.parse(tarefas);
//         for (let tarefa of listaDeTarefas) {
//             criaTarefa(tarefa);
//         }
//     }
// }

const inputTarefa = document.querySelector('.input');
const btnTarefa = document.querySelector('.input-nova-tafera');
const tarefas = document.querySelector('.terefas');

// Cria um elemento li

function criaLi() {
const li = document.createElement('li');
return li;
}

// Limpa o campo de input e foca nele novamente.
function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

// Cria uma nova tarefa e formata ela ao formato adequado
function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild('li');
    limpaInput();
    criaBtnApagar(li);
    salvaTarefas();
}

function criaBtnApagar(li) {
    const btnApagar = document.createElement('button');
    btnApagar.innerText = 'Apagar';
    btnApagar.setAttribute('class', 'apagar');
    li.appendChild('bntApagar')




}