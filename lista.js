const frm = document.querySelector("form"); // obtém elementos da página
const dvQuadro = document.querySelector("#divQuadro");

frm.addEventListener("submit", (e) => {
    e.preventDefault(); // evita envio do form
    console.log("Adicionar foi clicado");// mensagem no console
    const tarefa = frm.inTarefa.value;// obtém o conteúdo digitado
    
    const h5 = document.createElement ("h5");// cria o elemento HTML h5
    const texto = document.createTextNode(tarefa);// cria um texto
    h5.appendChild(texto); // define que texto será filho de h5
    dvQuadro.appendChild(h5); // // e que h5 será filho de divQuadro

frm.inTarefa.value ="";// limpa o campo de edição
frm.inTarefa.focus();// joga o cursor neste campo
});

frm.btSelecionar.addEventListener("click", () => { 
    const tarefas = document.querySelectorAll("h5") //envia um unico evento no alvo retorna os elementos do documento que correspondem a uma classe de CSS
  
    if (tarefas.length == 0) {
      alert("Não há tarefas para selecionar") //código de como a tarefa será executada      
      return                                        
    }
  
    let aux = -1                   
  
   
    for (let i = 0; i < tarefas.length; i++) {
      
      if (tarefas[i].className == "tarefa-selecionada") {
        tarefas[i].className = "tarefa-normal"      
        aux = i                                     
        break                                       
      }
    }
  
    
    if (aux == tarefas.length - 1) {
      aux = -1
    }
  
    tarefas[aux + 1].className = "tarefa-selecionada" 
  })
  
  frm.btRetirar.addEventListener("click", () => { //mantém o evento conforme adicionado
    const tarefas = document.querySelectorAll("h5")//Retorna uma lista de elementos presentes no documento h5
  
    let aux = -1               
  
    
    tarefas.forEach((tarefa, i) => {
      if (tarefa.className == "tarefa-selecionada") {  
        aux = i
        console.log(i) //executa uma dada função em cada elemento de um array no console.                                   
      }
    })
  
    if (aux == -1) {     
      alert("Selecione uma tarefa para removê-la...")
      return  
    }
  
    if (confirm(`Confirma Exclusão de "${tarefas[aux].innerText}"?`)) {
      dvQuadro.removeChild(tarefas[aux]) //códigos de exeção       
    }
  })
  
  frm.btGravar.addEventListener("click", () => { //mantém o evento conforme adicionado
    const tarefas = document.querySelectorAll("h5")///Retorna uma lista de elementos presentes no documento h5
  
    if (tarefas.length == 0) {
      alert("Não há tarefas para serem salvas")      
      return                                         
    }
  
    let dados = ""                            
    tarefas.forEach(tarefa => { 
      dados += tarefa.innerText + ";"         
    })
  
    
    localStorage.setItem("tarefasDia", dados.slice(0, -1))
  
    
    if (localStorage.getItem("tarefasDia")) {//passa o nome da chave e retorna um valor
      alert("Ok! Tarefas Salvas")
    }
  })
  
  window.addEventListener("load", () => { //envia  
    
    if (localStorage.getItem("tarefasDia")) {
      
      const dados = localStorage.getItem("tarefasDia").split(";")
  
      // percorre os dados armazenados em localStorage
      dados.forEach(dado => {
        const h5 = document.createElement("h5")      
        const texto = document.createTextNode(dado)  
        h5.appendChild(texto)                      
        dvQuadro.appendChild(h5)                   
      })
    }
  })
