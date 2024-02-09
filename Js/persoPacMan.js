   
export default class PacMan {
  constructor(id, positionP = 104, ) { 
    let pMan = document.createElement("div")
    console.log(pMan);
    this.id = id
    this.positionP = positionP;
    
    this.movePacman();
  }
  movePacman(){
    // plateau[this.positionP].classList.add("PMAN")
  }

}

