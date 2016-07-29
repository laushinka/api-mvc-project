function article_adapter(article_name){
  return $.ajax({
    method: "GET",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${article_name}?&api-key=6c40f5b5259d4eb28e241c5b3aed4a75`
  }).done(function( data ) {
    var articles = data.response.docs
  })
}
