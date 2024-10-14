// RespuestaRoutes.js
import express from 'express';
import RespuestaController from '../controllers/RespuestaController.js';

const router = express.Router();

// Ruta para almacenar respuestas
router.post('/', RespuestaController.storeRespuestas);

export default router;