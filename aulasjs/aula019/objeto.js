let pessoa = {
    nome: "joão",
    carro: "ford",
    falar: () => {
        console.log("oi")
    },
    soma: (a,b) => {
        return a+b
    },
    objeto: {
        nome: "joão"
    }
}

pessoa.nome = "Pedro"

for(var i in pessoa) {  
    if (pessoa.hasOwnProperty(i)) {
        console.log(pessoa[i])
    }
}
pessoa.falar()
console.log(pessoa.soma(5,2))
console.log(pessoa.objeto.nome)
