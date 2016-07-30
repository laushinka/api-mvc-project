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
} 
