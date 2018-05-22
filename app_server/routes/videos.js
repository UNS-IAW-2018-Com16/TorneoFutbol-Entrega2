var express = require('express');
var router = express.Router();

const ctrlVideos = require('../controllers/videos');

router.get('/', ctrlVideos.videos);

module.exports = router;