'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')

function mudarCor () {
    forma1.classList.toggle('vermelho')
}

function mudarForma(){
    forma2.classList.toggle('circulo')
}

function Animacao(){
    forma3.classList.toggle('Animacao')
}

function Azul(){
    forma4.classList.toggle('Azul')
}
function Matriz(){
    forma5.classList.toggle('Matriz')
}
function Animacao2(){
    forma6.classList.toggle('Animacao2')
}

forma1.addEventListener('click' , mudarCor)
forma2.addEventListener('click' , mudarForma)
forma3.addEventListener('click' , Animacao)
forma4.addEventListener('click' , Azul)
forma5.addEventListener('click' , Matriz)
forma6.addEventListener('click' , Animacao2)