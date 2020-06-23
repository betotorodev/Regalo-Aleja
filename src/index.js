import "./components/cocha/LuisaLetter.js";
import "./components/cocha/LorenaLetter.js";
import "./components/cocha/NicolasLetter.js";
import "./components/dancewa/CamilaLetter.js";
import "./components/dancewa/PatriciaLetter.js";
import "./components/primas/DanielaLetter.js";
import "./components/primas/AdrianaLetter.js";
import "./components/mac/FredyLetter.js";
import "./components/mac/StefanyLetter.js";
import "./components/violeta/TiojohnLetter.js";
import "./components/violeta/LeidyLetter.js";
import "./components/violeta/BebeLetter.js";
import "./components/elkin/ElkinLetter.js";
import "./components/padrinos/MadrinaLetter.js";
import "./components/padrinos/PadrinoLetter.js";
import "./components/perrou/BetoLetter.js";
import "./components/papas/PapaLetter.js";
import "./components/papas/MamaLetter.js";

// lógica botón
const inicio = document.getElementById('beging');
const guevitas = document.getElementById('cochas');
const exYuta = document.getElementById('dancewa');
const hermanas = document.getElementById('primas');
const amigos = document.getElementById('mac');
const millos = document.getElementById('violeta');
const ecuador = document.getElementById('elkin');
const familia2 = document.getElementById('padrinos');
const papasito = document.getElementById('perrou');
const DonChepe = document.getElementById('papa');
const sexy = document.getElementById('mama');
const final = document.getElementById('fin');
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
  } else if (number === 5) {
    amigos.classList.remove('mac');
    millos.classList.add('violeta');
  } else if (number === 6) {
    millos.classList.remove('violeta');
    ecuador.classList.add('elkin');
  } else if (number === 7) {
    ecuador.classList.remove('elkin');
    familia2.classList.add('padrinos');
  } else if (number === 8) {
    familia2.classList.remove('padrinos');
    papasito.classList.add('perrou');
  } else if (number === 9) {
    papasito.classList.remove('perrou');
    DonChepe.classList.add('papa');
  } else if (number === 10) {
    DonChepe.classList.remove('papa');
    sexy.classList.add('mama');
  } else if (number === 11) {
    sexy.classList.remove('mama');
    final.classList.add('fin');
  }
}

// //experiment 

// const cuerpo = document.querySelector('body')

// cuerpo.addEventListener('load', () => console.log("cargando..."))