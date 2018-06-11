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
}, {collection: "jugadores"});

const equiposSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  escudo: {
    type: String,
    required: true
  },
  plantel: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Jugador'
  }]
}, {collection: "equipos"});

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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipo'
  },
  equipoVisitante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipo'
  },
  golesLocal: String,
  golesVisita: String
}, {collection: "partidos"});

const fechaSchema = new mongoose.Schema({
  partidos: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Partido'
  }]     
} , {collection: "fechas"});

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
  }, 
  partidosAsignados: [{
     type: mongoose.Schema.Types.ObjectId,
     ref: 'Partido'      
  }]
}, {collection: "usuarios"});

mongoose.model('Fecha', fechaSchema);

mongoose.model('Partido', partidoSchema);

mongoose.model('Equipo', equiposSchema);

mongoose.model('Jugador', jugadorSchema);

mongoose.model('Usuario', usuarioSchema);

