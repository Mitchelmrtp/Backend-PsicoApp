import express from 'express';
import CuestionarioController from '../controllers/cuestionarioController.js';

const router = express.Router();

router.get('/', CuestionarioController.findAll);
router.get('/:id', CuestionarioController.findOne);
router.post('/', CuestionarioController.create);
router.put('/:id', CuestionarioController.update);
router.delete('/:id', CuestionarioController.remove);

export default router;
