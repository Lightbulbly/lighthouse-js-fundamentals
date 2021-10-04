var ageCalculator = function (name, yearOfBirth, currentYear) {
  var age = currentYear - yearOfBirth;
  // console.log(name + " is " + age + " years old.");
  // The ageCalculator function should return a string explaining how old the person is. For example, if we called ageCalculator("Suzie", 1983, 2015);, the return value should be as follows.
  // "Suzie is 32 years old."  
  return (name + " is " + age + " years old.");
}
ageCalculator("Miranda", 1983, 2015);
// console.log(ageCalculator("Miranda", 1983, 2015));
// console.log(ageCalculator("Ferdinand", 1988, 2015));