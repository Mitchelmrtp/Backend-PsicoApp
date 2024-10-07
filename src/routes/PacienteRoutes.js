import express from 'express';
import PacienteController from '../controllers/pacienteController.js';

const router = express.Router();

router.get('/', PacienteController.findAll);
router.get('/:id', PacienteController.findOne);
router.post('/', PacienteController.create);
router.put('/:id', PacienteController.update);
router.delete('/:id', PacienteController.remove);

export default router;
