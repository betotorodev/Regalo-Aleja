const exit5 = document.getElementById('equis5');
const patriciaCarta = document.getElementById('pati-carta');
const patriciaOn = document.getElementById('pati')

exit5.addEventListener('click', () => {
  patriciaCarta.classList.remove('patricia');
  patriciaCarta.classList.add('hidden');
})

patriciaOn.addEventListener('click', () => {
  patriciaCarta.classList.remove('hidden');
  patriciaCarta.classList.add('patricia');
})