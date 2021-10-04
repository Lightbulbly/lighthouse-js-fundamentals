var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];


var rawtotal = bills.map(x => x * 1.15);
var total = rawtotal.map(x => x.toFixed(2));
var totals = total.map(x => Number(x));
console.log(totals);
 
//  //standard answer

//  ar bills = [50.23, 19.12, 34.01,
//   100.11, 12.15, 9.90, 29.11, 12.99,
//   10.00, 99.22, 102.20, 100.10, 6.77, 2.22
// ];
// var totals = bills.map(function (element) {
//   element *= 1.15;
//   element = element.toFixed(2);
//   element = Number(element);

//   return element;
// });


// /*
// // Method 2
// var totals = bills.map(function(element) {
//   element *= 1.15;
//   return Number(element.toFixed(2));
// });
// */
// console.log(totals);