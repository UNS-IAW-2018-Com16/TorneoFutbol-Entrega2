var express = require('express');
var router = express.Router();

const ctrlGoleadores = require('../controllers/goleadores');
/* GET resultados page. */
router.get('/', ctrlGoleadores.goleadores);

module.exports = router;