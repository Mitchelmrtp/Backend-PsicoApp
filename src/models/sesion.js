const mongoose = require('mongoose');
const sesionSchema = new mongoose.Schema({
  fecha: Date,
  pacienteId: mongoose.Schema.Types.ObjectId,
  descripcion: String,
});

module.exports = mongoose.model('Sesion', sesionSchema);
