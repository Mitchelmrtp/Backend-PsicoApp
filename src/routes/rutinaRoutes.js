import express from 'express';
import RutinaController from '../controllers/rutinaController.js';

const router = express.Router();

router.get('/', RutinaController.findAll);
router.get('/:id', RutinaController.findOne);
router.post('/', RutinaController.create);
router.put('/:id', RutinaController.update);
router.delete('/:id', RutinaController.remove);

export default router;