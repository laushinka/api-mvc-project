function dropdownRender(){
   var string = $('#dropdown-template').html();
   var template = Handlebars.compile(string);
   var htmlString = template({types: store.types});
   $('.dropdown-menu').empty();
   $('.dropdown').append(htmlString);
}
