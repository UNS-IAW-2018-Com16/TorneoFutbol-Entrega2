const mongoose = require('mongoose');
require('../models/planteles');
require('../models/fechas');
const Plantel = mongoose.model('Planteles');
const Fechas = mongoose.model('Fecha');

const cargarDatos = function (req, res){
	console.log(req.body);
	var IDPartido = req.body.ID;
	var golesLocal = req.body.golesLocal;
	var golesVisita = req.body.golesVisita;
	var IDFecha = IDPartido.charAt(0);

	Fechas.update( {ID:IDFecha} ,  
		{$set: {"partidos.$[element].golesLocal": golesLocal}} , 
		{arrayFilters:[ {"element.ID": IDPartido}]});
}

module.exports = { cargarDatos }