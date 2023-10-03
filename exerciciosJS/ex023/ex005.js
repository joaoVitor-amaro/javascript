var list = [1, 1]
var p1_termo = 0
var p2_termo = 0
for (var i = list.length, max = 15; i <= max; i++) {
    p1_termo = list[list.length - 2]
    p2_termo = list[list.length - 1]
    list[i] = p1_termo + p2_termo
}
console.log(list)