let layout = [
  0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,

  0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0,

  0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 0, 0, 1, 0, 2, 2, 2, 2, 2, 0, 1, 0, 0, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0,

  0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0,

  0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0,
];

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
let grid = document.querySelector(".boardGame");
let zones = [];
let length = 20;

function board() {
  for (let b = 0; b < layout.length; b++) {
    let zoneG = document.createElement("div");
    zoneG.id = b;
    grid.appendChild(zoneG);
    zones.push(zoneG);

    if (layout[b] === 0) {
      zones[b].classList.add("candy");
    }
    if (layout[b] === 1) {
      zones[b].classList.add("wall");
    }
    if (layout[b] === 2) {
      zones[b].classList.add("ghostPlace");
    }
  }
}
board();


let pMan = document.querySelector(".pMan");


// function pacmanMove() {}
