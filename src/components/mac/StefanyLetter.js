const exit9 = document.getElementById('equis9');
const stefanyCarta = document.getElementById('stef-carta');
const stefanyOn = document.getElementById('stef')

exit9.addEventListener('click', () => {
  stefanyCarta.classList.remove('stefany');
  stefanyCarta.classList.add('hidden');
})

stefanyOn.addEventListener('click', () => {
  stefanyCarta.classList.remove('hidden');
  stefanyCarta.classList.add('stefany');
})