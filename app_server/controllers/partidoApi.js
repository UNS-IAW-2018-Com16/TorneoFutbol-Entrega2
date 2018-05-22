const mongoose = require('mongoose');
require('../models/fechas');
const Fechas = mongoose.model('Fecha');

const cargarDatos = function (req, res){
	var IDPartido = req.body.idPartido;
	var golesLocal = req.body.golesL;
	var golesVisita = req.body.golesV;
	var IDFecha = IDPartido.charAt(0);

	Fechas
		.updateOne({"ID":IDFecha, partidos: {$elemMatch: {"ID":IDPartido}}} , 
					{$set : {"partidos.$.golesLocal": golesLocal, "partidos.$.golesVisita": golesVisita }})
		.exec((err, partido)=>{
			if(err)
				res.status(500).send(err);
			res.status(200).send();
		});
}

module.exports = { cargarDatos }