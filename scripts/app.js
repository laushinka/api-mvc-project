const store={articles: [], locations: [], types: []}

$(function(){

$('#button').on("click", function (){
      event.preventDefault();
      store.types = []
      var userInput = $('#location').val()
      userInput = formatSearchTerm(userInput)
      var streetName = extractSearchTerm(userInput)
      submittedArticleAdapter(streetName);
      setLocationToMap();
      updateDisplay();
    })
  });
