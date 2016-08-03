function formatSearchTerm (userInput) {
  if (userInput.split(" ").length > 2) {
    userInput = addressFieldExtender(userInput);
  }
  return userInput
}

function extractSearchTerm(userInput) {
  if(userInput.includes(",")){
    var streetName = userInput.split(', ')[0]
    return removeBuildingNumber(streetName)
  }
}

function removeBuildingNumber(streetName) {
  //replace if(Number(streetName.split(" ")[0]) !== NaN ) becuase it returned true and false...
  var N = 100000;
  numArray = Array.apply(null, {length: N}).map(Number.call, Number)
  if(numArray.includes(Number(streetName.split(" ")[0])) === true){
    return streetName.split(" ").slice(1, streetName.length).join(" ")
  } else {
    return streetName
  }
}
