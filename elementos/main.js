'use strict'

const botaoSequencia = document.getElementById('botao-sequencia')
const botaoImpar = document.getElementById('botao-impar')
const botaoPar = document.getElementById('botao-par')
const botaoMultiplos = document.getElementById('botao-multiplos')
// const botaoLimpar = document.getElementById('botao-limpar')
// const quantidade = document.getElementById('quantidade')




function gerarSequencia() {
    const quantidade = document.getElementById('quantidade')
    const resultado = document.getElementById('resultado')

    resultado.textContent = ''
    for (let contador = 1; contador <= quantidade.value; contador++) {
        // resultado.textContent += " " + contador
        const novaSpan = document.createElement('span')
        novaSpan.textContent = contador
        resultado.appendChild(novaSpan)
    }
}
function gerarNumeroImpares() {
    const quantidade = document.getElementById('quantidade')
    const resultadoImpar = document.getElementById('resultado-impar')

    resultadoImpar.textContent = ''
    for (let contador = 1; contador <= quantidade.value; contador += 2) {
        resultadoImpar.textContent += " " + contador
    }
}

function gerarNumeroPar() {
    const quantidade = document.getElementById('quantidade')
    const resultadoPar = document.getElementById('resultado-par')

    resultadoPar.textContent = ''
    for (let contador = 2; contador <= quantidade.value; contador += 2) {
        resultadoPar.textContent += " " + contador
    }
}
function gerarNumeroMultiplos() {
    const quantidade = document.getElementById('quantidade')
    const resultadoMultiplos = document.getElementById('resultado-multiplos')

    resultadoMultiplos.textContent = ''
    for (let contador = 5; contador <= quantidade.value; contador += 5) {
        resultadoMultiplos.textContent += " " + contador
    }
}







// botao limpar tudo
// function limparTudo() {
//     const quantidade = document.getElementById('quantidade')
//     const resultado = document.getElementById('resultado')
//     const resultadoImpar = document.getElementById('resultado-impar')
//     const resultadoPar = document.getElementById('resultado-par')
//     const resultadoMultiplos = document.getElementById('resultado-multiplos')
//     resultado.textContent = ''
//     resultadoImpar.textContent = ''
//     resultadoPar.textContent = ''
//     resultadoMultiplos.textContent = ''
//     quantidade.value = ''
// }

botaoSequencia.addEventListener('click', gerarSequencia)
botaoImpar.addEventListener('click', gerarNumeroImpares)
botaoPar.addEventListener('click', gerarNumeroPar)
botaoMultiplos.addEventListener('click', gerarNumeroMultiplos)
botaoLimpar.addEventListener('click' , limparTudo)



