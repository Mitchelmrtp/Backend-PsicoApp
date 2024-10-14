import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';  // Asegúrate de que la ruta es correcta

const router = express.Router();

router.get('/', UsuarioController.findAll);
router.get('/:id', UsuarioController.findOne);
router.post('/', UsuarioController.create);
router.delete('/:id', UsuarioController.remove);
router.post('/validate', UsuarioController.validate);  // Para la validación de login
router.get('/psicologo/:psicologoId/pacientes', UsuarioController.getPacientesByPsicologo);
router.get('/paciente/:pacienteId/psicologo', UsuarioController.getPsicologoByPaciente);
router.post('/recuperar-contrasena', UsuarioController.getContrasenaByEmailAndDNI);
router.put('/:id/cambiar-contrasena', UsuarioController.updatePassword);




export default router;
