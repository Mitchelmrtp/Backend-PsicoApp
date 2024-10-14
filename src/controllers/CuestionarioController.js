// CuestionarioController.js
import cuestionarioService from '../services/CuestionarioService.js';
import respuestasCuestionarioService from '../services/RespuestaService.js';

export const getAllCuestionarios = async (req, res) => {
    try {
        console.log('Obteniendo cuestionarios...');
        const cuestionarios = await cuestionarioService.getAllCuestionarios();
        
        // Mapea los datos para devolver solo `dataValues`
        const cuestionariosSimplificados = cuestionarios.map(cuestionario => cuestionario.dataValues);
        
        console.log('Cuestionarios obtenidos:', cuestionariosSimplificados);
        res.json(cuestionariosSimplificados); // Devuelve la lista de cuestionarios simplificada
    } catch (error) {
        console.error('Error al obtener cuestionarios:', error);
        res.status(500).json({ error: 'Error al obtener cuestionarios' });
    }
};

export const crearRespuesta = async (req, res) => {
    try {
        const { idCuestionario, idPaciente, respuesta } = req.body;
        const nuevaRespuesta = await respuestasCuestionarioService.crearRespuesta(idCuestionario, idPaciente, respuesta);
        res.status(201).json(nuevaRespuesta);
    } catch (error) {
        console.error('Error al crear la respuesta:', error);
        res.status(500).json({ error: 'Error al crear la respuesta' });
    }
};

export default {getAllCuestionarios, crearRespuesta};