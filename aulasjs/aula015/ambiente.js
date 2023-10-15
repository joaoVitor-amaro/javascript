var itens = [5, 8, 2, 9, 3]
itens.forEach(function(valores, id) {
  console.log(valores, id)
})
console.log("----")
for (let valores of itens) {
    console.log(valores)
}

console.log("----")
for (var it in itens) {
  console.log(itens[it])
}
console.log("----")
console.log(itens.push(1))
console.log(itens.indexOf(1))
console.log(itens.shift())
console.log(itens.unshift(2))
console.log(itens)
console.log(itens.splice(0,2))
console.log(itens)