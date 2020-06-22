import "./components/cocha/LuisaLetter.js";
import "./components/cocha/LorenaLetter.js";
import "./components/cocha/NicolasLetter.js";
import "./components/dancewa/CamilaLetter.js";
import "./components/dancewa/PatriciaLetter.js";
import "./components/primas/DanielaLetter.js";
import "./components/primas/AdrianaLetter.js";
import "./components/mac/FredyLetter.js";
import "./components/mac/StefanyLetter.js";

// lógica botón
const inicio = document.getElementById('beging');
const guevitas = document.getElementById('cochas');
const exYuta = document.getElementById('dancewa');
const hermanas = document.getElementById('primas');
const amigos = document.getElementById('mac');
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
  } else if (number === 3) {
    exYuta.classList.remove('dancewa');
    hermanas.classList.add('primas')
  } else if (number === 4) {
    hermanas.classList.remove('primas');
    amigos.classList.add('mac');
  }
}