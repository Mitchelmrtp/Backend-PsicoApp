const mongoose = require('mongoose');
const sistemaSchema = new mongoose.Schema({
  nombre: String,
  version: String,
  estado: String,
});

module.exports = mongoose.model('Sistema', sistemaSchema);
