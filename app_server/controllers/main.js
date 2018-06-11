const mongoose = require('mongoose');
require('../models/modelsTorneo');
const fechas = mongoose.model('Fecha');
const partido = mongoose.model('Partido');

const index = function (req, res) { 
  fechas.find().populate({ path: 'partidos', populate:[{ path: 'equipoLocal', select: 'nombre'},{path:'equipoVisitante', select: 'nombre'}]}).exec((err, fechas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('index', {
          fechas: fechas,
          user: req.user
        });
      }
    })
};


module.exports = { index }