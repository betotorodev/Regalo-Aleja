const exit7 = document.getElementById('equis7');
const adrianaCarta = document.getElementById('adri-carta');
const adrianaOn = document.getElementById('adri')

exit7.addEventListener('click', () => {
  adrianaCarta.classList.remove('adriana');
  adrianaCarta.classList.add('hidden');
})

adrianaOn.addEventListener('click', () => {
  adrianaCarta.classList.remove('hidden');
  adrianaCarta.classList.add('adriana');
})