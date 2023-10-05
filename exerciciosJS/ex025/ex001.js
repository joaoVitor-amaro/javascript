function votacao(ano_nasc) {
    const idade = new Date().getFullYear() - ano_nasc
    if (idade >= 16 && idade < 18 || idade >= 70) {
        return `Com ${idade} anos: Voto Opcional`
    } else if (idade >= 18 && idade < 70) {
        return `Com ${idade} anos: Voto Obrigatório`
    } else {
        return `Com ${idade} anos: Não Vota`
    }
}

console.log(votacao(2000))