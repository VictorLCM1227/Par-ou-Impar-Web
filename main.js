var displayOpc = document.getElementById('displayOpc')
var btnPar = document.getElementById('btn-par')
var btnImpar = document.getElementById('btn-impar')
const elemento = document.getElementById('num')

btnImpar.addEventListener('click', function() {
    showOpc('ÍMPAR')
})

btnPar.addEventListener('click', function() {
    showOpc('PAR')
})

function showOpc(opc) {
    displayOpc.innerText = `Você escolheu ${opc}`
}

function esconder() {
  elemento.style.display = 'none';
}

function mostrar() {
  elemento.style.display = 'block'; // ou 'flex', 'grid', dependendo do seu layout
}