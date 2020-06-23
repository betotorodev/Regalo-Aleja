const exit15 = document.getElementById('equis15');
const padrinoCarta = document.getElementById('feli-carta');
const padrinoOn = document.getElementById('feli')

exit15.addEventListener('click', () => {
  padrinoCarta.classList.remove('padrino');
  padrinoCarta.classList.add('hidden');
})

padrinoOn.addEventListener('click', () => {
  padrinoCarta.classList.remove('hidden');
  padrinoCarta.classList.add('padrino');
})