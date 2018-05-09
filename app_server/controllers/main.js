const mongoose = require('mongoose');
require('../models/fechas');
const fechas = mongoose.model('Fecha');

/* GET home page. */
const index = function (req, res) { 
  fechas.find().exec((err, fechas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('index', {
          fechas: fechas,
          esEditor: req.user
        });
      }
    })
};

module.exports = { index }