const exit11 = document.getElementById('equis11');
const leidyCarta = document.getElementById('tia-carta');
const leidyOn = document.getElementById('tia')

exit11.addEventListener('click', () => {
  leidyCarta.classList.remove('leidy');
  leidyCarta.classList.add('hidden');
})

leidyOn.addEventListener('click', () => {
  leidyCarta.classList.remove('hidden');
  leidyCarta.classList.add('leidy');
})