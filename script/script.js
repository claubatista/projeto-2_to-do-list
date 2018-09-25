const tarefaInput = document.getElementById("listaTarefaInput");
const boxTarefas = document.querySelector(".tarefa__caixa");

const botao = document.querySelector(".tarefa__botao");
    botao.addEventListener("click", function(evento){
        evento.preventDefault()

const tarefasItens = document.createElement("div");   
    tarefasItens.className = "tarefa__itens";
    tarefasItens.innerHTML = `<p> ${tarefaInput.value} </p>`
    boxTarefas.appendChild(tarefasItens);

const botaoExcluir = document.createElement("button");
    botaoExcluir.className = "botao__excluir";
    botaoExcluir.innerHTML = `<button class="botao__excluir">&times;</button>`
    boxTarefas.appendChild(botaoExcluir);

    if(tarefaInput.value === undefined || tarefaInput.value === null || tarefaInput.value === "" || tarefaInput.value === " "){
        tarefaInput.focus();
        return false;
    }  

    botaoExcluir.addEventListener("click", function(evento){
    evento.preventDefault();
    console.log("funciona")

    tarefasItens.remove();
    botaoExcluir.remove();
    

})   

}) 