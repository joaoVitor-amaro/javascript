let number = document.querySelector("#inumber")
let selectList = document.querySelector("#flist")
let result = document.querySelector("#resultado")
let valores = []


//Fução anônima verifica se o input está vazio ou
var isEmpaty = function (n) {
    if (Number(n) != "" && Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//verfica se possui um valor identico na lista
function isNumberList(n1, list) {
    if (list.indexOf(Number(n1)) != -1) {
        return false
    } else {
        return true
    }
}

//Adiciona os valores da lista
function adicionar() {
    if (isEmpaty(number.value) && isNumberList(number.value, valores)) {
        valores.push(Number(number.value))
        let option = document.createElement("option")
        option.text = `Número ${number.value} adicionado`
        selectList.appendChild(option)
    } else {
        alert("erro")
    }
    console.log(valores)
}

//verfica a quantidade de elementos na lista
function finalizar() {
    const qt_valoresList = valores.length
    if (qt_valoresList > 0) {
        const p_qtList = document.createElement("p") 
        p_qtList.innerHTML = `A lista possui ${qt_valoresList} valores`
        result.appendChild(p_qtList)
    } else {
        alert("Sem valores na lista. Adcione os valores")
    }
}