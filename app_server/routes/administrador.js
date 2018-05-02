var express = require('express');
var router = express.Router();

const ctrlAdministrador = require('../controllers/administrador');
/* GET resultados page. */
router.get('/', ctrlAdministrador.administrador);

module.exports = router;