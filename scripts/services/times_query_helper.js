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
  if(Number(streetName.split(" ")[0]) !== NaN ){
    return streetName.split(" ").slice(1, streetName.length).join(" ")
  } else {
    return streetName.join(" ")
  }
}
