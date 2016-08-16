function updateDisplay () {
  $("#menu1").css("display", "block");
  $("#timeline-menu").css("display", "block");
  $("#map").css("float", "right");
}

function render(){
   let string = $('#article-template').html();
   let template = Handlebars.compile(string);
   var htmlString = template({articles: store.articles.sort(function(a, b){if(a.date > b.date){return 1;} if (a.date < b.date){return -1;}return 0})})
      $('.carousel-inner').empty()
      $('.carousel-inner').append('<div class="item active"></div>')
   store.articles.forEach(function(article, index){
     $('.carousel-inner').append(`<div class="item" id="item${index}">
     <h2>
      <a id="details-headline" target="_blank" href="${article.url}">${article.headline}</a>
    </h2>
      <p> ${article.fullDate} </p>
      <br>
      <h4> ${article.teaser}</h4></div>`)
  })
  // $('#item1').css("class", "item active")
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

 function articleDetailsRender(object) {
   let string = $('#article-details-template').html();
   let template = Handlebars.compile(string);
   var htmlString = template(object)
   $('#timeline-detail').empty();
   $('#timeline-detail').append(htmlString);
 };


 function renderAll(){
   timeline();
   render();
   locationRender();
   dropdownRender();
 }


 $('#').on('slide.bs.carousel', function () {
   console.log('no')
   // do something…
 })

$(function(){
 $('#carousel-example-generic').bind('slide.bs.carousel', function (e) {
   var itemNumber = e.relatedTarget.id.substring(e.relatedTarget.id.length-1)
   $(`#${itemNumber}`).attr("stroke", "white").attr("stroke-width", "2")

});
});


$(function(){
$('#carousel-example-generic').bind('slide.bs.carousel', function (e) {
  var itemNumber = e.relatedTarget.id.substring(e.relatedTarget.id.length-1)
  var circleArray = Array.prototype.slice.call($('.circle'));
  circleArray.map((circle) =>{
    if(circle.id !== itemNumber){
      $(`#${circle.id}`).attr("stroke-width", "0")
    }
})
})
})
