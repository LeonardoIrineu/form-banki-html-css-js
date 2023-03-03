let nome = document.querySelector('#nome')
let validNome = false

let email = document.querySelector("#email")
let validEmail = false

let senha = document.querySelector('#password')
let validSenha = false

let confirmS = document.querySelector("#confirmP")
let validConfirmS = false

let error = document.querySelector('#error')
let success = document.querySelector("#success")

nome.addEventListener('keyup', () => {
    if (nome.value.length <= 3) {
        nome.setAttribute('style', 'border-color:red')
        validNome = false
    } else {
        nome.setAttribute('style', 'border-color:blue')
        validNome = true
    }
})

email.addEventListener('keyup', () => {
    if (email.value.length <= 2) {
        email.setAttribute('style', "border-color:red")
        validEmail = false
    } else {
        email.setAttribute('style', 'border-color:blue')
        validEmail = true
    }
})

senha.addEventListener('keyup', () => {
    if (senha.value.length <= 5) {
        senha.setAttribute('style', 'border-color:red')
        validSenha = false
    } else {
        senha.setAttribute('style', 'border-color:blue')
        validSenha = true
    }
})

confirmS.addEventListener('keyup', () => {
    if (senha.value != confirmS.value) {
        confirmS.setAttribute('style', 'border-color:red')
        validConfirmS = false
    } else {
        confirmS.setAttribute('style', 'border-color:blue')
        validConfirmS = true
    }
})

function cadastrar() {
    if (validNome && validEmail && validSenha && validConfirmS) {
        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]')

        listaUsuario.push({
            cadastroNome: nome.value,
            cadastroEmail: email.value,
            cadastroSenha: senha.value
        })

        localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario))

        success.setAttribute("style", 'display:block')
        success.innerHTML = 'Cadastrando...'
        error.setAttribute('style', 'display:none')
        error.innerHTML = ''

        setTimeout(() => {
            window.location.href = '/index.html'
        }, 3000)

    } else {
        error.setAttribute('style', 'display:block')
        error.innerHTML = 'Preencha todos os campos!'
        success.setAttribute('style', 'display:none')
        success.innerHTML = ''
    }
}