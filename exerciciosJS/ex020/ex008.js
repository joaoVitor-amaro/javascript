var n1 = 26
var razao = 5
var ns = 10
var sm_termo = 0
for (var i = 1; i <= ns; i++) {
    var pa = n1 + (i - 1) * razao
    sm_termo += pa
    console.log(pa)
}
console.log(`A soma dos termos é igual a ${sm_termo}`)