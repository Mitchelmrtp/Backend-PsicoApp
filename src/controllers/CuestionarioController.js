import CuestionarioService from '../services/cuestionarioService.js';

const findAll = async (req, res) => {
    const result = await CuestionarioService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await CuestionarioService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Cuestionario no encontrado' });
};

const create = async (req, res) => {
    const result = await CuestionarioService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await CuestionarioService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await CuestionarioService.remove(req.params.id);
    return res.status(200).json({ message: 'Cuestionario eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
