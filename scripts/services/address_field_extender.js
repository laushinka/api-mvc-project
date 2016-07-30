function address_field_extender(str){
  if(str.includes(" St")){
    return str.replace(" St", " Street");
  }
  else if(str.includes(" Ave")){
    return str.replace(" Ave", " Avenue");
  }
  else if(str.includes(" Pl")){
    return str.replace(" Pl", " Place");
  }
  else if(str.includes(" Rd")){
    return str.replace(" Rd", " Road");
  }
  else if(str.includes(" Dr")){
    return str.replace(" Dr", " Drive");
  }
  else if(str.includes(" Ln")){
    return str.replace(" Ln", " Lane");
  }
}
