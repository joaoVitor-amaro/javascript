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
    number.value = ""
    number.focus()
    
}

//verfica a quantidade de elementos na lista
function finalizar() {
    if (valores.length == 0) {
        alert("Sem valores na lista. Adcione os valores")
    } else {
        let qt_valoresList = valores.length
        let maior_valor = valores[0]
        let menor_valor = valores[0]
        let soma_list = 0
        for (let itens of valores) {
            soma_list += itens 
            if (itens > maior_valor) {
                maior_valor = itens
            }

            if(itens < menor_valor) {
                menor_valor = itens
            }
        }
        let media_lis = soma_list/valores.length
        result.innerHTML = `Ao todo, tems ${qt_valoresList} elementos <br>`
        result.innerHTML += `O maior valor encontrado foi ${maior_valor} <br>`
        result.innerHTML += `O menor valor encontrado foi ${menor_valor} <br>`
        result.innerHTML = `Somando todos os valores, temos ${soma_list}`
        result.innerHTML += `A média dos valores digitados é ${media_lis.toFixed(2)}`
    }
}