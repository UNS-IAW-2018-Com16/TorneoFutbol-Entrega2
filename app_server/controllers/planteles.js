const mongoose = require('mongoose');
require('../models/equipos');
require('../models/planteles');
const listaPlanteles = mongoose.model('Planteles');

/* GET resultados page. */
const planteles = function (req, res) { 
  listaPlanteles.find().populate('_id').exec((err, planteles) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('equipos', {
          planteles: planteles
        });
      }
    })
};

module.exports = { planteles }