import express from 'express';
import SesionController from '../controllers/SesionController.js';

const router = express.Router();

// Crear una nueva sesión
router.post('/', SesionController.createSesion);

// Obtener todas las sesiones
router.get('/', SesionController.findAll);

// Obtener una sesión por ID
router.get('/:id', SesionController.findOne);

// Actualizar una sesión
router.put('/:id', SesionController.updateSesion);

// Eliminar una sesión
router.delete('/:id', SesionController.removeSesion);

export default router;
