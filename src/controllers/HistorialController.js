import HistorialService from '../services/historialService.js';

const findAll = async (req, res) => {
    const result = await HistorialService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await HistorialService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Historial no encontrado' });
};

const create = async (req, res) => {
    const result = await HistorialService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await HistorialService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await HistorialService.remove(req.params.id);
    return res.status(200).json({ message: 'Historial eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
