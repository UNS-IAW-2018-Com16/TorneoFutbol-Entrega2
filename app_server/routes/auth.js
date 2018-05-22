var express = require('express');
var router = express.Router();
var ctrlAuth = require('../controllers/auth');

router.get('/facebook', ctrlAuth.facebookLogin);
router.get('/facebook/callback', ctrlAuth.facebookCallback);
router.get('/logout', ctrlAuth.facebookLogout);

module.exports = router;