function verificar() {
    var ano_atual = new Date().getFullYear()
    var fano_nasc = window.document.getElementById("txtano")
    var res = window.document.getElementById('result')
    if (fano_nasc.value ==  0 || fano_nasc.value > ano_atual) {
        window.document.getElementById('result').innerHTML = "<div style='color: red'>Erro! Preenche os dados corretamente.</div>"
    } else {
        var fsexo = window.document.getElementsByName('radsex')
        var idade = ano_atual - Number(fano_nasc.value)
        var genero = ""
        var img = document.getElementById("imagem")
        if (fsexo[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // criança
                img.src = 'image/crianca-mulher-250.png'
            } else if (idade < 21) {
                //jovem
                img.src = 'image/jovem-mulher-250.png'
            } else if (idade < 50) {
                //adulto
                img.src = 'image/adulta-mulher-250.png'
            } else {
                // idoso
                img.src = 'image/idosa-mulher-250.png'
            }
        } else {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // criança
                img.src = 'image/crianca-homem-250.png'
            } else if (idade < 21) {
                //jovem
                img.src = 'image/jovem-homem-250.png'
            } else if (idade < 50) {
                //adulto
                img.src = 'image/adulto-homem-250.png'
            } else {
                // idoso
                img.src = 'image/idoso-homem-250.png'
            }
        }
       res.innerHTML = `Detectamos uma ${genero} com ${idade} anos`
    }
}