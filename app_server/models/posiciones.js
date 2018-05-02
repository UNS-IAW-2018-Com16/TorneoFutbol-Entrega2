const mongoose = require('mongoose');

const posicionesSchema = new mongoose.Schema({
  equipo: {
    type: String,
    required: true
  },
  PJ: {
    type: Number,
    required: true
  },
  PG: {
    type: Number,
    required: true
  },
  PE: {
    type: Number,
    required: true
  },
  PP: {
    type: Number,
    required: true
  },
  GF: {
    type: Number,
    required: true
  },
  GC: {
    type: Number,
    required: true
  },
  DG: {
    type: String,
    required: true
  },
  PTS: {
    type: Number,
    required: true
  }
}, {collection: "tablaPosiciones"});

mongoose.model('TablaPosiciones', posicionesSchema);