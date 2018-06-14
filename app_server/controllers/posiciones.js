const mongoose = require('mongoose');
require('../models/modelsTorneo');
const fechas = mongoose.model('Fecha');

const tablaPosiciones = function (req, res) { 
  fechas
      .find()
      .populate({ path: 'partidos', populate:[{ path: 'equipoLocal', select: 'nombre'},{path:'equipoVisitante', select: 'nombre'}]})
      .exec((err, fechas) => {
      if (err) { 
        res.render('error', { error : err });    
      } else {
        var tablaPosiciones = generarTabla(fechas);
        tablaPosiciones.sort(comparator);
        res.render('posiciones', {
          tPosiciones: tablaPosiciones,
          user: req.user
        });
      }
  })
};

function comparator(equipo1,equipo2){
    var puntosEquipo1 = equipo1.puntos;
    var puntosEquipo2 = equipo2.puntos;
    if (puntosEquipo1 > puntosEquipo2){
      return -1;
    } else {
      if (puntosEquipo2 > puntosEquipo1){
        return 1;
      } else {
        return 0;
      }
    }
}

function generarTabla(fechas){
  var mapeo = new Map();
  var j;
  var k;
  for(j=0; j<fechas.length; j++){
    var partidosFecha = fechas[j].partidos;

    for(k=0; k<partidosFecha.length;k++){
      var local = partidosFecha[k].equipoLocal.nombre;
      var visitante = partidosFecha[k].equipoVisitante.nombre;
      var golesL = partidosFecha[k].golesLocal;
      var golesV = partidosFecha[k].golesVisita;

      if(mapeo.has(local) == false){
        mapeo.set(local, 0);
      }

      if(mapeo.has(visitante) == false){
        mapeo.set(visitante, 0);
      }

      if (golesL != null && golesV != null){
       if (golesL > golesV){
        var nuevoPuntaje = mapeo.get(local) + 3;
        mapeo.set(local, nuevoPuntaje);
      } else {
        if (golesL < golesV){
          var nuevoPuntaje = mapeo.get(visitante) + 3;
          mapeo.set(visitante, nuevoPuntaje);
        } else {
          var nuevoPuntajeLocal = mapeo.get(local) + 1;
          var nuevoPuntajeVisitante = mapeo.get(visitante) + 1;
          mapeo.set(local, nuevoPuntajeLocal);
          mapeo.set(visitante, nuevoPuntajeVisitante);
        }
      }
    }
  } 
}

  var posiciones = new Array();
  for (var [equipo, puntos] of mapeo){
    var entradaArreglo = {
      equipo : equipo,
      puntos : puntos
    }
    posiciones.push(entradaArreglo);
  }
  return posiciones;
}

module.exports = { tablaPosiciones }