const calcular = document.getElementById('calcular');

function montante () {
    const valor = document.getElementById('valor').value;
    const juros = document.getElementById('juros').value;
    const tempo = document.getElementById('tempo').value;
    const cotacao = document.getElementById('cotacao').value;
    const equacao = Math.pow(1.0095, tempo);
    const dolarfinal = (cotacao*equacao).toFixed(2);
    const dolartotal = dolarfinal*valor;
    const jurosreal = juros/100;
    const juros2 = 1+jurosreal;
    const elevacao = Math.pow(juros2,tempo);
    const cima = elevacao-1;
    const baixo = dolartotal*jurosreal;
    const final = (baixo/cima).toFixed(2);


        resultado.textContent = `O valor de investimento em real por mês para obter $${valor} = R$ ${final}`;
        resultado2.textContent = `A cotação do dólar previsto para época é de R$ ${dolarfinal}`;
    }
    



