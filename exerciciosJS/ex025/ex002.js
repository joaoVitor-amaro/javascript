var fatorial = function(number, show = false) {
    var fat = 1
    for(var i = number; i >  0; i--) {
        if (show) {
            console.log(fat)
        }
        fat *= i
    }
    return `O fatorial de ${number} é igual a ${fat}`
}

console.log(fatorial(5, true))