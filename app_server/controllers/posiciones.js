const mongoose = require('mongoose');
require('../models/posiciones');
const tablaPosiciones = mongoose.model('TablaPosiciones');

/* GET resultados page. */
const posiciones = function (req, res) { 
  tablaPosiciones.find().exec((err, posiciones) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('posiciones', {
          title: 'Posiciones',
          tPosiciones: posiciones
        });
      }
    })
};

module.exports = { posiciones }