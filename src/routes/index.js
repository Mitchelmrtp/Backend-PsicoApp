const express = require('express');
const doctorRoutes = require('./doctorRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const pacienteRoutes = require('./pacienteRoutes');
const citaRoutes = require('./citaRoutes');

const router = express.Router();

router.use('/doctors', doctorRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/citas', citaRoutes);

module.exports = router;
