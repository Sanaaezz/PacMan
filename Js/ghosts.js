export default class Ghost {
  constructor(className, startIndex) {
    this.className = className;
    this.startIndex = startIndex;
 
  }
}
// const ghosts = [
//   new Ghost("ghost1", 134),
//   new Ghost("ghost2", 135),
//   new Ghost("ghost3", 137),
//   new Ghost("ghost4", 138),
// ]




// const zones = [];
// const width = 21;


// ghosts.forEach((ghost) => {
//   zones[ghost.startIndex].classList.add(ghost.className);
//   zones[ghost.currentIndex].classList.add("ghost");
// });

// ghosts.forEach((ghost) => moveGhost(ghost));

// function moveGhost(ghost) {
//   const directions = [-1, 1, 21, -21];
//   let direction = directions[Math.floor(Math.random() * directions.length)];

//   ghost.startIndex = setInterval(function () {
//     if (
//       !zones[ghosts.currentIndex + direction].classList.contains("ghost") &&
//       !zones[ghosts.currentIndex + direction].classList.contains("wall")
//     ) {
//       zones[ghost.currentIndex].classList.remove(ghost.className, "ghost");
//       ghost.currentIndex += direction;
//       zones[ghost.currentIndex].classList.add(ghost.className, "ghost");
//     } else direction = directions[Math.floor(Math.random() * directions.length)];

//     if (zones[ghost.currentIndex].classList.contains("pac-man")) {
//       zones[ghost.currentIndex].classList.remove(ghost.className, "ghost");
//       ghost.currentIndex = ghost.startIndex;
//       score += 100;
//       scoreDisplay.innerHTML = score;
//       zones[ghost.currentIndex].classList.add(ghost.className, "ghost");
//     }
//   }, 1000);
// }
// moveGhost();
// console.log(moveGhost());
