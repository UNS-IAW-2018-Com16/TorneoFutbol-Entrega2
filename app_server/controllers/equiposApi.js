const mongoose = require('mongoose');
require('../models/modelsTorneo');
const equipos = mongoose.model('Equipo');

const obtenerEquipo = function (req, res){
	var IDPartido = req.body.IDPartido;

	equipos
		.find({"_id": IDPartido})
		.exec((err, equipo)=>{
			if(err)
				res.status(500).send(err);
			res.status(200).send();
		});
}

module.exports = { obtenerEquipo }