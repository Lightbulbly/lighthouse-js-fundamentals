// var donutBox = [
//   ["glazed", "chocolate glazed", "cinnamon"],
//   ["powdered", "sprinkled", "glazed cruller"],
//   ["chocolate cruller", "Boston creme", "creme de leche"]
// ];

// for (var row=0;row <donutBox.length; row++){
//   console.log(donutBox[row]);
//   for (var column=0; column<donutBox[row].length; column++){
//     console.log(donutBox[row][column]);
//   }
// }

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (var r=0; r< numbers.length; r++){
  // console.log(numbers[r]);
  for (var c=0; c < numbers[r].length; c++){
    // console.log(numbers[r][c]);
    if (numbers[r][c]%2 ===0) numbers[r][c]="even";
    else numbers[r][c]="odd";
  }
}
console.log(numbers);

//standard answer below
// Let i represents a sub-array
// for(var i=0; i<numbers.length; i++){

//   // Let j represents the length of a sub-array 
//   for(var j=0; j<numbers[i].length; j++){
//       if(numbers[i][j]%2===0)
//           numbers[i][j]="even";
//       else
//           numbers[i][j]="odd";
//   }
// }

// // Print the final array
// console.log(numbers);