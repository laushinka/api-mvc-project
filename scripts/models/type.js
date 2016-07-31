class Type {
  constructor(name) {
    this.name = name
    this.articles = []
    store.types.push(this)
  }
}



  // function displayPreferences() {
  //   var types = this.types.forEach(t => t
  //   ).join(', ')
  //   return types
  // }



//retrieve information on all returned articles
//parse JSON to find news_desk_values
//store those values
//add a selector to filter results
//selector ONLY shows news_desk_values of results
//add tag results with news_desk_values
