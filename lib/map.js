var map;
var geocoder;

// Jquery testing
// $(document).ready(function(){
//   console.log("Yay, this is jQuery!");
// });

// initialize map
function initMap(){
var myOptions = {
          center: new google.maps.LatLng(40.70512367716837, -74.0138840675354 ), // Example latitude langitude for initial show
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP // Example type. Can play with this later.
      };

      // Geocoder converts addresses into latitude langitude coordinates,
      // which allows us to place the marker on the map
      geocoder = new google.maps.Geocoder();
      var map = new google.maps.Map(document.getElementById("map"), // appends map to div tag
      myOptions);

      google.maps.event.addListener(map, 'click', function(event) {
          placeMarker(event.latLng); // captures lat-lang in click and passes in to placeMarker func
      });

      var marker;

      function placeMarker(location) { // location params is passed in from click event
          if (marker) { // if marker already exists
              marker.setPosition(location); //sets location to marker
          } else {
              marker = new google.maps.Marker({ //creates a new marker object
                  position: location,
                  map: map
              });
          }
          console.log(location.lat()); // can decide other things we want to do with this information
          console.log(location.lng()); // same as above
          getAddress(location); // gets address to show in text boxes
      }

function getAddress(latLng) {
  geocoder.geocode( {'latLng': latLng},
    function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0]) { // if address exists
          var fulladdress = results[0].formatted_address;
          var addr_arr = fulladdress.split(",");
          // addr_arr = ["43 Broad St", " New York", " NY 10004", " USA"]
          store.locations = []
          new_address(addr_arr)
          // constructor(building, street, city, state, country)
              // if(addr_arr[1] === " New York" && addr_arr[2].includes("NY")){
              //   $("#street").val(addr_arr[0]);
              // } // sets #street value
              // else if(addr_arr[3] === " USA"){
              //   $("#street").val(addr_arr[1]);
              // }
              // else {
              //   $("#street").val(addr_arr[3]);
              // }
           $("#street").val(addr_arr[0]); // sets #street value
          if (addr_arr.length > 1) {
            $("#city").val(addr_arr[2]); // sets #city value, but need to fix
          }
          if (addr_arr.length > 2) {
            $("#country").val(addr_arr[3]); // sets #country value, but need to fix
          }
        }
        else { // if no address is available
          $("#address_name").val("No results");
        }
      }
      else {
        // if no location details are available
        alert("Unable to process the request " + status);
      }
    });
  }
}

function new_address(addr_arr){
  new Location(addr_arr[0], address_field_extender(addr_arr[0].split(' ').slice(1).join(' ')),
  addr_arr[1], states[addr_arr[2].split(" ")[1]], addr_arr[3])
}





const states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}
