// import Score from "./score.js";
import Ghost from "./ghosts.js";

let layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,

  1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1,

  1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1,

  1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,

  1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1,

  1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,

  1, 0, 1, 0, 0, 0, 1, 0, 2, 2, 3, 2, 2, 0, 1, 0, 0, 0, 1, 0, 1,

  1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1,

  1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,

  1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,

  1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1,

  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

const grid = document.querySelector(".boardGame");
const zones = [];




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
    if (layout[i] === 3) {
      zones[i].classList.add("pMan");
    }
  }
}
board();

// Mouvement PacMan
window.addEventListener("keydown", function (event) {
  // console.log(event.code);
  if (event.code == "ArrowUp") {
    for (let i = 0; i < layout.length; i++) {
      let j = i - 21;
      if (layout[i] === 3 && layout[j] !== 1 && layout[j] !== 2) {
        zones[i].classList.remove("pMan");
        zones[j].classList.remove("candy");
        zones[j].classList.add("pMan");

        layout[i] = 0;
        layout[j] = 3;
        break;
      }
    }
  } else if (event.code == "ArrowDown") {
    for (let i = 0; i < layout.length; i++) {
      let j = i + 21;
      if (layout[i] === 3 && layout[j] !== 1 /*&& layout[j] !== 2*/) {
        zones[i].classList.remove("pMan");
        zones[j].classList.remove("candy");
        zones[j].classList.add("pMan");

        layout[i] = 0;
        layout[j] = 3;
        break;
      }
    }
  } else if (event.code == "ArrowLeft") {
    for (let i = 0; i < layout.length; i++) {
      let j = i - 1;
      if (layout[i] === 3 && layout[j] !== 1 /*&& layout[j] !== 2*/) {
        zones[i].classList.remove("pMan");
        zones[j].classList.remove("candy");
        zones[j].classList.add("pMan");

        layout[i] = 0;
        layout[j] = 3;
        break;
      }
    }
  } else if (event.code == "ArrowRight") {
    for (let i = 0; i < layout.length; i++) {
      let j = i + 1;

      if (layout[i] === 3 && layout[j] !== 1 /*&& layout[j] !== 2*/) {
        zones[i].classList.remove("pMan");
        zones[j].classList.remove("candy");
        zones[j].classList.add("pMan");

        layout[i] = 0;
        layout[j] = 3;
        break;
      }
    
    }
  }
  GameOver();
  let victoire = document.querySelectorAll('.candy')
  if (victoire.length == 110) {
    alert("gagner");
  }
  console.log(victoire);
});



function RDMdirection(){
  return Math.floor(Math.random()*3)
}
setInterval(() => {

  if (RDMdirection() == 0) {
    console.log(RDMdirection());
    for (let i = 0; i < layout.length; i++) {
      let j = i - 21;
      if (layout[i] === 2 && layout[j] !== 1 && layout[j] !==3) {
        zones[i].classList.remove("ghosts");
        zones[i].classList.add("candy");
        zones[j].classList.remove("candy");
        zones[j].classList.add("ghosts");
        layout[i] = 0;
        layout[j] = 2;
        break;
      }
    }
  } else if (RDMdirection() == 1) {
    for (let i = 0; i < layout.length; i++) {
      let j = i + 21;
      if (layout[i] === 2 && layout[j] !== 1 && layout[j] !==3) {
        zones[i].classList.remove("ghosts");
         zones[i].classList.add("candy");
        zones[j].classList.remove("candy");
        zones[j].classList.add("ghosts");
        layout[i] = 0;
        layout[j] = 2;
           break;
      }
    }
  } else if (RDMdirection() == 2) {
    for (let i = 0; i < layout.length; i++) {
      let j = i - 1;
      if (layout[i] === 2 && layout[j] !== 1 && layout[j] !==3) {
        zones[i].classList.remove("ghosts");
         zones[i].classList.add("candy");
        zones[j].classList.remove("candy");
        zones[j].classList.add("ghosts");
        layout[i] = 0;
        layout[j] = 2;
           break;
      }
    }
  } else if (RDMdirection() == 3) {
    for (let i = 0; i < layout.length; i++) {
      let j = i + 1;

      if (layout[i] === 2 && layout[j] !== 1 && layout[j] !==3) {
        zones[i].classList.remove("ghosts");
         zones[i].classList.add("candy");
        zones[j].classList.remove("candy");
        zones[j].classList.add("ghosts");
        layout[i] = 0;
        layout[j] = 2;
           break; 
      }
    }
  }
} , 500)
console.log();

function GameOver(){

  if (document.querySelector(".pMan").classList.contains("ghosts") ){
   window.alert("GameOver");
  }

};






