const objs = [
    {
        nome: "João",
        idade: 15,
        list: [5,2,6],
        estatrabalhando: true,
        detalhes_profissao: {
            profissao: "Programador",
            empresa: "empresa x"
        }
    }, 
    {
        nome: "João",
        idade: 16,
        list: [5,2,6],
        estatrabalhando: false,
        detalhes_profissao: {
            profissao: null,
            empresa: null
        }
    }
]


//json
//conversão de objeto para Json
const jsonData = JSON.stringify(objs)
console.log(jsonData)
//conversão de Json para objeto
const obsjData = JSON.parse(jsonData)
console.log(obsjData)

obsjData.map((pessoa) => {
    console.log(pessoa.detalhes_profissao.profissao)
})