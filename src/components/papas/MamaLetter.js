const exit18 = document.getElementById('equis18');
const sexyCarta = document.getElementById('mom-carta');
const sexyOn = document.getElementById('mom')

exit18.addEventListener('click', () => {
  sexyCarta.classList.remove('sexy');
  sexyCarta.classList.add('hidden');
})

sexyOn.addEventListener('click', () => {
  sexyCarta.classList.remove('hidden');
  sexyCarta.classList.add('sexy');
})