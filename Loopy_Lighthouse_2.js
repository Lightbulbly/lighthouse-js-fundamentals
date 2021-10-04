var loopyLighthouse = function (range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if ((i % multiples[0] !== 0) && (i % multiples[1] !== 0)) {
      console.log(i);
    }
    else if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) { console.log(words[0]); }
    else if (i % multiples[1] === 0) { console.log(words[1]); }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

// loopyLighthouse(range, multiples, words) 
// var range = [start, end] //an array of 2 numbers representing the start and end values for the loop.
// multiples // an array of 2 numbers representing the multiples you want to replace with words.
// words // an array of 2 strings representing the words that will replace the multiples.