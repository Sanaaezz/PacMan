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

const grid = document.querySelector(".boardGame");
const zones = [];
const width = 19;



function board() {
  for (let b = 0; b < layout.length; b++) {
    let zoneG = document.createElement("div");
    zoneG.id = "p" + b;
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





let score = document.querySelector(".score");



class Ghosts {
  constructor(positionG, speed) {
    this.positionG = positionG;
    this.speed = speed;
  }
}

class PacMan {
  constructor(positionP, food) {
    this.positionP = positionP;
    this.lifes = lifes;
    this.food = food;
    this.movePacman();
  
  }
 

}

let pMan = document.querySelector(".pMan");
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



class Lifes extends PacMan{
  constructor(positionP,food,nbLifes){
    super(positionP, food, nbLifes);
    this.nbLifes = nbLifes;
  }
}
 

class Score {
  constructor(compteur){
    this.compteur = compteur
  }
}
  
  


