const exit10 = document.getElementById('equis10');
const tio_johnCarta = document.getElementById('tio-carta');
const tio_johnOn = document.getElementById('tio')

exit10.addEventListener('click', () => {
  tio_johnCarta.classList.remove('tio-john');
  tio_johnCarta.classList.add('hidden');
})

tio_johnOn.addEventListener('click', () => {
  tio_johnCarta.classList.remove('hidden');
  tio_johnCarta.classList.add('tio-john');
})