var IDPartido;

$("#formulario").on('shown.bs.modal', function(event) {
	IDPartido = $(event.relatedTarget).data('id');
});

function guardarInformacion(event){
	var target = event.target;
	var golesLocal = $(target).parent().siblings()[1].children[0].children[0].children[1].value;
	var golesVisita = $(target).parent().siblings()[1].children[0].children[1].children[1].value;
	var observaciones = $(target).parent().siblings()[1].children[0].children[2].children[1].value;

	var datosPartido = {
		idPartido : IDPartido,
		golesL : golesLocal,
		golesV : golesVisita,
		obs : observaciones
	};

	$.post('./api/datosPartido',
		datosPartido,
		function (data, status){
			$("#formulario").modal('hide');
			$("#actualizacion").modal("show");
	});
}	
