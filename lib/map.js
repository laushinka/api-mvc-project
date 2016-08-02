var map;
var geocoder;
var marker;

// initialize map
function initMap(){
// Need default latitude longitude for initial marker to exist
	var defaultlatlong = new google.maps.LatLng(40.70512367716837, -74.0138840675354 );
	var myOptions = {
		center: defaultlatlong, // Example latitude longitude for initial show
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP // Example type. Can play with this later.
	};
  // Geocoder converts addresses into latitude longitude coordinates,
  // which allows us to place the marker on the map
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById("map"), // appends map to div tag
  myOptions);
	// Need this default marker so that the next marker can appear - need to debug this later
  placeMarker(defaultlatlong);

  google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng); // captures lat-long in click and passes in to placeMarker func
  });
}

function placeMarker(location) { // location params is passed in from click event
	if (marker) { // if marker already exists
			marker.setPosition(location); //sets location to marker
	} else {
		marker = new google.maps.Marker({ //creates a new marker object
				position: location,
				map: map,
		});
	}
	console.log(location.lat()); // can decide other things we want to do with this information
	console.log(location.lng()); // same as above
	getAddress(location); // gets address to show in text boxes
}

// For the given address the below function gets longitude and latitude.
// And also sets the marker for that location.
function getLatitudeLongitude(address) {
	// If adress is not supplied, use default
	var address = address || 'New York';
	// Initialize the Geocoder
	geocoder = new google.maps.Geocoder();
	if (geocoder) {
		geocoder.geocode({ 'address': address},
			function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var lat = results[0].geometry.location.lat();
				var long = results[0].geometry.location.lng();
				var location  = new google.maps.LatLng(lat, long);
				if (marker) { // if marker already exists
					marker.setPosition(location); //sets location to marker
				} else {
					marker = new google.maps.Marker({ //creates a new marker object - somehow this one isn't working
							position: location,
							map: map,
					});
				}
				getAddress(new google.maps.LatLng(lat, long));
				map.panTo(location);
				console.log(lat);
				console.log(long);
			}
		});
	}
}

function getAddress(latLng) {
	geocoder.geocode( {'latLng': latLng},
	function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results.length > 0) { // if address exists
				var fulladdress = results[0].formatted_address;
				var addr_arr = fulladdress.split(",");
				var country = results[results.length - 1].formatted_address
				// addr_arr = ["43 Broad St", " New York", " NY 10004", " USA"]
				store.locations = []
				new_address(addr_arr)

				 $("#location").val(addr_arr.slice(0, addr_arr.length)); // sets #location value
				if (country_list.includes(country)) {
					$("#location").val(country);
				}
			} else { // if no address is available
					$("#address_name").val("No results");
			}
		}
		else {
			// if no location details are available
			alert("Unable to process the request " + status);
		}
	});
}

function new_address(addr_arr){
  new Location(addr_arr[0], addressFieldExtender(addr_arr[0].split(' ').slice(1).join(' ')),
  addr_arr[1], states[addr_arr[2].split(" ")[1]], addr_arr[3])
}

function setLocationToMap(){
	var address = $("#location").val();
	getLatitudeLongitude(address);
}
