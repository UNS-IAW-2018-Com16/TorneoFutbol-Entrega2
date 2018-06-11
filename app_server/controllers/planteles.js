const mongoose = require('mongoose');
require('../models/modelsTorneo');
const equipos = mongoose.model('Equipo');

/* GET resultados page. */
const planteles = function (req, res) { 
  equipos.find().populate({ path:'plantel'}).exec((err, equipos) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('equipos', {
          equipos: equipos,
          user: req.user
        });
      }
    })
};

module.exports = { planteles }