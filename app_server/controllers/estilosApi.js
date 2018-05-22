const mongoose = require('mongoose');
require('../models/usuarios');
const Usuario = mongoose.model('Usuario');

const guardarEstilo = function(req,res){
  if (req.user) {
    var nuevoEstilo;

    if(req.query.numeroEstilo == 1)
      nuevoEstilo = 1;
    else
      nuevoEstilo = 2;

    var facebookID = req.user.facebookID;
    
    Usuario
      .updateOne( {"facebookID": facebookID}, {$set : {estilo : nuevoEstilo}})
      .exec((err, usuario) => {
          if (err)
            return res.status(500).send(err);
          res.send('Estilo cargado');
      });
 } else {
    res.send('Sin estilo');  
 }
} 

module.exports = { guardarEstilo };

