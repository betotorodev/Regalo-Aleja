const exit14 = document.getElementById('equis14');
const madrinaCarta = document.getElementById('yoly-carta');
const madrinaOn = document.getElementById('yoly')

exit14.addEventListener('click', () => {
  madrinaCarta.classList.remove('madrina');
  madrinaCarta.classList.add('hidden');
})

madrinaOn.addEventListener('click', () => {
  madrinaCarta.classList.remove('hidden');
  madrinaCarta.classList.add('madrina');
})