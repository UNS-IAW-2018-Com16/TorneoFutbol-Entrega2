const mongoose = require('mongoose');
require('../models/amarillas');
const tablaAmarillas = mongoose.model('TablaAmarillas');

/* GET resultados page. */
const amarillas = function (req, res) { 
  tablaAmarillas.find().exec((err, amarillas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('amarillas', {
          title: 'Amarillas',
          tAmarillas: amarillas
        });
      }
    })
};

module.exports = { amarillas }