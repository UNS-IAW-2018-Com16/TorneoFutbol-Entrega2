var express = require('express');
var router = express.Router();

const partidoApi = require('../controllers/partidoApi');
const favoritosApi = require('../controllers/favoritosApi');
const estilosApi = require('../controllers/estilosApi');

router.get('/guardarEstilo', estilosApi.guardarEstilo);
router.post('/datosPartido', partidoApi.cargarDatos);
router.post('/agregarFavorito', favoritosApi.agregarFavorito);
router.post('/eliminarFavorito',favoritosApi.eliminarFavorito);

module.exports = router;