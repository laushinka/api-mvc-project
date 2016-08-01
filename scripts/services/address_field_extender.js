function address_field_extender(str){
  if(str.includes(" St")){
    if (str.includes(" Street") === false){
    return str.replace(" St", " Street");
  }
  return str;
  }
  else if(str.includes(" Ave")){
    if (str.includes(" Avenue") === false){
      return str.replace(" Ave", " Avenue");
    }
    return str;
  }
  else if(str.includes(" Pl")){
    if (str.includes(" Place") === false){
      return str.replace(" Pl", " Place");
    }
    return str;
  }
  else if(str.includes(" Rd")){
    if (str.includes(" Road") === false){
      return str.replace(" Rd", " Road");
    }
    return str;
  }
  else if(str.includes(" Dr")){
    if (str.includes(" Drive") === false){
      return str.replace(" Dr", " Drive");
    }
    return str;
  }
  else if(str.includes(" Ln")){
    if (str.includes(" Lane") === false){
      return str.replace(" Ln", " Lane");
    }
    return str;
  }
  else if(str.includes(" Blvd")){
    if (str.includes(" Boulevard") === false){
      return str.replace(" Blvd", " Boulevard");
    }
    return str;
  }
}
