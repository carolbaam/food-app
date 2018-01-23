
//función para cargar la funcionalidad de los filtros instalados en los inputs
function loadPage() {
  
  
  $("#filtro").keydown(filterOptions)
  $("#filtro2").keydown(filterOptions2);
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


  //  atributos y eventos a los elementos creados en el DOM
  $div.attr('data-toggle','modal')
  $div.attr('data-target','.bs-example-modal-sm')
  $div.addClass('pretty-div')
 
  // Asignando valores
  
  $containerType.text(restaurant.type);
  $containerRestaurantName.text(restaurant.name);
  $containerPrice.text(restaurant.price);

  $div.append($containerRestaurantName);
  $div.append($containerType);
  $div.append($containerPrice);
 
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#section-food").prepend($div);
  
}

//Función de filtro1

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

//función de filtro2
function filterOptions2 (){
  var searchOption = $("#filtro2").val().toLowerCase();
    if($("#filtro2").val().trim().length > 0) {
        var filteredData = data.filter(function(restaurant) {
           console.log(restaurant);
            return restaurant.name.toLowerCase().indexOf(searchOption) >= 0; 
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
      
    

  
  console.log( filterOptions2 );

  
}






  
$(document).ready(loadPage);