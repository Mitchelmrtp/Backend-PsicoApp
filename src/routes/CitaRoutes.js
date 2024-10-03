import express from 'express';
import CitaController from '../controllers/citaController.js';

const router = express.Router();

router.get('/', CitaController.findAll);
router.get('/:id', CitaController.findOne);
router.post('/', CitaController.create);
router.put('/', CitaController.update);
router.delete('/:id', CitaController.remove);

export default router;
