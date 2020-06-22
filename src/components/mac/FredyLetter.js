const exit8 = document.getElementById('equis8');
const fredyCarta = document.getElementById('fred-carta');
const fredyOn = document.getElementById('fred')

exit8.addEventListener('click', () => {
  fredyCarta.classList.remove('fredy');
  fredyCarta.classList.add('hidden');
})

fredyOn.addEventListener('click', () => {
  fredyCarta.classList.remove('hidden');
  fredyCarta.classList.add('fredy');
})