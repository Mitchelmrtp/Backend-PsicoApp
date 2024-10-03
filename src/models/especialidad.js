const mongoose = require('mongoose');
const especialidadSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
});

module.exports = mongoose.model('Especialidad', especialidadSchema);
