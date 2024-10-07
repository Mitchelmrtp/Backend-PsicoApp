import express from 'express';
import SolicitarCitaController from '../controllers/solicitarCitaController.js';

const router = express.Router();

router.get('/', SolicitarCitaController.findAll);
router.get('/:id', SolicitarCitaController.findOne);
router.post('/', SolicitarCitaController.create);
router.put('/:id', SolicitarCitaController.update);
router.delete('/:id', SolicitarCitaController.remove);

export default router;
