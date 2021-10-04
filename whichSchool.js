const whichSchool = function (age) {
  if (age < 13) {
    console.log("I am" + age + ". Which school should I go to?");
    return "Elementary School";
  }
  else if ((age >= 13) && (age <= 18)) {
    console.log("I am" + age + ". Which school should I go to?");
    return "Secondary School";
  }
  else {
    console.log("I am" + age + ". Which school should I go to?");
    return "Lighthouse Labs";

  }
}
console.log("go to " + whichSchool(14));