const mongoose = require('mongoose');
require('../models/fechas');
const fechas = mongoose.model('Fecha');

const index = function (req, res) { 
  fechas.find().exec((err, fechas) => {
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