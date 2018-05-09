const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  esEditor: {
    type: Boolean,
    required: true
  }
}, {collection: "usuarios"});

mongoose.model('Usuario', usuarioSchema);