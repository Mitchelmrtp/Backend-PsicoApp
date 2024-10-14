// RespuestaController.js
import respuestasCuestionarioService from '../services/RespuestaService.js';

export const storeRespuestas = async (req, res) => {
    try {
        const { idCuestionario, idPaciente, respuesta } = req.body;
        const nuevaRespuesta = await respuestasCuestionarioService.crearRespuesta(idCuestionario, idPaciente, respuesta);
        res.status(201).json(nuevaRespuesta);
    } catch (error) {
        console.error('Error al crear la respuesta:', error);
        res.status(500).json({ error: 'Error al crear la respuesta' });
    }
};

export default { storeRespuestas }