var map;
var geocoder;
const country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
		,"Yemen","Zambia","Zimbabwe"];

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
        if (results.length > 0) { // if address exists
          var fulladdress = results[0].formatted_address;
          var addr_arr = fulladdress.split(",");
          $("#country").val(results[results.length - 1].formatted_address);
          $("#street").val(addr_arr[0]); // sets #street value
          if (addr_arr.length > 1) {
            $("#city").val(addr_arr[-2]); // sets #city value, but need to fix
          }
          // if (addr_arr.length > 2) {
          //   $("#country").val(addr_arr[-1]); // sets #country value, but need to fix
          // }
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
