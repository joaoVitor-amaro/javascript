var list = []

for (var i = 0; i < 10; i++) {
    list[i] = Math.floor(Math.random() * 50)
}

for (var valores of list) {
    if (valores % 2 == 0) {
        console.log(`O número ${valores} é par`)
    }
}

console.log(list)