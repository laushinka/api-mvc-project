const store={articles: [], locations: []}

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
      var streetName = user_input.split(' ').slice(1).join(' ')
      var article_object = article_adapter(streetName);
    })
  });

      function render(){
         let string = $('#article-template').html();
         let template = Handlebars.compile(string);
         var htmlString = template({articles: store.articles})
         store.articles = []
         $('#results').empty();
         $('#results').append(htmlString);
    }


    function location_render(){
       let string = $('#location-template').html();
       let template = Handlebars.compile(string);
       var htmlString = template(store.locations[0])
       $('#results').prepend(htmlString);
     }
