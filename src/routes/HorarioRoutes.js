import express from 'express';
import HorarioController from '../controllers/horarioController.js';

const router = express.Router();

router.get('/', HorarioController.findAll);
router.get('/:id', HorarioController.findOne);
router.post('/', HorarioController.create);
router.put('/:id', HorarioController.update);
router.delete('/:id', HorarioController.remove);

export default router;
