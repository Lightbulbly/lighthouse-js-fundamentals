var lastIndexOf = function (CurrentArray, value) {
  for (var i = CurrentArray.length; i >= 0; i--)
    if (value === CurrentArray[i]) { return i; }
    else if (i === 0) { return -1; }
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);

// code	output
// lastIndexOf([ 0, 1, 4, 1, 2 ], 1);	3
// lastIndexOf([ 0, 1, 4, 1, 2 ], 2);	4
// lastIndexOf([ 0, 1, 4, 1, 2 ], 3);	-1
// lastIndexOf([ 5, 5, 5 ], 5);	2
// lastIndexOf([], 3);	-1
