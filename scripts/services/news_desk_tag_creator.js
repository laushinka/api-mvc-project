function newsDeskTagCreator(article) {
  if (!store.types.includes(article.news_desk) && !store.types.includes("Unlisted")) {
    if (article.news_desk === null) {
      return new Type("Unlisted")
    }
    else  {
      return new Type(article.news_desk)
    }
  }
}
