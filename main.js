const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector(".btnReset")
let randomNumber = Math.round(Math.random() * 10)
const randomPhrases = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.",
]

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', function (e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        console.log(e.key)
        handleResetClick()
    }
})

document.addEventListener('keydown', function(eve) {
    if(eve.key == 'Enter' && screen2.classList.contains('hide')) {
        handleTryClick(event)
    }
})


function handleTryClick (event) {
    event.preventDefault()

    toggleScreen()
    screen2.querySelector('.screen2 p').innerText = randomPhrases[randomNumber]    
}

function handleResetClick () {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
}


function toggleScreen () {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
