const exit2 = document.getElementById('equis2');
const luisaCarta = document.getElementById('lu-carta');
const luisaOn = document.getElementById('lufe')

exit2.addEventListener('click', () => {
  luisaCarta.classList.remove('luisa');
  luisaCarta.classList.add('hidden');
})

luisaOn.addEventListener('click', () => {
  luisaCarta.classList.remove('hidden');
  luisaCarta.classList.add('luisa');
})
