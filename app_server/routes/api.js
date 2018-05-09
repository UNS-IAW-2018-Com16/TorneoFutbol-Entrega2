var express = require('express');
var router = express.Router();
const usuarioApi = require('../controllers/usuariosApi');
const partidoApi = require('../controllers/partidoApi');

/*const pedidoApi = require('../controllers/pedidoApi');
const middleware = require('../auth/middleware');*/

/* GET home page. */

//router.get('/editor', usuarioApi.buscarUsuarios);
router.post('/datosPartido', partidoApi.cargarDatos);
router.post('/datosUsuario', usuarioApi.agregarUsuario);


module.exports = router;