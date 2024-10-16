import SolicitarCitaService from '../services/SolicitarCitaService.js';
import SolicitarCita from '../models/SolicitarCita.js';

const findAll = async (req, res) => {
    const result = await SolicitarCitaService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await SolicitarCitaService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Cita no encontrada' });
};

const create = async (req, res) => {
    try {
        const { fechaHora, motivo, pacienteId } = req.body;

        const fecha = fechaHora.split('T')[0]; 
        const hora = fechaHora.split('T')[1].split('.')[0]; 

        const result = await SolicitarCita.create({
            fecha,
            hora,
            motivo,
            Paciente_idPaciente: pacienteId
        });

        return res.status(201).json(result);
    } catch (error) {
        console.error('Error al crear la cita:', error);
        return res.status(500).json({ message: 'Error al crear la cita' });
    }
};

 

const update = async (req, res) => {
    const result = await SolicitarCitaService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await SolicitarCitaService.remove(req.params.id);
    return res.status(200).json({ message: 'Cita eliminada correctamente' });
};

export default { findAll, findOne, create, update, remove };
