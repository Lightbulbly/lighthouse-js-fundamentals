function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(lineLength) {
  var Triangle = "";
  let x=1;
  for (x = 1; x <= lineLength; x++) {
    Triangle = Triangle + makeLine(x);
     
    //  console.log(Triangle);
  }
  return Triangle;
}
console.log(buildTriangle(10));

// function makeLine(length) {
//   var line = "";
//   for (var j = 1; j <= length; j++) {
//     line += "* ";
//   }
//   return line + "\n";
// }

// function buildTriangle(height) {
//   var num = 1;
//   for (var i = 0; i < height; i++) {
//     console.log(makeLine(num));
//     num = num + 1;
//   }
// }
// buildTriangle(5);