const mongoose = require('mongoose');

const equiposSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  escudo: {
    type: String,
    required: true
  }
}, {collection: "equipos"});

mongoose.model('Equipo', equiposSchema);