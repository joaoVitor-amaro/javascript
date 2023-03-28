function calcular() {
    var valor_moeda_input = Number(window.document.getElementById('valor_moeda').value.replace(",","."))
    var valor_dolar = valor_moeda_input * 5.17
    window.document.getElementById('resultado').innerHTML = `O valor ${valor_moeda_input.toLocaleString("pt-br", {style: "currency", currency:"BRL"})} equivale ${valor_dolar.toLocaleString("pt-br", {style: "currency", currency: "USD"})}`
    
}