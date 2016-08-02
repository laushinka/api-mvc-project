class Article {
  constructor(headline, teaser, date, url, searchTerm, newsDesk) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.url = url;
    this.searchTerm = searchTerm;
    this.type = checkTypeValue(newsDesk)
    store.articles.push(this)
  }
}

function checkTypeValue(newsDesk) {
  if ( (typeof newsDesk === "string" ) && (newsDesk !== "None" ) ){
    return newsDesk.replace("&", "and")
  } else {
    return "Unlisted"
  }
}
