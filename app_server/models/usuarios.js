const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  facebookID: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  estilo: Number,
  equipoFavorito: [{type:String}],
  esEditor: {
    type: Boolean,
    required: true
  }
}, {collection: "usuarios"});

mongoose.model('Usuario', usuarioSchema);