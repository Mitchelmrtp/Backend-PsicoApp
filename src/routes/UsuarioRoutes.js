import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();

router.get('/', UsuarioController.findAll);
router.get('/:id', UsuarioController.findOne);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.remove);
router.post('/validate', UsuarioController.validate); // Ruta para validar el usuario

export default router;
