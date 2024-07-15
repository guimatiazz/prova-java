function calcular(){
    let distancia = document.getElementById("distancia").value;

    let consumo = document.getElementById("consumo").value;

    let preco = document.getElementById("preco").value;

    let passageiros = document.getElementById("passageiros").value;

    let gasolinaNessesario = parseFloat(distancia) / parseFloat(consumo);

    let custoTotal = gasolinaNessesario * parseFloat(preco);

    let custoPessoa = custoTotal / parseFloat(passageiros);

    document.getElementById("resultado_gasolina_litros").innerText = gasolinaNessesario.toFixed(1);

    document.getElementById("resultado_custo").innerText = custoTotal.toFixed(1);

    document.getElementById("resultado_custo_pessoa").innerText = custoPessoa.toFixed(1);



}