import Cuestionario from '../models/cuestionario.js';

const getAllCuestionarios = async () => {
  try {
      const cuestionarios = await Cuestionario.findAll();
      return cuestionarios; // Devuelve los datos obtenidos
  } catch (error) {
      console.error('Error al obtener los cuestionarios:', error);
      throw error; 
  }
};


const createCuestionario = async (data) => {
  return await Cuestionario.create(data);
};

const updateCuestionarioRespuesta = async (idCuestionario, respuesta) => {
  const cuestionario = await Cuestionario.findByPk(idCuestionario);
  if (cuestionario) {
    cuestionario.respuesta = respuesta;
    await cuestionario.save();
    return cuestionario;
  }
  throw new Error('Cuestionario no encontrado');
};

export default {
  getAllCuestionarios,
  createCuestionario,
  updateCuestionarioRespuesta
};