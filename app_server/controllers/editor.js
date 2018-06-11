const mongoose = require('mongoose');
require('../models/modelsTorneo');
const usuarios = mongoose.model('Usuario');

const editor = function (req, res) { 
  usuarios
    .find(req.user.get('_id'))
    .populate({ path: 'partidosAsignados', populate:[{ path: 'equipoLocal', select: 'nombre'}, {path: 'equipoVisitante', select:'nombre'} ]}).exec((err,usuario) => {
        if (err) { 
            res.render('error', { error : err });    
          } else {
            res.render('editor', {
              partidos : usuario[0].partidosAsignados,
              user : req.user
            });
          }
  })
  /*fechas.find().populate({ path: 'partidos', populate:[{ path: 'equipoLocal', select: 'nombre'},{path:'equipoVisitante', select: 'nombre'}]}).exec((err, fechas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        partidosEditor(req.user, fechas);
        /*res.render('editor', {
          fechas: fechas,
          //user: req.user
        });
      }
    })*/
};

/*function partidosEditor(usuario, fechas){
  usuarios.find(usuario.get('_id')).exec((err,usuario) => {
    if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('editor', {
          user : usuario
        });
      }
  });

}*/


module.exports = { editor }