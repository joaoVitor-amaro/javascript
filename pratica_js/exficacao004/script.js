var calculo_desconto = window.document.querySelector("input#button_calcular_desconto")
calculo_desconto.addEventListener('click', () => {
    var valor_da_produto = Number(window.document.querySelector("input#input_valor").value.replace(",", ".").replace("R$", ""))
    var valor_porcentagem = Number(window.document.querySelector("input#input_desconto").value.replace("%", ""))
    if (valor_porcentagem > 100) {
        alert('erro')
    } 
    else {
        var resultado_porcentagem = (valor_da_produto * (100 - valor_porcentagem)) / 100
        window.document.getElementById("resultados").innerHTML = `O produto vai custar ${resultado_porcentagem.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}, com o desconto de ${valor_porcentagem}%.`
    }
})