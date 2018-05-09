var IDPartido;

$(document).ready(function(){
    $("#modalButton").click(function(){
        $("#formulario").on('shown.bs.modal', function(event) {
    		IDPartido = $(event.relatedTarget).data('id');
		}).modal('show', $(this));
    });
});

function guardarInformacion(event){
	var target = event.target;
	console.log(IDPartido);
	var golesLocal = $(target).parent().siblings()[1].children[0].children[0].children[1].value;
	console.log(golesLocal);
	var golesVisita = $(target).parent().siblings()[1].children[0].children[1].children[1].value;
	console.log(golesVisita);
	var golesJugadorLocal = $(target).parent().siblings()[1].children[0].children[2].children[1].value;
	console.log(golesJugadorLocal);
	var golesJugadorVisita = $(target).parent().siblings()[1].children[0].children[3].children[1].value;
	console.log(golesJugadorVisita);
	var amarillasJugadorLocal = $(target).parent().siblings()[1].children[0].children[4].children[1].value;
	console.log(amarillasJugadorLocal);
	var amarillasJugadorVisita = $(target).parent().siblings()[1].children[0].children[5].children[1].value;
	console.log(amarillasJugadorVisita);
	var observaciones = $(target).parent().siblings()[1].children[0].children[7].children[1].value;
	console.log(observaciones);

	var datosPartido = {
		idPartido : IDPartido,
		golesL : golesLocal,
		golesV : golesVisita,
		golesJL : golesJugadorLocal,
		golesJV : golesJugadorVisita,
		amarillasJL : amarillasJugadorLocal,
		amarillasJV : amarillasJugadorVisita,
		obs : observaciones
	};

	$.post('./api/datosPartido',
		datosPartido,
		function (data, status){
			alert("Partido cargado/modificado");
	});
}	
