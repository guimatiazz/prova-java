let convidados = [];


function cadastrarConvidados() {
    const nomeConvidado = document.getElementById("convidado").value.trim();
    if (nomeConvidado!== "") {
        if (convidados.length < 10) {
            convidados.push(nomeConvidado);
            document.getElementById("convidado").value = "";
            atualizarListaConvidados();
        } else {
        alert("Ops...Esta lista de convidados ja esta cheia! Não é possivel cadastrar mais de 10 nomes!")
        }
    } 
}


function removerConvidados() {
    const nomeConvidado = prompt("Qual nome você deseja remover desta lista?");
    if (nomeConvidado!== null) {
        const indice = convidados.indexOf(nomeConvidado);
        if (indice!== -1) {
            convidados.splice(indice, 1);
            atualizarListaConvidados();
        } else {
            alert("Este convidado não foi encontrado!");
        }
    }
}


function mostrarConvidados() {
    atualizarListaConvidados();
}


function atualizarListaConvidados() {
    const listaConvidados = document.getElementById("lista_convidados");
    listaConvidados.innerHTML = "";
    convidados.forEach((convidado, indice) => {
      const item = document.createElement("li");
      item.textContent = `${indice + 1}. ${convidado}`;
      listaConvidados.appendChild(item);
    });
  }
  


document.querySelector("button[type='button']:nth-child(1)").addEventListener("click", cadastrarConvidados);
document.querySelector("button[type='button']:nth-child(2)").addEventListener("click", removerConvidados);
document.querySelector("button[type='button']:nth-child(3)").addEventListener("click", mostrarConvidados);