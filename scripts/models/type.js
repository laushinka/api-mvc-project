class Type {
  constructor(name) {
    this.name = name.replace("&", "and")
    this.articles = []
    store.types.push(this)
  }
}
