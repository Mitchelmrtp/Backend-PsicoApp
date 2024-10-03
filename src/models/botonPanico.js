const mongoose = require('mongoose');
const botonPanicoSchema = new mongoose.Schema({
  usuarioId: mongoose.Schema.Types.ObjectId,
  activado: Boolean,
  fecha: Date,
});

module.exports = mongoose.model('BotonPanico', botonPanicoSchema);
