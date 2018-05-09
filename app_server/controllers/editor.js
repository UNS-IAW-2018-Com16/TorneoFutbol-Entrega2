const mongoose = require('mongoose');
require('../models/fechas');
const fechas = mongoose.model('Fecha');

/* GET home page. */
const editor = function (req, res) { 
  fechas.find().exec((err, fechas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('editor', {
          fechas: fechas
        });
      }
    })
};


module.exports = { editor }