const mongoose = require('mongoose');
const horarioSchema = new mongoose.Schema({
  dia: String,
  horaInicio: String,
  horaFin: String,
  doctorId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Horario', horarioSchema);
