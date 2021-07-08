function responder(){
    const res = document.querySelector('#res')
    const select = document.querySelector('#alternativas')

    const respostasCorretas = [
        '17',
        'Abdul-Jabbar',
        'Bill Russell'
    ]

    if(select.value == respostasCorretas[0] || select.value == respostasCorretas[1] || select.value == respostasCorretas[2]){
        res.innerHTML = (`<h1>Você acertou</h1> <strong><p>Parabéns</p></strong>  <p>Vá para próxima pergunta</p>`)
    } else{
        res.innerHTML = (`<h1>Você errou</h1> <br> <p>Tente novamente ou vá para próxima pergunta</p>`)
    }
}

function finalizar(){
    const res = document.querySelector('#res')
    const select = document.querySelector('#alternativas')

    const correta = 'Warriors 15/16'

    if(select.value == correta){
        res.innerHTML = (`<h1>Você acertou</h1> <strong><p>Parabéns</p></strong>  <p>Se você não foi bem no quiz, tente novamente clicando no botão abaixo.</p>`)
    } else{
        res.innerHTML = (`<h1>Você errou</h1> <br> <p>Tente novamente</p>`)
    }
}