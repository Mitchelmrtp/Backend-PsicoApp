// CuestionarioRoutes.js
import express from 'express';
import { getAllCuestionarios, crearRespuesta } from '../controllers/CuestionarioController.js';

const router = express.Router();

// Obtener todos los cuestionarios
router.get('/', getAllCuestionarios);

// Crear una respuesta
router.post('/respuestas', crearRespuesta);

export default router;