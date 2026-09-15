var displayOpc = document.getElementById('displayOpc')
var btnPar = document.getElementById('btn-par')
var btnImpar = document.getElementById('btn-impar')

const elemento = document.getElementById('num')
const jogar = document.getElementById('jogar')
const displayNum = document.getElementById('displayNum')
const escolhaNum = document.getElementById('escolhaNum')


btnImpar.addEventListener('click', function() {
    showOpc('ÍMPAR')
})

btnPar.addEventListener('click', function() {
    showOpc('PAR')
})


function showOpc(opc) {
    displayOpc.innerText = `Você escolheu ${opc}`
    mostrar(elemento)
    mostrar(escolhaNum)
}

function esconder(item) {
    item.style.display = 'none'
}

function mostrar(item) {
    item.style.display = 'block'
}


window.addEventListener('DOMContentLoaded', function() {
    esconder(elemento)
    esconder(jogar)
    esconder(escolhaNum)
})


const botoes = document.querySelectorAll('.btn-num')

botoes.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        numeroEscolhido = evento.target.value
        displayNum.innerHTML = `Você escolheu o número: ${numeroEscolhido}`
        mostrar(jogar)
    })
})