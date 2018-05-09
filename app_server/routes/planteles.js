var express = require('express');
var router = express.Router();

const ctrlPlanteles = require('../controllers/planteles');
/* GET resultados page. */
router.get('/', ctrlPlanteles.planteles);

module.exports = router;