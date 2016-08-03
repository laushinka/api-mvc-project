class Article {
  constructor(headline, teaser, date, url, searchTerm, newsDesk, fullDate) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.fullDate = fullDate;
    this.url = url;
    this.searchTerm = searchTerm;
    this.type = checkTypeValue(newsDesk)
    store.articles.push(this)
  }
}

function articleObjectCreator(article, searchTerm){
  var newDate = new Date(article.pub_date)
  var newFullDate = Date.prototype.toDateString.call(newDate)
  var formattedDate = Date.prototype.getFullYear.call(newDate)
  var newArticle = new Article(article.headline.main.split(";")[0], article.lead_paragraph,
  formattedDate, article.web_url, searchTerm, article.news_desk, newFullDate)
  addToType(newArticle)
  }

function checkTypeValue(newsDesk) {
  if ( (typeof newsDesk === "string" ) && (newsDesk !== "None" ) ){
    return newsDesk.replace("&", "and")
  } else {
    return "Unlisted"
  }
}

function addToType(newArticle) {
  var typeName =  newArticle.type
  var newName = checkTypeValue(typeName)
  function findByTypeName(type) {
    return type.name === newName
  }
  var type = store.types.find(findByTypeName)
  findOrCreateType(type, newArticle, findByTypeName)
}

function findOrCreateType(type, newArticle, findByTypeName){
  if (type) {
    type.articles.push(newArticle)
  } else {
    new Type(newArticle.type)
    var type = store.types.find(findByTypeName)
    type.articles.push(newArticle)
  }
}
