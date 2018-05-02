const mongoose = require('mongoose');

const amarillasSchema = new mongoose.Schema({
  jugador: {
    type: String,
    required: true
  },
  equipo: {
    type: String,
    required: true
  },
  amarillas: {
    type: Number,
    required: true
  }
}, {collection: "tablaAmarillas"});

mongoose.model('TablaAmarillas', amarillasSchema);