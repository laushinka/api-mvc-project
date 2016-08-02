function dropdownRender(){
   var stuff = $('#dropdown-template').html();
   var template = Handlebars.compile(stuff);
   var htmlString = template({types: store.types});
   $('.dropdown-menu').empty();
   $('.dropdown').append(htmlString);
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
