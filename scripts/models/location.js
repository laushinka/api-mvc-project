class Location {
  constructor(building, street, city, state, country) {
    this.building = building;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    store.locations.push(this)

    preventUSADisplay(this)
    preventNYCDisplay(this)
   }
}

function preventUSADisplay (address) {
  if (address.country=== " USA"){
     address.country = ""
   }
}

function preventNYCDisplay (address) {
  if (address.city === " New York"){
     address.city = ""
   }
}
