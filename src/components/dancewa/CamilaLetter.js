const exit4 = document.getElementById('equis4');
const camilaCarta = document.getElementById('cami-carta');
const camilaOn = document.getElementById('cami')

exit4.addEventListener('click', () => {
  camilaCarta.classList.remove('camila');
  camilaCarta.classList.add('hidden');
})

camilaOn.addEventListener('click', () => {
  camilaCarta.classList.remove('hidden');
  camilaCarta.classList.add('camila');
})