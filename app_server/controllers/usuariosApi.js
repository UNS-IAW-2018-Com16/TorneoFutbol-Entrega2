const mongoose = require('mongoose');
require('../models/usuarios');
const usuarios = mongoose.model('Usuario');

const agregarUsuario = function (req, res) {
    console.log("Entre a agregar usuario");
    console.log(req.body.nombre);

	var nuevo_usuario = new usuarios({
		ID:    req.body.email,
		nombre: req.body.nombre,
		apellido: req.body.apellido,
		esEditor: req.body.editor
	});

	nuevo_usuario.save(function(err, usuario) {
		if(err) {
			res
				.status(404)
				.json(err);
		} else {
			res
				.status(200)
				.json(usuario);
		}
	});
};

const buscarUsuarios = function (req, res) { 
  usuarios
  	.find()
  	.exec((err, usuarios) => {
			if (err) { 
				res
					.status(404)
					.json(err);    
        	} else {
				res
					.status(200)
					.json(usuarios);
			}
})
};

module.exports = { agregarUsuario, buscarUsuarios }