import express from 'express';
import ReporteController from '../controllers/reporteController.js';

const router = express.Router();

router.get('/', ReporteController.findAll);
router.get('/:id', ReporteController.findOne);
router.post('/', ReporteController.create);
router.put('/:id', ReporteController.update);
router.delete('/:id', ReporteController.remove);

export default router;
