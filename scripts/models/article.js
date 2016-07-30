class Article {
  constructor(headline, teaser, date, url, search_term, image) {
    this.headline = headline;
    this.teaser = teaser;
    this.date = date;
    this.url = url;
    this.image = image;
    this.search_term = search_term;
    store.articles.push(this)
  }
}
