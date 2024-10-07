import HorarioService from '../services/horarioService.js';

const findAll = async (req, res) => {
    const result = await HorarioService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await HorarioService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Horario no encontrado' });
};

const create = async (req, res) => {
    const result = await HorarioService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await HorarioService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await HorarioService.remove(req.params.id);
    return res.status(200).json({ message: 'Horario eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
