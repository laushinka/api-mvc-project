function filterByType(type){
  var dropType = type.children[0].innerHTML;
  function findByTypeName(type) {
    return type.name === dropType
  }
  var articleArr = store.types.find(findByTypeName).articles;

  (function articleByTypeRender() {
    let string = $('#article-template').html();
    let template = Handlebars.compile(string);
    var htmlString = template({articles: articleArr})
    $('#results').empty();
    $('#results').append(htmlString);
  }());

}
