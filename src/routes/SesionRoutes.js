import express from 'express';
import SesionController from '../controllers/sesionController.js';

const router = express.Router();

router.get('/', SesionController.findAll);
router.get('/:id', SesionController.findOne);
router.post('/', SesionController.create);
router.put('/:id', SesionController.update);
router.delete('/:id', SesionController.remove);

export default router;
