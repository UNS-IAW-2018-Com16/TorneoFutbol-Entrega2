const mongoose = require('mongoose');
require('../models/fechas');
const fechas = mongoose.model('Fecha');

const editor = function (req, res) { 
  fechas.find().exec((err, fechas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('editor', {
          fechas: fechas,
          user: req.user
        });
      }
    })
};


module.exports = { editor }