const inputTarefa = document.getElementById("listaTarefaInput");
const tarefaCaixa = document.querySelector(".tarefa__caixa");

//botao adicionar
const botaoAdd = document.querySelector(".botao__enviar");
    botaoAdd.addEventListener("click", function(evento){
        evento.preventDefault()

// quando o input estiver vazio não o botao enviar não funciona 
if(inputTarefa.value === undefined ||inputTarefa.value === null){
    inputTarefa.focus();
    return false;
} 
// quando o input tiver apenas espaço em branco o input não funciona
const regex = /\w+/ig; 
if(!regex.test(inputTarefa.value)){
    inputTarefa.focus();
    return false;
}

// div que cria o texto e o botao de excluir quando o usuario envia uma nova tarefa.
const itens = document.createElement("div");
    itens.setAttribute("draggable", "true");
    itens.className = "tarefa__itens";
    itens.id = Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
    itens.innerHTML = `<p> ${inputTarefa.value} </p>`
    tarefaCaixa.appendChild(itens);
    itens.style.display = "flex";

itens.addEventListener("dragstart", function(drag){
    drag.dataTransfer.setData("text", drag.target.id)
}) 
itens.addEventListener("dragover", function(e){
    e.preventDefault();
}) 
itens.addEventListener("drop", function(e) {
    let pegou = document.getElementById(e.dataTransfer.getData("text"));
    let soltou = e.target
console.log(soltou.nodeName)
    if(soltou.nodeName === "P" || soltou.nodeName === "BUTTON"){
        soltou = soltou.parentNode
    }
     tarefaCaixa.insertBefore(pegou, soltou.nextSibling)
})     

// apaga o texto na caixa após ele ser enviado
    inputTarefa.value = null; 
    
//função para selecionar e deselecionar um item  
itens.addEventListener("click", function(){
    if(itens.classList.contains("tarefa__itens")){
        itens.classList.remove("tarefa__itens");
        itens.classList.add("tarefa__itens-checked");
    }else{
        itens.classList.remove("tarefa__itens-checked");
        itens.classList.add("tarefa__itens");
    }     
})   

//função para excluir um item
const botaoExcluir = document.createElement("button");
    botaoExcluir.className = "botao__excluir";
    botaoExcluir.innerHTML = `<button class="botao__excluir">&times;</button>`
    itens.appendChild(botaoExcluir);
 
    botaoExcluir.addEventListener("click", function(evento){
    evento.preventDefault();

    itens.remove();
    botaoExcluir.remove();

})

// botao que seleciona todos os itens de uma vez
const checkTudo = document.querySelector(".botao__selecionar-tudo");

// botao que exclui todos os itens de uma vez
const excluirTudo = document.querySelector(".botao__deletar-tudo");

//função que seleciona todos itens
checkTudo.addEventListener("click", function(){
    if(itens.classList.contains("tarefa__itens")){
        itens.classList.remove("tarefa__itens");
        itens.classList.add("tarefa__itens-checked");
    }
})

//função que exclui todos itens
excluirTudo.addEventListener("click", function(){
    if(itens.classList.contains("tarefa__itens-checked")){
      itens.remove();
      botaoExcluir.remove();
    }
})

}) 



