export default class Ghosts {
  constructor(id, positionG) {
    this.id = id;
    this.positionG = positionG;
    this.IdAleatoire();
    this.board();
    //   this.moveGhosts();

  }

  get id() {
    return this.IdAleatoire;
  }
  set id(id) {
    this.id = id;
  }



     moveGhost() {
        const directions = [-1, 1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

      
            if (
                !zones[this.positionG + direction].classList.contains("ghost") &&
                !zones[this.positionG + direction].classList.contains("wall")
            ) {
                zones[this.positionG].classList.remove("ghost")
                this.positionG += direction
                squares[this.positionG].classList.add("ghost")
            } else {direction = directions[Math.floor(Math.random() * directions.length)]
           
          
            }

   
       
    }
//     Ghosts.forEach(() => {
//       zones[this.positionG].classList.add("ghosts");
//     });
//     //   // document.querySelector(".ghosts")
//     for (let i = 0; i < layout.lenght; i++) {
//       let j = this.IdAleatoire();
//       if (layout[i] === 2 && layout[i] !== 1)
//         zones[i].classList.remove("ghosts");
//       zones[j].classList.add("ghosts");

//       layout[i] = 0;
//       layout[j] = 2;
//       break;
//     }
//   }

//   IdAleatoire() {
//     Math.floor(Math.random() .layout.lenght);
//   }


// }

  // zones.push(new Ghosts());
  // zones.push(new Ghosts());
  // zones.push(new Ghosts());
  // zones.push(new Ghosts());




// //   let ghost1 = document.createElement("ghost");
// //   ghost1.classList.add("ghost1");

// //   let ghost2 = document.createElement("ghost");
// //   ghost2.classList.add("ghost2");

// //   let ghost3 = document.createElement("ghost");
// //   ghost3.classList.add("ghost3");

// //   let ghost4 = document.createElement("ghost");
// //   ghost4.classList.add("ghost4");
// // }
