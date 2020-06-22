const exit1 = document.getElementById('equis1');
const lorenaCarta = document.getElementById('lore-carta');
const lorenaOn = document.getElementById('lore')

exit1.addEventListener('click', () => {
  lorenaCarta.classList.remove('lorena');
  lorenaCarta.classList.add('hidden');
})

lorenaOn.addEventListener('click', () => {
  lorenaCarta.classList.remove('hidden');
  lorenaCarta.classList.add('lorena');
})