import PacienteService from "../services/pacienteService.js";

const findAll = async (req, res) => {
    const result = await PacienteService.findAll();
    return sendResponse(result, res);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await PacienteService.findOne(id);
    return sendResponse(result, res);
};

const create = async (req, res) => {
    const result = await PacienteService.create(req.body);
    return sendResponse(result, res);
};

const update = async (req, res) => {
    const result = await PacienteService.update(req.body);
    return sendResponse(result, res);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await PacienteService.remove(id);
    return sendResponse(result, res);
};

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error' });
};

// Controlador en Node.js para obtener el Paciente por id_usuario
async function getPacienteByUsuarioId(req, res) {
    try {
      const usuarioId = req.params.usuarioId;
      const paciente = await Paciente.findOne({
        where: { Usuario_id_usuario: usuarioId }
      });
  
      if (paciente) {
        return res.status(200).json(paciente);
      } else {
        return res.status(404).json({ message: 'Paciente no encontrado' });
      }
    } catch (error) {
      console.error('Error al obtener el paciente:', error);
      return res.status(500).json({ message: 'Error del servidor' });
    }
  }
  

export default { findAll, findOne, create, update, remove, getPacienteByUsuarioId };
