var map;
var geocoder;
var marker;

function initMap(){
	var defaultlatlong = new google.maps.LatLng(40.70512367716837, -74.0138840675354 );
	var myOptions = {
		center: defaultlatlong,
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
  geocoder = new google.maps.Geocoder();
  map = new google.maps.Map(document.getElementById("map"), myOptions);
  placeMarker(defaultlatlong);
  google.maps.event.addListener(map, 'click', function(event) {
      placeMarker(event.latLng);
  });
}

function placeMarker(location) {
	setOrCreateMarker(location, map)
	printLongAndLat(location)
	getAddress(location);
}

function createMarker(location, map) {
	marker = new google.maps.Marker({
			position: location,
			map: map
		});
	return marker
}

function setOrCreateMarker(location, map) {
	if (marker) { // if marker already exists
		setMarker(location); //sets location to marker
	} else {
		createMarker(location, map)
	}
}
function setMarker(location) {
	marker.setPosition(location)
}

function printLongAndLat(location) {
	console.log(location.lat());
	console.log(location.lng());
}

function getLatitudeLongitude(address) {
	var address = address || 'New York';
	geocoder = new google.maps.Geocoder();
	if (geocoder) {
		geocoder.geocode({ 'address': address},
			function (results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var lat = results[0].geometry.location.lat();
				var long = results[0].geometry.location.lng();
				var location  = new google.maps.LatLng(lat, long);
				setOrCreateMarker(location, map)
				getAddress(new google.maps.LatLng(lat, long));
				map.panTo(location);
				printLongAndLat(location)
			}
		});
	}
}

function getAddress(latLng) {
	geocoder.geocode( {'latLng': latLng},
	function(results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			if (results.length > 0) {
				var fulladdress = results[0].formatted_address;
				var addrArr = fulladdress.split(",");
				var country = results[results.length - 1].formatted_address
				store.locations = []
				newAddress(addrArr)
				$("#location").val(addrArr.slice(0, addrArr.length));
				if (countryList.includes(country)) {
					$("#location").val(country);
					}
				} else {
					$("#address_name").val("No results");
				}
			} else {
			alert("Unable to process the request " + status);
		}
	});
}

function newAddress(addrArr){
  new Location(addrArr[0], addressFieldExtender(addrArr[0].split(' ').slice(1).join(' ')),
  addrArr[1], states[addrArr[2].split(" ")[1]], addrArr[3])
}

function setLocationToMap(){
	var address = $("#location").val();
	getLatitudeLongitude(address);
}
