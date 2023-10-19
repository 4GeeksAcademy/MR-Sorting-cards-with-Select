import { bottom } from "@popperjs/core";
import "./style.css";

///--- GENERACION DE CARTA ALEATORIA---///

const cards = document.querySelectorAll(".card");
const form = document.querySelector("form");

form.addEventListener("submit", event => {
  event.preventDefault();
  const x = parseInt(document.getElementById("amount").value, 10);

  if (isNaN(x) || x < 1 || x > 10) {
    alert("Please insert a number bewteen 1 and 10");
    return;
  }

  cards.forEach(card => {
    let topcorner = card.querySelector(".top-corner");
    let bottomcorner = card.querySelector(".bottom-corner");
    let cardnumber = card.querySelector(".card-number");

    let selectedpinta = RandomPintaGenerator();

    topcorner.classList.remove(topcorner.classList.item(1));
    topcorner.classList.add(selectedpinta);
    bottomcorner.classList.remove(bottomcorner.classList.item(1));
    bottomcorner.classList.add(selectedpinta);
    cardnumber.innerHTML = RandomNumberGenerator();
  });
});

let RandomNumberGenerator = () => {
  const possiblenumberpicks = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const numbertopick = Math.floor(Math.random() * possiblenumberpicks.length);
  return possiblenumberpicks[numbertopick];
};

let RandomPintaGenerator = () => {
  const pinta = ["heart", "diamond", "club", "spade"];
  const pintatopick = Math.floor(Math.random() * pinta.length);
  return pinta[pintatopick];
};

// function GenerateRandomCard(input) {
//   return (
//     <div className="card">
//       <span className="top-corner"></span>
//       <span className="card-number"></span>
//       <span className="bottom-corner"></span>
//     </div>
//   );
// }
