import "./components/LuisaLetter.js";
import "./components/LorenaLetter.js";
import "./components/NicolasLetter.js";

// lógica botón
const inicio = document.getElementById('beging');
const guevitas = document.getElementById('cochas');
const exYuta = document.getElementById('dancewa');
const buttomDown = document.getElementById('down');

buttomDown.addEventListener('click', handleClick)

let number = 0;

const setPages = () => {
  let counter = 0
  const setNumber = (num) => {
    counter += num
    number = counter
  }
  return setNumber
}

const pages = setPages()

function handleClick() {
  pages(1)
  console.log(number)
  if (number === 1) {
    inicio.classList.remove('inicio');
    guevitas.classList.add('guevitas');
  } else if (number === 2) {
    guevitas.classList.remove('guevitas');
    exYuta.classList.add('dancewa');
  }
}