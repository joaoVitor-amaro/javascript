var sec = 0
var min = 0 
var hr = 0
var relogio = document.querySelector("#relogio")
var intervalo 

function twodigits(digits) {
    if(digits < 10) {
        return "0"+digits
    } else {
        return digits
    }
}

function pausa() {
    clearInterval(intervalo)
}

function para() {
    clearInterval(intervalo)
    sec = 0
    relogio.innerHTML = `00:00:00`
}

function start() {
    iniciar()
    intervalo = setInterval(iniciar, 1000)
}

function iniciar() {
    sec++
    if (sec == 60) {
        min++
        sec = 0
        if(min == 60) {
            hr++
            min = 0
            sec = 0
        }
    }
    relogio.innerHTML = `${twodigits(hr)}:${twodigits(min)}:${twodigits(sec)}`
}

