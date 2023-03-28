// dia - #D1BF92
// tarde - #AB7A65
// noite - #4A4B4C
function carregar() {
    var hora = new Date().getHours()
    var img = document.getElementById("image")
    document.getElementById("hora_dia").innerHTML = `Agora são ${hora} horas`
    if( hora >= 0 && hora < 12) {
        document.body.style.backgroundColor = '#e2cd9f'
        img.src = 'image/dia-redondo-250.png'
    } else if (hora >= 12 && hora < 18) {
        document.body.style.backgroundColor = '#b9846f'
        img.src = 'image/tarde-redondo-250.png'
    } else {
        document.body.style.backgroundColor = '#4A4B4C '
        img.src = 'image/noite-redondo-250.png'
    }
}