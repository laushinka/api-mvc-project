function newsDeskTagCreator(news_desk_value) {
  if (!store.types.includes(news_desk_value) && !store.types.includes("Unlisted")) {
    if (news_desk_value === undefined) {
      return new Type("Unlisted")
    }
    else  {
      return new Type(news_desk_value)
    }
  }
}
