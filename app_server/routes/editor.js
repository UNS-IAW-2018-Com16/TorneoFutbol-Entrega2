var express = require('express');
var router = express.Router();

const ctrlEditor = require('../controllers/editor');
const middleware = require('../auth/middleware');

router.get('/', middleware, ctrlEditor.editor);

module.exports = router;