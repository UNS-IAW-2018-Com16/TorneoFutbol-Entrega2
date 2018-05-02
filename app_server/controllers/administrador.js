/* GET home page. */
const administrador = function (req, res) { 
  res.render('administrador', {title : 'Administrador'});
};

module.exports = { administrador }