import express from 'express';
import PsicologoGeneralController from '../controllers/psicologoGeneralController.js';

const router = express.Router();

router.get('/', PsicologoGeneralController.findAll);
router.get('/:id', PsicologoGeneralController.findOne);
router.post('/', PsicologoGeneralController.create);
router.put('/:id', PsicologoGeneralController.update);
router.delete('/:id', PsicologoGeneralController.remove);

export default router;
