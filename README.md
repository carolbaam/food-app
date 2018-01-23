1. F O O D M A P
Es una web-app que a través de un input puede filtrar  restaurantes que se encuentran pre dados en una pequeña base de datos en forma de arreglo con objetos

FLUJO DE LA APLICACIÓN.
Vista splash con duración de  5 segundos que redirecciona a la vista principal. 

En la vista principal se muestran un mapa con los restaurantes "cerca de ti" junto con los inputs para filtrar la elección (aunque no estan relacionados el mapa y los restaurantes disponibles ya que éstos están pre dados, aún así el mapa se actauliza dependiendo de la ubicaión del usuario y muestra los restaurantes cercanos ).
Los inputs filtraran; uno por especialidad, ya sea mexicana italiana o japones, y el segundo por nombre del restaurante. Los dos inputs son independientes. 

Ya que se hizo la elección del filtro se muestran únicamente aquellos restaurantes que cumplen con la condición. 

Al seleccionar alguno de los restaurantes, se muestra un modal que debería contener la información de cada uno, aunque ahora solo aparece el modal gernério sin información personalizada pues eso se buscará en un segundo alcance.

Una vez cerrado el modal debe volver a la vista principal.
