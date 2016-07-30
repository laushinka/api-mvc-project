const store={articles: []}

$(function(){
//   // When the user clicks the submit button,
//     // Gather the user input from the textbox
//     // Make the request and get back the json
//     // Append the images onto the page
$('input:submit').on("click", function getAjax(){
      event.preventDefault();
      var user_input = $('#location').val()
      var article_object = article_adapter(user_input);
    })
  });



      function render(){
         let string = $('#article-template').html();
         let template = Handlebars.compile(string);
         var htmlString = template({articles: store.articles})
         $('#results').empty();
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
