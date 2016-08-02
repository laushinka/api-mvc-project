function filterByType(type){
  var dropType = type.children[0].innerHTML;
  var articleArr = store.types.find(findByTypeName).articles;

  function findByTypeName(type) {
    return type.name === dropType
  }
  articleByTypeRender(articleArr)
}
