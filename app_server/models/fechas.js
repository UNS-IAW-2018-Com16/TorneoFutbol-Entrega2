const mongoose = require('mongoose');

const partidoSchema = new mongoose.Schema({
  cancha: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  arbitro: {
    type: String,
    required: true
  },
  equipoLocal: {
    type: String,
    required: true
  },
  equipoVisitante: {
    type: String,
    required: true
  },
  golesLocal: Number,
  golesVisita: Number
});

const fechaSchema = new mongoose.Schema({
  partidos: [partidoSchema]
} , {collection: "fechas"});

mongoose.model('Fecha', fechaSchema);
