var t1 = 0
var t2 = 1
console.log(t1)
console.log(t2)
for  i (var= 0; i <= 10; i++) {
    fib = t1 + t2
    t1 = t2
    t2 = fib
    console.log(fib)
}
console.log("Fim")