const exit13 = document.getElementById('equis13');
const tioCarta = document.getElementById('elki-carta');
const tioOn = document.getElementById('elki')

exit13.addEventListener('click', () => {
  tioCarta.classList.remove('tio');
  tioCarta.classList.add('hidden');
})

tioOn.addEventListener('click', () => {
  tioCarta.classList.remove('hidden');
  tioCarta.classList.add('tio');
})