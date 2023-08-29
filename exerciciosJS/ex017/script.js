document.getElementById("pwd").addEventListener("click", function() {
    var pwdType = document.getElementById("senha")
    var iconPwd = document.getElementById("pwd")
    if (pwdType.type == "password") {
        pwdType.type = "text"
        iconPwd.setAttribute("class", "ph ph-eye")
    } else {
        pwdType.type = "password"
        iconPwd.setAttribute("class", "ph ph-eye-slash")
    } 
})



var pwdInput = document.getElementById("senha")

pwdInput.addEventListener("keyup", function() {
    var regexLoweCase = /[a-z]/
    var regexNumber = /[0-9]/
    var regexUpercase = /[A-Z]/
    var regexCarctereEspc = /[^A-Za-z0-9]/
    var valueInput = pwdInput.value
    var lengthcaractere = document.getElementById("lengthcaractere")
    var loweCaseCaractere = document.getElementById("loweCase")
    var numbercaractere = document.getElementById("numbercaractere")
    var caractereUpperCase = document.getElementById("caractereUpperCase")
    var caractereEspec = document.getElementById("caractereEspec")
    lengthcaractere.classList.add('isvalid')
    numbercaractere.classList.add("isvalid")
    loweCaseCaractere.classList.add("isvalid")
    caractereEspec.classList.add("isvalid")
    caractereUpperCase.classList.add("isvalid")
    if (valueInput.length >= 8) {
        lengthcaractere.classList.remove("isvalid")
        lengthcaractere.classList.add('valid')
    }

    if (regexNumber.test(valueInput)) {
        numbercaractere.classList.remove("isvalid")
        numbercaractere.classList.add("valid")
    }

    if (regexLoweCase.test(valueInput)) {
        loweCaseCaractere.classList.remove("isvalid")
        loweCaseCaractere.classList.add('valid')
    }
    if (regexCarctereEspc.test(valueInput)) {
        caractereEspec.classList.remove("isvalid")
        caractereEspec.classList.add("valid")
    }
    if (regexUpercase.test(valueInput)) {
        caractereUpperCase.classList.remove("isvalid")
        caractereUpperCase.classList.add('valid')
    }
    
})