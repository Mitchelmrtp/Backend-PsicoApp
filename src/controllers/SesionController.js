import SesionService from '../services/SesionService.js';

const createSesion = async (req, res) => {
  const { pacienteId, psicologoId, reporteProgreso, reporteEmociones } = req.body;

  try {
    const fechaActual = new Date();
    const nuevaSesion = await SesionService.createSesion({
      fecha: fechaActual.toISOString().split('T')[0], // Fecha actual
      hora: fechaActual.toTimeString().split(' ')[0],  // Hora actual
      Paciente_idPaciente: pacienteId,                 // ID del paciente
      Psicologo_idPsicologo: psicologoId,              // ID del psicólogo
      reporteProgreso: reporteProgreso,                // Reporte de progreso llenado manualmente
      reporteEmociones: reporteEmociones,              // Reporte de emociones llenado manualmente
    });

    return res.status(201).json(nuevaSesion);
  } catch (error) {
    return res.status(500).json({ message: 'Error al crear la sesión', error: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const sesiones = await SesionService.findAll();
    return res.status(200).json(sesiones);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener sesiones', error });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;

  try {
    const sesion = await SesionService.findOne(id);
    return res.status(200).json(sesion);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener la sesión', error });
  }
};

const updateSesion = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const sesionActualizada = await SesionService.updateSesion(id, data);
    return res.status(200).json(sesionActualizada);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar la sesión', error });
  }
};

const removeSesion = async (req, res) => {
  const { id } = req.params;

  try {
    await SesionService.removeSesion(id);
    return res.status(200).json({ message: 'Sesión eliminada correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar la sesión', error });
  }
};

export default { createSesion, findAll, findOne, updateSesion, removeSesion };
