const exit6 = document.getElementById('equis6');
const danielaCarta = document.getElementById('dani-carta');
const danielaOn = document.getElementById('dani')

exit6.addEventListener('click', () => {
  danielaCarta.classList.remove('daniela');
  danielaCarta.classList.add('hidden');
})

danielaOn.addEventListener('click', () => {
  danielaCarta.classList.remove('hidden');
  danielaCarta.classList.add('daniela');
})