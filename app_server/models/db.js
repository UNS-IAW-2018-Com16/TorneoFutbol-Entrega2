const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/ligadefutbol';
mongoose.connect(dbURI);
console.log("conecte la db");