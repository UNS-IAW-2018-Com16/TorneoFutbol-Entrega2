const mongoose = require('mongoose');
require('../models/goleadores');
const tablaGoleadores = mongoose.model('TablaGoleadores');

const goleadores = function (req, res) { 
  tablaGoleadores.find().exec((err, goleadores) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('goleadores', {
          tGoleadores: goleadores,
          user: req.user
        });
      }
    })
};

module.exports = { goleadores }