import express from 'express';
import TipoUsuarioController from '../controllers/tipoUsuarioController.js';

const router = express.Router();

router.get('/', TipoUsuarioController.findAll);
router.get('/:id', TipoUsuarioController.findOne);
router.post('/', TipoUsuarioController.create);
router.put('/:id', TipoUsuarioController.update);
router.delete('/:id', TipoUsuarioController.remove);

export default router;
