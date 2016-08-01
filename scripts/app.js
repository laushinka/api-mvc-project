const store={articles: [], locations: [], types: []}

$(function(){
//   // When the user clicks the submit button,
//     // Gather the user input from the textbox
//     // Make the request and get back the json
//     // Append the images onto the page
$('input:submit').on("click", function getAjax(){
      event.preventDefault();
      var user_input = $('#location').val()
      if (user_input.split(" ").length > 2) {
        user_input = address_field_extender(user_input);
      }
      var streetName = user_input.split(' ').join(' ');
      var article_object = article_adapter(streetName);
      setLocationToMap(); // Sets the given location to map. Function implemented in map.js
    })
  });

      function render(){
         let string = $('#article-template').html();
         let template = Handlebars.compile(string);
         var htmlString = template({articles: store.articles})
        //  store.articles = []
        //  $('#results').empty();
         $('#results').append(htmlString);
    }

    function dropdown_render(){
       let string = $('#dropdown-template').html();
       let template = Handlebars.compile(string);
       var htmlString = template({types: store.types});
      //  $('#results').empty();
       $('.dropdown').append(htmlString);
    }
  //      function ListsController() {
  //  var title = $("[name= 'list_title']").val()
  //  var newList = new List(title)
  //  $('#lists').append(`<h2><div class="list"><button id ='task ${newList.id}' class="destroy_task">x</button> ${title} <ul id=${newList.id}></ul></div></h2>`)
   //
  //  $("[name='select_list']").append(`<option value =${newList.id}> ${title}</option>`)
  // <label for="select_list">Select List:</label>
  //      <select id="select_list" name="select_list"></select>



    function location_render(){
       let string = $('#location-template').html();
       let template = Handlebars.compile(string);
       var htmlString = template(store.locations[0])
       $('#address_fields').empty();
       $('#address_fields').append(htmlString);
     }

// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

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
