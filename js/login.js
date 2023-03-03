function entrar() {
    let email = document.querySelector("#email")

    let senha = document.querySelector('#password')

    let error = document.querySelector('#error')

    let listaUsuario = []

    let listaValida = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'))

    listaUsuario.forEach((item) => {
        if (email.value == item.cadastroEmail && senha.value == item.cadastroSenha) {
            listaValida = {
                nome: item.cadastroNome,
                email: item.cadastroEmail,
                senha: item.cadastroSenha
            }
        }
    })
    if (email.value == listaValida.email && senha.value == listaValida.senha) {
        window.location.href = '/html/bv.html'

        let token2 = Math.random().toString(16).substring(2)
        localStorage.setItem('token2', token2)

        localStorage.setItem('emailLogado', JSON.stringify(listaValida))
    } else {
        email.setAttribute('style', 'border-color:red')
        senha.setAttribute('style', 'border-color:red')
        error.innerHTML = 'Usuário ou senha incorretos'
        error.setAttribute('style', 'display:block')
        email.focus()
    }
}