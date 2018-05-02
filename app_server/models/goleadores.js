const mongoose = require('mongoose');

const goleadoresSchema = new mongoose.Schema({
  jugador: {
    type: String,
    required: true
  },
  equipo: {
    type: String,
    required: true
  },
  goles: {
    type: Number,
    required: true
  }
}, {collection: "tablaGoleadores"});

mongoose.model('TablaGoleadores', goleadoresSchema);