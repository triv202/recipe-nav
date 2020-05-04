$(document).ready(function() {

  // Making contains case insensitive
  jQuery.expr[':'].contains = function(a, i, m) {
    return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
  };

  var ingredients = $(':header:contains("Ingredients"):visible').last();

  if (ingredients.length) {
    console.log("Ingredients element: " + ingredients[0].outerHTML);

    ingredients.get(0).scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });

  } else {
    alert("Sorry we can't find the recipe you're looking for :/")
  }
});
