const mongoose = require('mongoose');
//const dbURI = 'mongodb://localhost/torneofutbol';
const dbURI = process.env.MLAB_URI;
mongoose.connect(dbURI);