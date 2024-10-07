import SesionService from '../services/sesionService.js';

const findAll = async (req, res) => {
    const result = await SesionService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await SesionService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Sesión no encontrada' });
};

const create = async (req, res) => {
    const result = await SesionService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await SesionService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await SesionService.remove(req.params.id);
    return res.status(200).json({ message: 'Sesión eliminada correctamente' });
};

export default { findAll, findOne, create, update, remove };
