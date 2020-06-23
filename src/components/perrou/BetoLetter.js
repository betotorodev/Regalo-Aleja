const exit16 = document.getElementById('equis16');
const betoCarta = document.getElementById('bet-carta');
const betoOn = document.getElementById('bet')

exit16.addEventListener('click', () => {
  betoCarta.classList.remove('beto');
  betoCarta.classList.add('hidden');
})

betoOn.addEventListener('click', () => {
  betoCarta.classList.remove('hidden');
  betoCarta.classList.add('beto');
})