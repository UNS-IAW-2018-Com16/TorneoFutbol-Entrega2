$(".star.glyphicon").click(function() {
  var clase = $(this).toggleClass("glyphicon-star glyphicon-star-empty");
  var equipoFav = $(this).data('id');
  
  var datosFavorito = {
  		equipo : equipoFav
  };

  if(clase.hasClass("glyphicon-star-empty")){
  		elimiarFavorito(datosFavorito);
  } else {
  		agregarFavorito(datosFavorito);
  }
});

function agregarFavorito(datosFavorito){
	$.post('./api/agregarFavorito',
		datosFavorito,
		function (data, status){
			$("#addFav").modal("show");
	});
}

function elimiarFavorito(datosFavorito){
	$.post('./api/eliminarFavorito',
		datosFavorito,
		function (data, status){
			$("#delFav").modal("show");
	});
}