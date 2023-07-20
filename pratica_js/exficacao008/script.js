function calcular() {
   var valor_money = Number(window.document.getElementById("money").value)
   if (valor_money == "") {
    alert('Erro')
   } else {
    var forma_pagamento = window.document.getElementsByName('rad_pagamento')
    if (forma_pagamento[0].checked) {
        alert("A vista")
    } else if (forma_pagamento[1].checked) {
        alert("Débito")
    } else {
       alert('credito')
    }
   }
}