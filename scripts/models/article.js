class Article {
  constructor(headline, teaser, date, url, search_term, news_desk) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.url = url;
    this.search_term = search_term;
    this.type = checkTypeValue(news_desk)
    store.articles.push(this)
  }
}

function checkTypeValue(news_desk) {
  if ( (typeof news_desk === "string" ) && (news_desk !== "None" ) ){
    return news_desk.replace("&", "and")
  } else {
    return "Unlisted"
  }
}
