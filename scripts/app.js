const store={articles: []}

$(function(){
//   // When the user clicks the submit button,
//     // Gather the user input from the textbox
//     // Make the request and get back the json
//     // Append the images onto the page
$('input:submit').on("click", function getAjax(){
      event.preventDefault();
      var user_input = $('#street').val()
      user_input = address_field_extender(user_input)
      var streetName = user_input.split(' ').slice(1).join(' ')
      var article_object = article_adapter(streetName);
    })
  });


  function address_field_extender(str){
    if(str.includes(" St")){
      return str.replace(" St", " Street");
    }
    else if(str.includes(" Ave")){
      return str.replace(" Ave", " Avenue");
    }
    else if(str.includes(" Pl")){
      return str.replace(" Pl", " Place");
    }
  }

      function render(){
         let string = $('#article-template').html();
         let template = Handlebars.compile(string);
         var htmlString = template({articles: store.articles})
         $('#results').append(htmlString);
    }


class Article {
  constructor(headline, teaser, date, url, search_term, image) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.url = url;
    this.image = image;
    this.search_term = search_term;
    store.articles.push(this)
  }
}
