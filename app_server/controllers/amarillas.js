const mongoose = require('mongoose');
require('../models/amarillas');
const tablaAmarillas = mongoose.model('TablaAmarillas');

const amarillas = function (req, res) { 
  tablaAmarillas.find().exec((err, amarillas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('amarillas', {
          tAmarillas: amarillas,
          user: req.user
        });
      }
    })
};

module.exports = { amarillas }