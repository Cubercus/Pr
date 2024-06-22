let again = document.querySelector('.again')
let inputnumber = document.querySelector('.number-input')
let check = document.querySelector('.check')
let messege = document.querySelector('.guess-message')
let score = document.querySelector('.score')
let bestrezult = document.querySelector('.highscore')
let question = document.querySelector('.question')
let h1 = document.querySelector('h1')

let ball = 5
let contur = 5
let body = document.querySelector('body')

let random = Math.floor(Math.random() * 20)
console.log(random);

check.disabled = false

check.addEventListener('click', () => {
    score.innerHTML = --ball
    if (+inputnumber.value === random) {
        body.style.backgroundColor = "green"
        question.innerHTML = random
        h1.innerHTML = "Topdingiz"
        bestrezult.innerHTML = contur - ball
        check.disabled = true
    }
    else if (ball === 0) {
        body.style.backgroundColor = "red"
        question.innerHTML = random
        h1.innerHTML = "Loser!!!"
        check.disabled = true
    }
    else if (+inputnumber.value > random) {
        messege.innerHTML = 'kamro'
    }
    else if (+inputnumber.value < random) {
        messege.innerHTML = 'kopro'
    }
})

again.addEventListener('click', () => {
    body.style.backgroundColor = "black"
    h1.innerHTML = "Угадай Число!"
    inputnumber.value = null
    check.disabled = false
    messege.innerHTML = 'Начни угадывать'
    ball = 5
    score.innerHTML = ball
    bestrezult.innerHTML = 0
    question.innerHTML = '???'
    random = Math.floor(Math.random() * 20)
    console.log(random);

})
