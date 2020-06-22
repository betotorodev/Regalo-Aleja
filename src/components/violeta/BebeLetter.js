const exit12 = document.getElementById('equis12');
const bebeCarta = document.getElementById('vio-carta');
const bebeOn = document.getElementById('vio')

exit12.addEventListener('click', () => {
  bebeCarta.classList.remove('bebe');
  bebeCarta.classList.add('hidden');
})

bebeOn.addEventListener('click', () => {
  bebeCarta.classList.remove('hidden');
  bebeCarta.classList.add('bebe');
})