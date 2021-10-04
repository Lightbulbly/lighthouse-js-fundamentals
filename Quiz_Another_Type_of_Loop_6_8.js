var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];


test.forEach(function (element, index, array) {
  if (element % 3 === 0) {
    element = element + 100;
    console.log(element);
    array[index] = element;
  } else {
    console.log(element);
    array[index] = element;
  }
});
console.log(test);


// var myFunction = function (element) {
//   if (element % 3 === 0) {
//     element = element + 100;
//     // console.log(element);
//     test[-1] = element;
//   } else {test[-1] = element;}
// test1.push(element);
// }
// test.forEach(myFunction);
// console.log(test1);

// console.log(test);

  // test.forEach(myFunction);
  // console.log(test);
// console.log(test);
// test.forEach(myFunction(test));
// // test.forEach(myFunction(test));
// var myFunction = function (ArrayInstant) {
//   for (var i = 0; i < ArrayInstant.length; i++) {
//     if ((ArrayInstant[i]%3) === 0) {
//       ArrayInstant[i] += 100;
//       console.log(ArrayInstant);
//     }
//   }
// }
// myFunction(test);


// test.forEach(myFunction(test));




//standard answer below for ref
// // You can test your code with a smaller array first
// // var test = [12, 29, 11, 3];

// // Write your code here
// test.forEach(function(item, index){
//   if(item%3===0){
//       // The commented statements below would not be able to change the value of item
//       // because the `item` is a COPY of actual element, while actual is test[index]
//       // item = item + 100;
//       // console.log("The updated element is "+item+" and actual is "+test[index]);
//       test[index]=test[index]+100;
//   }
//   //else 
//   //    console.log("Element "+item+" is not divisible by 3");
// });
// console.log(test);