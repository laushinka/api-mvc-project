function addressFieldExtender(str){
  addressFieldReplacement(str, " St", " Street")
  addressFieldReplacement(str, " Ave", " Avenue")
  addressFieldReplacement(str, " Pl", " Place")
  addressFieldReplacement(str, " Rd", " Road")
  addressFieldReplacement(str, " Dr", " Drive")
  addressFieldReplacement(str, " Ln", " Lane")
  addressFieldReplacement(str, " Blvd", " Boulevard")
  return str;
}

function addressFieldReplacement(str, shortName, longName){
  if(str.includes(shortName)){
    if(str.includes(longName) === false){
      return str.replace(shortName, longName);
    }
  }
}
