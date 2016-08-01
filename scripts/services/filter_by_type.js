function filterByType(type){
  // access the inner string
  var dropType = type.children[0].innerHTML;
  // find the matching type
  function findByTypeName(type) {
    return type.name === dropType
  }
  // find the corresponding article
  var articleArr = store.types.find(findByTypeName).articles;

  (function articleByTypeRender() {
    let string = $('#article-template').html();
    let template = Handlebars.compile(string);
    var htmlString = template({articles: articleArr})
    $('#results').empty();
    $('#results').append(htmlString);
  }());

}
