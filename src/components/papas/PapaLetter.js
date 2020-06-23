const exit17 = document.getElementById('equis17');
const donChepeCarta = document.getElementById('dad-carta');
const donChepeOn = document.getElementById('dad')

exit17.addEventListener('click', () => {
  donChepeCarta.classList.remove('donChepe');
  donChepeCarta.classList.add('hidden');
})

donChepeOn.addEventListener('click', () => {
  donChepeCarta.classList.remove('hidden');
  donChepeCarta.classList.add('donChepe');
})