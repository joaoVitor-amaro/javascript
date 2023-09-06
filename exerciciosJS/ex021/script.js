document.getElementById("btn_cont").addEventListener("click", function() {
    var contInicio = document.getElementById("inicioCont").value
    var contFim = document.getElementById("iFimCont").value
    var contIncremente =document.getElementById("ipassoCont").value
    var resultado = document.getElementById("resultado")
    //Verificar se tem campos não preenchdidos//
    if (contInicio === "" || contFim === "" || contIncremente === "") {
        resultado.innerHTML = "Impossivel contar"
    } else { //contagem//
        resultado.innerHTML = "Bora contar"
        //contagem decrescente//
        if (Number(contFim) < Number(contInicio)) { 
            //passo -1 caso o incremento seja maior ou igual a 0 
            if (Number(contIncremente) >= 0) {
                alert("Passo inválido! Considerando PASSO -1")
                for (var i = Number(contInicio); i >= Number(contFim); i--) {
                    resultado.innerHTML += ` ${i} =>`
                }
            } else { //Inicia a contagem decrescente se o passor for menor que 0//
                for (var i = Number(contInicio); i >= Number(contFim); i+=Number(contIncremente)) {
                    resultado.innerHTML += ` ${i} =>`
                }
            }
        } else {  //contagem crescente//
            //passo 1, caso o incremento seja igual a 0
            if (Number(contIncremente) === 0) { 
                alert("Passo inválido! Considerando PASSO 1")
                for (var i = Number(contInicio); i <= Number(contFim); i++) {
                    resultado.innerHTML += ` ${i} =>`
                }
            } else { //Inicia a contagem crecente se o passor for maior que 0//
                for (var i = Number(contInicio); i <= Number(contFim); i += Number(contIncremente)) {
                    resultado.innerHTML += ` ${i} =>`
                }
            }
        }
        resultado.innerHTML += " Fim"
    }
    
})

