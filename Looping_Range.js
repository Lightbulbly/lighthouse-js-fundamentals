var range = function (start, end, step) {
  var result = [];
  for (var i = 0; i <= (end - start) / step; i++) {
    result[i] = start + step * i;

  }
  console.log(result);
  return result;
}
range(10, 30, 5);

// range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
// range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
// range(-5, 2, 3);	[ -5, -2, 1 ]