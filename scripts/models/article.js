class Article {
  constructor(headline, teaser, date, url, search_term, image, news_desk) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.url = url;
    this.image = image;
    this.search_term = search_term;
    this.type = checkTypeValue(news_desk)
    store.articles.push(this)
    // addToType(this)
  }
}

function addToType(article) {
  var typeName =  article.type
  store.types[typeName].push(article)
}
//
function checkTypeValue(news_desk) {
  debugger
  if (news_desk === null){
    return "Unlisted"
  }
  else {
    return news_desk
  }
}
