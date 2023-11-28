'use strict'

const users = [


    {

        nome: 'Ana Coelho',
        id: '0123456789',
        email: 'ana@gmail.com',
        celular: '11971657465',
        cidade: 'Osasco',
        image: './img/ana-coelho.jpg',
        status: true
    },
    {
        nome: 'Hugo Gomes',
        id: '0123456789',
        email: 'hugo@gmail.com',
        celular: '11971657465',
        cidade: 'Barueri',
        image: './img/hugo-gomes.jpg',
        status: false
    },
    {
        nome: 'Joana Pereira',
        id: '0123456789',
        email: 'joana@gmail.com',
        celular: '11971657465',
        cidade: 'Osasco',
        image: './img/joana-pereira.jpg',
        status: true
    },
    {
        nome: 'Jose Chaves',
        id: '0123456789',
        email: 'jose@gmail.com',
        celular: '11971657465',
        cidade: 'Jandira',
        image: './img/jose-chaves.jpg',
        status: false
    },
    {
        nome: 'Mariana Silva',
        id: '0123456789',
        email: 'mariana@gmail.com',
        celular: '11971657465',
        cidade: 'Itapevi',
        image: './img/mariana-silva.jpg',
        status: true
    }
]

const botaoExibir = document.getElementById('exibir')

function criarCard(user) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div')


    let status
    if (user.status) {
        status = ''
    } else {
        status = 'sombra'
    }
    // O let status acima  pode ser feito numa unica linha 
    // let status = user.status ? '' : 'sombra'


    card.className = `card ${status}`
    card.innerHTML = `
    <img src="${user.image}" alt="Foto da ${user.nome}" class="card__photo">
        <h3 class="card__name">${user.nome}</h3>
        <p class="card__user-id">${user.id}</p>
    `
    container.appendChild(card)

}
function limparContainer() {
    const container = document.getElementById('data-container')
    container.textContent = ''
}
function exibir() {
    limparContainer()
    users.forEach(criarCard)
}


botaoExibir.addEventListener('click', exibir)