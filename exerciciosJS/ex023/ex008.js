var list = []
for (var i = 0; i < 20; i++) {
    list[i] = Math.floor(Math.random() * 99)
}
console.log(list)
var aux = 0
for (var i = 0, max = list.length; i < max; i++) {
    for (j = 0 ; j < max; j++) {
       if (list[j] > list[i]) {
            aux = list[j]
            list[j] = list[i]
            list[i] = aux
       } 
    }
}
console.log(list)