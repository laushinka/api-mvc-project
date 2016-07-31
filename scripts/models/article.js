class Article {
  constructor(headline, teaser, date, url, search_term, news_desk) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.url = url;
    this.search_term = search_term;
    this.type = checkTypeValue(news_desk)
    store.articles.push(this)


    // addToType(this)
  }


}

function checkTypeValue(news_desk) {
  if (typeof news_desk === "string"){
    return news_desk
  }
  else {
    return "Unlisted"
  }
}
