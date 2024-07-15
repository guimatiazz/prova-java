function calcular(){
    let valorVenda = document.getElementById("venda").value;

    let pagamento = document.getElementById("pagamento").value;

    let desconto = parseFloat(valorVenda) * 0.05;

    let totalVenda = document.getElementById("resultado_venda");

    if(pagamento == "" || pagamento == "") {
        alert("Preenche todos os dados para continuar sua compra!");
    } else {
        if (pagamento == 'avista') {
            totalVenda.innerText = parseFloat(valorVenda) - desconto; 
        } else {
            totalVenda.innerText = parseFloat(valorVenda); 
        }
    }
      
    }
