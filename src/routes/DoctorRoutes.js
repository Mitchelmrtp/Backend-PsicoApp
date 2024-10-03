import express from 'express';
import DoctorController from '../controllers/doctorController.js';

const router = express.Router();

router.get('/', DoctorController.findAll);
router.get('/:id', DoctorController.findOne);
router.post('/', DoctorController.create);
router.put('/:id', DoctorController.update);
router.delete('/:id', DoctorController.remove);

export default router;
