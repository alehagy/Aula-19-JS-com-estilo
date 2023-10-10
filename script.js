const h2 = document.querySelector ("h2")

h2.style.color = 'blue'
h2.style.fontSize = "40px"

//insere cor no campo de login devido a nao informar login
const username = document.querySelector('#login-usuario')
username.classList.add('error')

//torna mensagem de erro visivel associado ao campo login
const errorMessage = document.querySelector ('.error-text')
errorMessage.classList.add('visible')

//insere cor no campo de senha devido a nao informar senha
const senha = document.querySelector('#login-senha')
senha.classList.add('error')

//torna mensagem de erro visivel associado ao campo senha
//const errorMessage = document.querySelector ('.error-text')
//errorMessage.classList.add('visible')

//coloca cor na fonte do botao
const botao = document.querySelector('button') 
botao.style.color = 'blue'
botao.style.backgroundColor = 'grey'




