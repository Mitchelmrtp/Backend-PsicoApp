import express from 'express';
import HistorialController from '../controllers/historialController.js';

const router = express.Router();

router.get('/', HistorialController.findAll);
router.get('/:id', HistorialController.findOne);
router.post('/', HistorialController.create);
router.put('/:id', HistorialController.update);
router.delete('/:id', HistorialController.remove);

export default router;
