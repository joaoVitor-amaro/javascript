var list = []

for(var i = 0; i <= 15;i++) {
    list[i] = Math.floor(Math.random() * 100)
}

for (var valores of list) {
    if(valores % 10 === 0) {
       console.log(`o número ${valores} da lista é multiplo de 10`) 
    }
}
console.log(list)

