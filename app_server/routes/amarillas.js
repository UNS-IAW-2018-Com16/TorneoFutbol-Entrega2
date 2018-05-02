var express = require('express');
var router = express.Router();

const ctrlAmarillas = require('../controllers/amarillas');
/* GET resultados page. */
router.get('/', ctrlAmarillas.amarillas);

module.exports = router;