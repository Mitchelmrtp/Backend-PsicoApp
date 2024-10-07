import express from 'express';
import RevisionDiagnosticaController from '../controllers/revisionDiagnosticaController.js';

const router = express.Router();

router.get('/', RevisionDiagnosticaController.findAll);
router.get('/:id', RevisionDiagnosticaController.findOne);
router.post('/', RevisionDiagnosticaController.create);
router.put('/:id', RevisionDiagnosticaController.update);
router.delete('/:id', RevisionDiagnosticaController.remove);

export default router;
