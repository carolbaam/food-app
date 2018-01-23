function loadPage() {
  $(".modal").modal();
  
  $("#filtro").keydown(filterOptions);
}


function paintRestaurantsHtml (restaurant) {
  // crear elementos con DOM
  var $restaurant = $("<article />", {
    "class": "panel panel-default"
  });
  var $containerRestaurantName = $("<h4 />");
  var $containerType = $("<p />");
  var  $containerPrice = $("<p />");
  

  // Agregamos atributos y eventos a los elementos creados en el dom
  

  // Asignando valores

  $containerType.text(restaurant.type);
  $containerRestaurantName.text(restaurant.name);
  $containerPrice.text(restaurant.price);

  $restaurant.append($containerRestaurantName);
  $restaurant.append($containerType);
  $restaurant.append($containerPrice);
  // console.log($newContact);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#section-food").prepend($restaurant);
  
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

/*
function filterContacts (){
  var searchContact = $("#searcher").val().toLowerCase();
    if($("#searcher").val().trim().length > 0) {
        var filteredContacts = contacts.filter(function(contact) {
           // console.log(contact);
            return contact.name.toLowerCase().indexOf(searchContact) >= 0;
        });
      $("#publish-contacts").empty();
      filteredContacts.forEach(function(contact){
        paintContactsInHtml(contact);
      });
    } else {
      $("#publish-contacts").empty();
      contacts.forEach(function(contact){
        paintContactsInHtml(contact);
      });      
    }

  
  // console.log(filteredContacts);

  
}*/

var data = [
	{"name": "Casa Juan", "type": "mexicana", "price": "$$$"},
	{"name": "Taquitos bonitos", "type": "mexicana", "price": "$"},
	{"name": "Latoso", "type": "mexicana", "price": "$"},
	{"name": "Chalupas Frescas", "type": "mexicana", "price": "$$$"},
	{"name": "Caminito", "type": "mexicana", "price": "$$"},
	{"name": "Italianissimo", "type": "italiana", "price": "$"},
	{"name": "Jemima", "type": "italiana", "price": "$$$"},
	{"name": "Buffos", "type": "italiana", "price": "$$"},
	{"name": "Linguine", "type": "italiana", "price": "$"},
	{"name": "La Vitta", "type": "italiana", "price": "$$$"},
	{"name": "Katzu", "type": "japones", "price": "$$"},
	{"name": "Shitzu", "type": "japones", "price": "$"},
	{"name": "Ramens", "type": "japones", "price": "$$$"},
	{"name": "Sushittito", "type": "japones", "price": "$$"},
	{"name": "kutimanzuto", "type": "japones", "price": "$"},
	
];

  
$(document).ready(loadPage);