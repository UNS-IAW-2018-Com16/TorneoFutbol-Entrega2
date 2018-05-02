var express = require('express');
var router = express.Router();

const ctrlEditor = require('../controllers/editor');
/* GET resultados page. */
router.get('/', ctrlEditor.editor);

module.exports = router;