var express = require('express');
var router = express.Router();

const ctrlPosiciones = require('../controllers/posiciones');
/* GET resultados page. */
router.get('/', ctrlPosiciones.tablaPosiciones);

module.exports = router;