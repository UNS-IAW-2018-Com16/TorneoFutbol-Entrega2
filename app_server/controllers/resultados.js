const mongoose = require('mongoose');
require('../models/fechas');
const fechas = mongoose.model('Fecha');

/* GET resultados page. */
const resultados = function (req, res) { 
  fechas.find().exec((err, resultados) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('resultados', {
          fechas: resultados,
          user: req.user
        });
      }
    })
};

module.exports = { resultados }