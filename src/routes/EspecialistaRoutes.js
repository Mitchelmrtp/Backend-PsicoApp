import express from 'express';
import EspecialistaController from '../controllers/EspecialistaController.js';

const router = express.Router();

router.get('/', EspecialistaController.findAll);
router.get('/:id', EspecialistaController.findOne);
router.post('/', EspecialistaController.create);
router.put('/:id', EspecialistaController.update);
router.delete('/:id', EspecialistaController.remove);

export default router;
