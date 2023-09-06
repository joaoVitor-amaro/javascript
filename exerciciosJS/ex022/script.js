document.getElementById("btnGerarTabu").addEventListener("click", function() {
    var numberTab = document.getElementById("NumberTab").value 
    var resulTabuada = document.getElementById("resulTabuada")
    if (numberTab === "") {
        alert("erro")
    } else {
        var i = 0
        resulTabuada.textContent = ""
        while (i <= 10) {
            var optionSlect = document.createElement("option")
            optionSlect.textContent = `${numberTab} x ${i} = ${numberTab*i}`
            resulTabuada.appendChild(optionSlect)
            i++
        }
    }
})