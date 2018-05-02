var express = require('express');
var router = express.Router();

const ctrlResultados = require('../controllers/resultados');
/* GET resultados page. */
router.get('/', ctrlResultados.resultados);

module.exports = router;
