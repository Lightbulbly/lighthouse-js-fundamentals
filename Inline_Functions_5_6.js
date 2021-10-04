// var laugh = function (NoH) {
//   var x = "";
//   for (var i = 0; i < NoH; i++) {
//     x = x + "ha";
//   }
//   return x + "!";
// }
//console.log(laugh(2));

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function laugh(NoL) {
  var x = "";
  for (var i = 0; i < NoL; i++) {
    x = x + "ha";
  }
  return x + "!";
});
 // Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression