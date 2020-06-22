const exit3 = document.getElementById('equis3');
const nicolasCarta = document.getElementById('nico-carta');
const nicolasOn = document.getElementById('nico')

exit3.addEventListener('click', () => {
  nicolasCarta.classList.remove('nicolas');
  nicolasCarta.classList.add('hidden');
})

nicolasOn.addEventListener('click', () => {
  nicolasCarta.classList.remove('hidden');
  nicolasCarta.classList.add('nicolas');
})