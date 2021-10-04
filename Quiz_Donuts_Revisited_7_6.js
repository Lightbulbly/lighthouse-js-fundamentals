var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];
var donutSummary = function(Array){
  console.log(Array.type + " donuts cost $" + Array.cost + " each");
}
donuts.forEach(donutSummary);



// var donutSummary = function () {
//   for (var i = 0; i < donuts.length; +i++) {
//     console.log(donuts[i].type + " donuts cost $" + donuts[i].cost + "each");
//   }
// }
// donutSummary();


// donuts.forEach(donutSummary);

// Jelly donuts cost $1.22 each
// Chocolate donuts cost $2.45 each
// Cider donuts cost $1.59 each
// Boston Cream donuts cost $5.99 each
