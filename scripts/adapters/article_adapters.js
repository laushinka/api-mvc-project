function submittedArticleAdapter(searchTerm){
    event.preventDefault();
  return $.ajax({
    method: "GET",
    url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q="${searchTerm}"&fq=headline:${searchTerm}?&api-key=6c40f5b5259d4eb28e241c5b3aed4a75`
  }).done(function( data ) {
    var articles = data.response.docs
    articles.forEach(function(article){
      var newDate = new Date(article.pub_date)
      var formattedDate = Date.prototype.getFullYear.call(newDate)
      var newArticle = new Article(article.headline.main.split(";")[0], article.lead_paragraph,
        formattedDate, article.web_url, searchTerm, article.news_desk)
        addToType(newArticle)
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
      var newDate = new Date(article.pub_date)
      var formattedDate = Date.prototype.getFullYear.call(newDate)
      var newArticle = new Article(article.headline.main.split(";")[0], article.lead_paragraph,
      formattedDate, article.web_url, searchTerm, article.news_desk)
      addToType(newArticle)
      })
    renderAll();
  })
}

function addToType(newArticle) {
  var typeName =  newArticle.type
  var newName = checkTypeValue(typeName)
  function findByTypeName(type) {
    return type.name === newName
  }
  var type = store.types.find(findByTypeName)
  if (type) {
    newArticle.type
    type.articles.push(newArticle)
  } else {
    new Type(newArticle.type)
    var type = store.types.find(findByTypeName)
    type.articles.push(newArticle)
  }
}

function renderAll(){
  timeline();
  render();
  location_render();
  dropdown_render();
}
