function filterByType(type){
  var dropType = type.children[0].innerHTML;
  var articleArr = store.types.find(findByTypeName).articles;

///////////////////// does this need to be inside the function?
  function findByTypeName(type) {
    return type.name === dropType
  }
  articleByTypeRender(articleArr)
}

//////////////// move to app.js where the rest of the values are rendered
function articleByTypeRender(array) {
  let string = $('#article-template').html();
  let template = Handlebars.compile(string);
  var htmlString = template({articles: array})
  $('#results').empty();
  $('#results').append(htmlString);
};
