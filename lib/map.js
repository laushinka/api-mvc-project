var map;
var geocoder;
var marker;
var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
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
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","UK","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
		,"Yemen","Zambia","Zimbabwe"];

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
							map: map
					});
				}
				getAddress(new google.maps.LatLng(lat, long));
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
				$("#location").val(addr_arr[0]); // sets #location value
				// addr_arr = ["43 Broad St", " New York", " NY 10004", " USA"]
				store.locations = []
				new_address(addr_arr)

				 $("#location").val(addr_arr[0]); // sets #location value
				// if (addr_arr.length > 1) {
				//   $("#city").val(addr_arr[-2]); // sets #city value, but need to fix
				// }
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
  new Location(addr_arr[0], address_field_extender(addr_arr[0].split(' ').slice(1).join(' ')),
  addr_arr[1], states[addr_arr[2].split(" ")[1]], addr_arr[3])
}

function setLocationToMap(){
	var address = $("#location").val();
	getLatitudeLongitude(address);
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
