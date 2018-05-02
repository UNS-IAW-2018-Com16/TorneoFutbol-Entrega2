const mongoose = require('mongoose');
require('../models/db');
require('../models/fechas');
const fechas = mongoose.model('Fecha');

/* GET home page. */
const index = function (req, res) { 
  fechas.find().exec((err, fechas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('index', {
          title: 'Fixture',
          fechas: fechas
        });
        console.log(fechas);
      }
    })
};

module.exports = { index }