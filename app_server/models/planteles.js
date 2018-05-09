const mongoose = require('mongoose');

const jugadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    required: true
  },
  numeroSocio: {
    type: Number,
    required: true
  },
  equipo: {
    type: Number,
    required: true
  },
  fechaNacimiento: {
    type: String,
    required: true
  },
  peso: {
    type: String,
    required: true
  },
  altura: {
    type: String,
    required: true
  },
  edad: {
    type: String,
    required: true
  },
  foto: {
    type: String,
    required: true
  },
  numeroCamiseta: {
    type: Number,
    required: true
  },
  pieHabil: {
    type: String,
    required: true
  },
  posicion: {
    type: String,
    required: true
  }
});

const plantelSchema = new mongoose.Schema({
  _id: {
    type : mongoose.Schema.Types.ObjectId,
    ref : "Equipo"
  },
  jugadores: [jugadorSchema]
} , {collection: "planteles"});

mongoose.model('Planteles', plantelSchema);