const mongoose = require('mongoose');
//const dbURI = 'mongodb://localhost/ligadefutbol';
const dbURI = process.env.MLAB_URI;;
mongoose.connect(dbURI);