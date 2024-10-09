import SolicitarCitaService from '../services/SolicitarCitaService.js';

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
    const result = await SolicitarCitaService.create(req.body);
    return res.status(201).json(result);
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
