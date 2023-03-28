// Seleciona o id do botão de converter para fahrenheit
var calculo_conversor_celsius_para_fahreinheit = window.document.getElementById("button_conversor_fahrenheit")
var urlAtual = window.location.href // Obtém a URL atual
var links = document.getElementsByTagName("a")// Seleciona todos os links

// Percorre todos os links e verifica se eles correspondem à URL atual
for (var i = 0; i < links.length; i++) {
  if (links[i].href === urlAtual) {
    links[i].classList.add('ativo')
    break
  }
}


calculo_conversor_celsius_para_fahreinheit.addEventListener("click", function() {
    var valor_input_celsius = Number(window.document.getElementById("celsius").value.replace("°", "").replace("C", "").replace("c","").replace(",", "."))
    if (valor_input_celsius == "" ) {
        window.document.getElementById("resultado_conversao_fahrenheit").innerHTML = "Erro! Informe um número."
    }
    else{
        var calculo_conversao_fahreinheit = (((valor_input_celsius * 9) / 5) + 32)
        window.document.getElementById("resultado_conversao_fahrenheit").innerHTML = `A temperatura de ${valor_input_celsius}°C corresponde a ${calculo_conversao_fahreinheit.toFixed(1)}°F` 
    }
})

function conversor_fahrenheit_para_celsius() {
    valor_input_fahrenheit = Number(window.document.getElementById("valor_fahrenheit").value.replace("°", "").replace("F", "").replace("f", "").replace(",", ".")) 
    if (valor_input_fahrenheit == "") {
        window.document.getElementById("resultado_conversao_celsius").innerHTML = "Erro! Informe um número."
    }
    else {
        var calculo_conversao_celsius = ((valor_input_fahrenheit - 32) / 9 ) * 5
        window.document.getElementById("resultado_conversao_celsius").innerHTML = `A temperatura de ${valor_input_fahrenheit}°F corresponde a ${calculo_conversao_celsius.toFixed(1)}°C`
    }
}





