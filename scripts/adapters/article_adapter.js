function article_adapter(search_term){
    event.preventDefault();
  return $.ajax({
    method: "GET",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q="${search_term}"&fq=headline:${search_term}?&api-key=6c40f5b5259d4eb28e241c5b3aed4a75`
  }).done(function( data ) {
    var articles = data.response.docs
    debugger;
    articles.forEach(function(article){
       if(article.multimedia[0]){
        new Article(article.headline.main, article.lead_paragraph,
        article.pub_date, article.web_url, search_term, article.multimedia[0].url)
       }
       else {
        new Article(article.headline.main, article.lead_paragraph,
        article.pub_date, article.web_url, search_term)
       }
    })
    render()
  })
}
