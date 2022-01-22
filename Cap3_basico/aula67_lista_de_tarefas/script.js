const inputTarefa = document.querySelector('.input-nova-tarefa')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

const criaLi = ()=> document.createElement('li');

function limpaInput(){
    inputTarefa.value = '';
};

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li)
    limpaInput();
    salvarTarefa();
}

document.addEventListener('click', e=>{
    const elemento = e.target;

    if(elemento.classList.contains('btn-add-tarefa')){
        e.preventDefault();
        if(!inputTarefa.value){
            inputTarefa.focus(); 
            return
        };
        criaTarefa(inputTarefa.value);
    }
    if(elemento.classList.contains('btn-apagar-tarefa')){
        elemento.parentElement.remove();
        salvarTarefa();
    }
});

function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa);
    }
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute('class', 'btn-apagar-tarefa');
}

inputTarefa.addEventListener('keypress', e =>{
    if(e.keyCode === 13){
        if(!inputTarefa.value){
            inputTarefa.focus();
            return
        };
        criaTarefa(inputTarefa.value);
    }
});

adicionaTarefasSalvas();
