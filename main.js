//variáveis

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector(".cookie")
const btnReset = document.querySelector(".btnReset")
const randomPhrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Não espere, ponha em prática.',
  'Mesmo que pareça difícil, não pare.',
  'Veja sempre o que há de positivo nas coisas.',
  'Você não precisa de muito para construir um mundo melhor.',
  'Nunca esqueça que a sua felicidade não depende de mais ninguém.',
  'Enxergue outros pontos de vista, e tenha sempre presente o objetivo final.',
  'Desistir à primeira é para os fracos, tente sempre mais uma vez.',
  'Se motive com as conquistas pessoais e não em bater os outros.',
  'Busque inspiração nas pequenas coisas e gestos.',
]

//eventos

cookie.addEventListener('click', newPhrase)
btnReset.addEventListener('click', toogleScreen)
document.addEventListener('keydown', enterKey)


//funções
function toogleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

function newPhrase() {
  toogleScreen()
  randomPhrase()
}

function randomPhrase() {
  const randomNumber = Math.floor(Math.random() * randomPhrases.length)
  document.querySelector('#phrase').innerText = randomPhrases[randomNumber]
}

function enterKey(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide') || screen2.classList.contains('hide')) {
    toogleScreen()
    randomPhrase()
  }
}