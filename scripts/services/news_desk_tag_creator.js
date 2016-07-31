function newsDeskTagCreator(news_desk_value) {
  if (news_desk_value === null) {
    return new Type("Unlisted")
  }
  else {
    return new Type(news_desk_value)
  }
}
