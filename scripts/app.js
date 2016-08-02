const store={articles: [], locations: [], types: []}

$(function(){
//   // When the user clicks the submit button,
//     // Gather the user input from the textbox
//     // Make the request and get back the json
//     // Append the images onto the page
  $('#button').on("click", function getAjax(){
    event.preventDefault();
    store.types = []
    var userInput = formatAddress();
    var streetName = extractSearchTerm(userInput);
    var article_object = submittedArticleAdapter(streetName);
    setLocationToMap(); // Sets the given location to map. Function implemented in map.js
    updateCSS();
  })
});

function updateCSS() {
  $("#menu1").css("display", "block"); // Dropdown button
  $("#timeline-menu").css("display", "block"); // Timeline button
  $("#map").css("float", "right"); // Move map
}

function extractSearchTerm(userInput) {
  if(userInput.includes(",")){
  var streetName = userInput.split(', ')[0]
  removeBuildingNumber(streetName);
  } else {
    var streetName = userInput
  }
  return streetName
}

function removeBuildingNumber(streetName) {
  if(Number(streetName.split(" ")[0]) !== NaN ){
    streetName = streetName.split(" ").slice(1, streetName.length).join(" ")
  } else {
  streetName = streetName.join(" ")
  }
  return streetName
}

function formatAddress() {
  var userInput = $('#location').val()
  if (userInput.split(" ").length > 2) {
    userInput = addressFieldExtender(userInput);
  }
  return userInput;
}

function render(){
  let string = $('#article-template').html();
  let template = Handlebars.compile(string);
  var htmlString = template({articles: store.articles.sort(function(a, b){if(a.date > b.date){return 1;} if (a.date < b.date){return -1;}return 0})})
  store.articles = []
  $('#results').empty();
  $('#results').append(htmlString);
}

function dropdownRender(){
  var stuff = $('#dropdown-template').html();
  var template = Handlebars.compile(stuff);
  var htmlString = template({types: store.types});
  $('.dropdown-menu').empty();
  $('.dropdown').append(htmlString);
}

function locationRender(){
  let string = $('#location-template').html();
  let template = Handlebars.compile(string);
  var htmlString = template(store.locations[0])
  $('#address_fields').empty();
  $('#address_fields').append(htmlString);
 }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
