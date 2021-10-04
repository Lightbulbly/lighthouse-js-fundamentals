const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

const finalPosition = function (moves) {
  let x = 0;

  let y = 0;

  for (let move of moves) {
    // console.log(move);
    switch (move) {
    case 'north':
      y = y + 1;
    // console.log("moved north to " + y);
      break;
    case 'west':
      x = x - 1;
    // console.log("moved west to " + x);
      break;
    case 'south':
      y = y - 1;
    // console.log("moved south to " + y);
      break;
    case 'east':
      x = x + 1;
    // console.log("moved east to " + x);
      break;
    }
    // default:
    // console.log(x);
    // console.log(y);
  }
  return [x, y];
}