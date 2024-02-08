    let pMan = document.createElement("div")
    console.log(pMan);
export default class PacMan {
  constructor(id, positionP = 104, ) {
    this.id = id
    this.positionP = positionP;
    this.movePacman();
  }
  movePacman(){
    let pMan = document.getElementsByID("n104")
    plateau[this.positionP].classList.add("PMAN")
  }

}

