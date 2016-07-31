class Location {
  // addr_arr = ["43 Broad St", " New York", " NY 10004", " USA"]
  constructor(building, street, city, state, country) {
    this.building = building;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    store.locations.push(this)

    if (this.city === " New York"){
       this.city = ""
     }

     if (this.country=== " USA"){
       this.country = ""
     }


   }
}
