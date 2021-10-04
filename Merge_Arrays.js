var merge = function (Array1, Array2) {
  var Array3 = Array1.concat(Array2);
  return Array3.sort();
}

// code	output
// merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);	[ 1, 2, 3, 4, 4, 5, 6 ]
// merge([ 4 ], [ 2, 5, 8 ]);	[ 2, 4, 5, 8 ]
// merge([ 1, 2, 6 ], []);	[ 1, 2, 6 ]

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);