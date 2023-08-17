function verificar() {
    var result = document.getElementById("resul")
    var ano_nasc = Number(document.getElementById("iano_nas").value)
    var sexo = document.getElementsByName("sexo")
    var ano_atual = new Date().getFullYear()
    var idade = ano_atual - ano_nasc
    var img = document.createElement("img")
    var genero = ""
    if (sexo[0].checked) {
       genero = "Homem" 
       if (idade <= 10) {
         //criança//
         img.setAttribute("src", "image/foto-bebe-H.jpg")
       } else if (idade <= 21) {
         //jovem
         img.setAttribute("src", "image/foto-jovem-H.jpg")
       } else if (idade <= 50) {
        //adulto//
        img.setAttribute("src", "image/foto-adulto-H.jpg")
       } else {
        //idoso//
        img.setAttribute("src", "image/foto-idoso-H.jpg")
       }
    } else {
       genero = 'Mulher' 
       if (idade <= 10) {
         img.setAttribute("src", "image/foto-bebe-M.jpg")
       } else if (idade <= 21) {
         img.setAttribute("src", "image/foto-jovem-M.jpg")
       } else if (idade <= 50) {
         img.setAttribute("src", "image/foto-mulher-adulta.jpg")
       } else {
         img.setAttribute("src", "image/foto-idoso-m.jpg")
       }
    }
    result.innerHTML = `Detectamos ${genero} com ${idade} anos` 
    result.style.textAlign = "center"  
    result.appendChild(img)
}