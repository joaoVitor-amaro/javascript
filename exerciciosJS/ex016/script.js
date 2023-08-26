function pwd(Idinput, idIcon) {
    var senhaInput = document.getElementById(Idinput)
    var icon = document.getElementById(idIcon)
    if (senhaInput.type === "password") {
        senhaInput.type = "text"
        icon.setAttribute("class", "ph ph-eye-slash")
    } else {
        icon.setAttribute("class", "ph ph-eye")
        senhaInput.type = 'password'
    }
}

document.getElementById("cadastrar").addEventListener("click", function() {
    var nameInput = document.getElementById("iname").value
    var emailInput = document.getElementById("iemail").value
    var pwdInput = document.getElementById("isenha").value
    var pwdInputConfirm = document.getElementById("iconfimarPwd").value
    var erroName = document.getElementById("erroName")
    var erroEmail = document.getElementById("erroEmail")
    var erroPwd = document.getElementById("erroPwd")
    var erroPwdConfirm = document.getElementById("erroPwdConfirm")
    var cadastradoUser = document.getElementById("cadastrado")
    if (nameInput === "") {
        erroName.style.display = "block"
        erroName.innerHTML = "prenche o campo"
        erroName.style.color = "red"
    } else {
        erroName.style.display = "none"
    } 
    if (emailInput === "") {
        erroEmail.style.display = "block"
        erroEmail.innerHTML = "prenche o campo"
        erroEmail.style.color = "red"
    } else {
        erroEmail.style.display = 'none'
    }
    if (pwdInput === "") {
        erroPwd.style.display = "block"
        erroPwd.innerHTML = "prenche o campo"
        erroPwd.style.color = "red"
    } else {
        erroPwd.style.display = "none"
    }
    if (pwdInputConfirm === "") {
       erroPwdConfirm.style.display = "block"
       erroPwdConfirm.innerHTML = "prenche o campo" 
       erroPwdConfirm.style.color = "red"
    } else {
        if (pwdInputConfirm != pwdInput) {
            erroPwdConfirm.style.display = 'block'
            erroPwdConfirm.textContent = "Senha incorretas"
        } else {
            erroPwdConfirm.style.display = 'none'
        }
    }
    if (nameInput && emailInput && pwdInput && pwdInputConfirm) {
        cadastradoUser.style.display = "block"
        cadastradoUser.innerHTML = "Cadastado com sucesso"
    }
})