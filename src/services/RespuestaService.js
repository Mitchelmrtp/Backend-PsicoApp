// RespuestaService.js
import Cuestionario from "../models/cuestionario.js";
import RespuestasCuestionario from "../models/respuesta.js";

const crearRespuesta = async (idCuestionario, idPaciente, respuesta) => {
  try {
      return await RespuestasCuestionario.create({
          idCuestionario,
          idPaciente,
          respuesta
      });
  } catch (error) {
      console.error('Error al crear la respuesta:', error);
      throw error;
  }
};

const getRespuestasByPaciente = async (idPaciente) => {
  try {
    return await RespuestasCuestionario.findAll({
      where: { idPaciente },
      include: [Cuestionario]
    });
  } catch (error) {
    console.error('Error al obtener las respuestas:', error);
    throw error;
  }
};

export default {
  crearRespuesta,
  getRespuestasByPaciente
};
