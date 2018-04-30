const mongoose = require('mongoose');
const fixture = mongoose.model('Fixture');

/* GET home page. */
const index = function (req, res) { 
  fixture.find().exec((err, fixture) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        res.render('index', {
          title: 'Fixture'
        });
      }
    })
};

module.exports = { index }