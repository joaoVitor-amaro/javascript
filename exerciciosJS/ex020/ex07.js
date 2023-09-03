var cont = 0
var maior5 = 0 
var divi3 = 0
while(cont <= 20) {
    var numberSorteado = Math.floor(Math.random() * 10)
    console.log(numberSorteado)
    if (numberSorteado > 5) {
        maior5++
    }
    if (numberSorteado % 3 == 0) {
        divi3++
    }
    cont++
}
console.log(`números acima de 5: ${maior5}`)
console.log(`Quantos números são divisíveis por 3: ${divi3}`)