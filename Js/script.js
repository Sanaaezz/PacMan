import Score from "./score.js";
import Ghosts from "./ghosts.js";
import PacMan from "./persoPacMan.js";

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
// const width = 19;
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
    if (layout[i] === 3) {
      zones[i].classList.add("pMan");
    }
  }
}
board();
 window.addEventListener("keydown", function (event) {
      console.log(event.code);
      if (event.code == "ArrowUp") {
        console.log("test");
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
          if (layout[i] === 3 && layout[j] !== 1 && layout[j] !== 2) {
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
          if (layout[i] === 3 && layout[j] !== 1 && layout[j] !== 2) {
            zones[i].classList.remove("pMan");
            zones[j].classList.remove("candy");
            zones[j].classList.add("pMan");

            layout[i] = 0;
            layout[j] = 3;
            break;
          }
        }
      } else {
        event.code == "ArrowRight";
        for (let i = 0; i < layout.length; i++) {
          let j = i + 1;

          if (layout[i] === 3 && layout[j] !== 1 && layout[j] !== 2) {
            console.log(i);
            console.log(j);

            zones[i].classList.remove("pMan");
            zones[j].classList.remove("candy");
            zones[j].classList.add("pMan");

            layout[i] = 0;
            layout[j] = 3;
            break;
          }
        }
      }
    });
 let start = document.boardGame.createElement("div")
 start.classList.add("start")


 window.document.addEventListener("click", () => {

 });
// let pManStatPosition = 103
// zones[pManStatPosition].classList.add("pMan")

// function movePacman(move) {

//     if(

//     )
// }

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
