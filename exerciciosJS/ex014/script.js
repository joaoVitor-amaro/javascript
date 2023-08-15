function carregar() {
    var horas = new Date().getHours()
    document.getElementById("msg_hora").innerHTML = `Agora são ${horas} horas`
    var img = document.getElementById("img_HorDia")
    var bodySite = document.body
    //Condição do dia//
    if (horas >= 0 && horas < 12) {
        img.src = "image/manha.jpg"
        bodySite.style.backgroundColor = '#BFAF84'
    //Condição da tarde//    
    } else if (horas >= 12 && horas < 18) {
        img.src = "image/tarde.jpg"
        bodySite.style.backgroundColor = "#AA7B67"
    //Condição da noite//
    } else {
        img.src = "image/noite.jpg"
        bodySite.style.backgroundColor = "#48494A"
    }
}