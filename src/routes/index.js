const express = require('express');
const psicologogeneralRoutes = require('./PsicologoGeneralRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const pacienteRoutes = require('./pacienteRoutes');
const citaRoutes = require('./citaRoutes');

const router = express.Router();

router.use('/psicologogeneralRoutes', psicologogeneralRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/citas', citaRoutes);

module.exports = router;
