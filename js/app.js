function loadPage() {
  
  
  $("#filtro").keydown(filterOptions);
}


function paintRestaurantsHtml (restaurant) {
  // crear elementos con DOM
  var $div = $("<div />", {
    "class": "panel panel-default"
  });
  var $containerRestaurantName = $("<h4 />");
  var $containerType = $("<p />");
  var  $containerPrice = $("<p />");
  //incluir info a modal


  // Agregamos atributos y eventos a los elementos creados en el dom
  $div.attr('data-toggle','modal')
  $div.attr('data-target','.bs-example-modal-sm')
  // Asignando valores
  
  $containerType.text(restaurant.type);
  $containerRestaurantName.text(restaurant.name);
  $containerPrice.text(restaurant.price);

  $div.append($containerRestaurantName);
  $div.append($containerType);
  $div.append($containerPrice);
  // console.log($newContact);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#section-food").prepend($div);
  
}



function filterOptions (){
  var searchOption = $("#filtro").val().toLowerCase();
    if($("#filtro").val().trim().length > 0) {
        var filteredData = data.filter(function(restaurant) {
           console.log(restaurant);
            return restaurant.type.toLowerCase().indexOf(searchOption) >= 0;
				});
				$("#section-food").empty();
				filteredData.forEach(function(restaurant){
					paintRestaurantsHtml(restaurant);
				});
			} else {
				$("#section-food").empty();
				data.forEach(function(restaurant){
					paintRestaurantsHtml(restaurant);
				});      
			}
      
    

  
  console.log(filterOptions);

  
}





  
$(document).ready(loadPage);