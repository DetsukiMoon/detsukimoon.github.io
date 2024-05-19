function getFinalOpenedDoors(numDoors) {
  let doors = [];
  let time = 1;
  for(let i = 1; i <= numDoors; i++) {
    console.log(i+time)
    time++
  }
  return doors
}
console.log(getFinalOpenedDoors(100))