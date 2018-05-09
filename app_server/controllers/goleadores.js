const mongoose = require('mongoose');
require('../models/goleadores');
const tablaGoleadores = mongoose.model('TablaGoleadores');

/* GET resultados page. */
const goleadores = function (req, res) { 
  tablaGoleadores.find().exec((err, goleadores) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('goleadores', {
          tGoleadores: goleadores
        });
      }
    })
};

module.exports = { goleadores }