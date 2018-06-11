const mongoose = require('mongoose');
require('../models/modelsTorneo');
const Usuario = mongoose.model('Usuario');

const agregarFavorito = function (req, res) {
	var facebookID = req.user.facebookID;
	var NuevoEquipo = req.body.equipo;

	Usuario
		.updateOne({"facebookID": facebookID}, {$push: {equipoFavorito : NuevoEquipo}})
		.exec((err, partido)=>{
			if(err)
				res.status(500).send(err);
			res.status(200).send();
		});
}

const eliminarFavorito = function (req, res) {
	var facebookID = req.user.facebookID;
	var NuevoEquipo = req.body.equipo;

	Usuario
		.updateOne({"facebookID": facebookID}, {$pull: {equipoFavorito : NuevoEquipo}})
		.exec((err, partido)=>{
			if(err)
				res.status(500).send(err);
			res.status(200).send();
		});
}

module.exports = { agregarFavorito, eliminarFavorito }