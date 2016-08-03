function submittedArticleAdapter(searchTerm){
    event.preventDefault();
  return $.ajax({
    method: "GET",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q="${searchTerm}"&fq=headline:${searchTerm}?&api-key=6c40f5b5259d4eb28e241c5b3aed4a75`
  }).done(function( data ) {
    var articles = data.response.docs
    articles.forEach(function(article){
      articleObjectCreator(article, searchTerm)
        })
    renderAll();
  })
}

function linkedArticleAdapter(searchTerm){
  var searchTerm = searchTerm.dataset.repo
    event.preventDefault();
  return $.ajax({
    method: "GET",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q="${searchTerm}"?&api-key=6c40f5b5259d4eb28e241c5b3aed4a75`
  }).done(function( data ) {
    var articles = data.response.docs
    articles.forEach(function(article){
      articleObjectCreator(article, searchTerm)
      })
    renderAll();
  })
}
