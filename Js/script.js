import Score from "./score.js";
import Ghosts from "./ghosts.js";
import PacMan from "./persoPacMan.js";

let layout = [
  0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,

  0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0,

  0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 0, 0, 1, 0, 2, 2, 3, 2, 2, 0, 1, 0, 0, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0,

  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
];

const grid = document.querySelector(".boardGame");
const zones = [];
const width = 19;
// zones.push(new PacMan());



function board() {
  for (let i = 0; i < layout.length; i++) {
    let zoneG = document.createElement("div");
    zoneG.id = "n" + i;
    grid.appendChild(zoneG);
    zones.push(zoneG);

    if (layout[i] === 0) {
      zones[i].classList.add("candy");
    }
    if (layout[i] === 1) {
      zones[i].classList.add("wall");
    }
    if (layout[i] === 2) {
      zones[i].classList.add("ghosts");
    }
    // if (layout[i] === 3) {
    //   zones[i].classList.add("pMan");
    // }
  }
}
board();




// let pManStatPosition = 103
// zones[pManStatPosition].classList.add("pMan")

// function movePacman(move) {

//     if(

//     )
// }

// document.addEventListener('keydown',function(event){
// if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)){

// }
// })

// function mur() {
//   for (let d = 1; d < 21; d++) {
//     let murs = document.querySelector(".murs");
//     let div = document.createElement("div");
//     div.setAttribute("class", "zMur" + d);
//     murs.appendChild(div);
//   }

//   let murs = document.querySelector(".murs");
//   murs.style.backgroundColor = "blue";
// }
// mur();
