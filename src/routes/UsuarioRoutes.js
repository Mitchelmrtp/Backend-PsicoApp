import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';  // Asegúrate de que la ruta es correcta

const router = express.Router();

router.get('/', UsuarioController.findAll);
router.get('/:id', UsuarioController.findOne);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.remove);
router.post('/validate', UsuarioController.validate);  // Para la validación de login

export default router;
