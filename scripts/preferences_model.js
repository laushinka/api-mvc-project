class Preferences {
  constructor() {
    this.types = arguments.split(', ')
  }

  function displayPreferences() {
    var types = this.types.forEach(t => t
    ).join(', ')
    return types
  }
}
