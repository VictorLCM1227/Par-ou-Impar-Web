var displayOpc = document.getElementById('displayOpc')
var btnPar = document.getElementById('btn-par')
var btnImpar = document.getElementById('btn-impar')

const elemento = document.getElementById('num')
const jogar = document.getElementById('jogar')
const displayNum = document.getElementById('displayNum')
const escolhaNum = document.getElementById('escolhaNum')
const resultado = document.getElementById('resultado')
const repetir = document.getElementById('repetir')

btnImpar.addEventListener('click', function() {
    showOpc('ÍMPAR')
    opcEscolhida = 'ÍMPAR'
})

btnPar.addEventListener('click', function() {
    showOpc('PAR')
    opcEscolhida = 'PAR'
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
    esconder(resultado)
    esconder(repetir)
})

const opc = document.querySelectorAll(".opc")

const botoes = document.querySelectorAll('.btn-num')

botoes.forEach(botao => {
    botao.addEventListener('click', (evento) => {
        numeroEscolhido = evento.target.value
        displayNum.innerHTML = `Você escolheu o número: ${numeroEscolhido}`
        mostrar(jogar)
    })
})

// jogar

jogar.addEventListener('click', processar)

function processar() {
  let vencedor = ''
  let impar = ''
  let par = ''
  let pc = Math.random()
  soma = Number(numeroEscolhido) + pc
  if (soma % 2 == 0) {
    par = true
  } else {
    impar = true
  }

  if (opcEscolhida == 'PAR') {
    if (par == true) {
      vencedor = 'Você'
    } else {
      vencedor = 'Pc'
    }
  } else {
    if (impar == true) {
      vencedor = 'Você'
    } else {
      vencedor = 'Pc'
    }
  }
  mostrar(resultado)
  resultado.innerText = `Vencedor: ${vencedor}`
  mostrar(repetir)
}