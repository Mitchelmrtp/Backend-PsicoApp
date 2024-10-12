import express from 'express';
import PsicologoController from '../controllers/PsicologoController.js';

const router = express.Router();

router.get('/', PsicologoController.findAll);
router.get('/:id', PsicologoController.findOne);
router.post('/', PsicologoController.create);
router.put('/:id', PsicologoController.update);
router.delete('/:id', PsicologoController.remove);

export default router;
