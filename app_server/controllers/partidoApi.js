const mongoose = require('mongoose');
require('../models/modelsTorneo');
const partidos = mongoose.model('Partido');

const cargarDatos = function (req, res){
	var IDPartido = req.body.idPartido;
	var golesLocal = req.body.golesL;
	var golesVisita = req.body.golesV;

	partidos
		.updateOne({"_id": IDPartido} , 
					{$set : {"golesLocal": golesLocal, "golesVisita": golesVisita }})
		.exec((err, partido)=>{
			if(err)
				res.status(500).send(err);
			res.status(200).send();
		});
}

module.exports = { cargarDatos }