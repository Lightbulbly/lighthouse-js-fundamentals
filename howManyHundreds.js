var howManyHundreds = function (NumOfBottles) {
  var NumOfContainers = (NumOfBottles - (NumOfBottles % 100)) / 100;
  return NumOfContainers;
} 
