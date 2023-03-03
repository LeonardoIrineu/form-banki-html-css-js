let emailLogado = JSON.parse(localStorage.getItem('emailLogado'))

let logado = document.querySelector('#logado')

logado.innerHTML = `Olá ${emailLogado.nome}`

function sair() {
    localStorage.removeItem('token2')
    window.location.href = "/index.html"
}