const vetor = []
let cont = 0
while (cont < 10) {
    let NumberSort = Math.floor(Math.random() * 50)
    if (NumberSort % 2 === 0) {
        vetor.push(NumberSort)
        cont++
    }
}

console.log(vetor)