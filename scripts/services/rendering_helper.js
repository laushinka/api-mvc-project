function updateDisplay () {
  $("#menu1").css("display", "block");
  $("#timeline-menu").css("display", "block");
  $("#map").css("float", "right");
}

function render(){
   let string = $('#article-template').html();
   let template = Handlebars.compile(string);
   var htmlString = template({articles: store.articles.sort(function(a, b){if(a.date > b.date){return 1;} if (a.date < b.date){return -1;}return 0})})
   store.articles = []
   $('#results').empty();
   $('#results').append(htmlString);
 }

function locationRender(){
   let string = $('#location-template').html();
   let template = Handlebars.compile(string);
   var htmlString = template(store.locations[0])
   $('#address_fields').empty();
   $('#address_fields').append(htmlString);
 }

 function articleByTypeRender(array) {
   let string = $('#article-template').html();
   let template = Handlebars.compile(string);
   var htmlString = template({articles: array})
   $('#results').empty();
   $('#results').append(htmlString);
 };


 function renderAll(){
   timeline();
   render();
   locationRender();
   dropdownRender();
 }
