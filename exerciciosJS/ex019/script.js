var numberSorteado = Math.floor(Math.random() * 20)
var vidas = 5
var contPonts = 0
var vidasContent = document.getElementById("vidas")
var pontosContent = document.getElementById("pontuacao")
var resultado = document.getElementById("resultado")
vidasContent.innerText = vidas
pontosContent.innerText = contPonts
document.getElementById("btn").addEventListener("click", function() {
    var numberInput = Number(document.getElementById("inumber").value) 
    if (numberInput > numberSorteado) {
        resultado.innerHTML = "Errou!! Um número menor"
        resultado.style.color = "red"
        vidas--
    } else if (numberInput < numberSorteado) {
        resultado.innerHTML = "Errou!! Um número maior"
        resultado.style.color = "red"
        vidas--
    } else {
        resultado.innerHTML = "Parabéns, você acertou! Aperte em 'Tente novamente'"
        resultado.style.color = "green"
        contPonts++
    }
    if (vidas === 0) {
        resultado.innerHTML = "Você perdeu, tente novamente"
        resultado.style.color = "red"
        contPonts = 0
    }
    pontosContent.innerText = contPonts
    vidasContent.innerText = vidas
})


document.getElementById("nova").addEventListener("click", function() {
    numberSorteado = Math.floor(Math.random() * 20)
    vidas = 5
    vidasContent.innerText = vidas
    resultado.innerHTML = ""
})