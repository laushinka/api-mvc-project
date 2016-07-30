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
