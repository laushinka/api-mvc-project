const store={articles: []}

$(function(){
//   // When the user clicks the submit button,
//     // Gather the user input from the textbox
//     // Make the request and get back the json
//     // Append the images onto the page
$('input:submit').on("click", function getAjax(){
      event.preventDefault();

      var user_input = $('#location').val()
      article_adapter(user_input)

      // var artist = data.artists.items[0]
      // var artist_image = artist.images[0].url
      // $('.images').append(`<img src=${artist_image}>`)
      });
    });



class Article {
  constructor(headline, teaser, date, url, image, search_term) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.url = url;
    this.image = image;
    this.search_term = search_term;
    store.articles.push(this);
  }
}
