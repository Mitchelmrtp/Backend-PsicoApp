import TipoUsuarioService from '../services/TipoUsuarioService.js';

const findAll = async (req, res) => {
    const result = await TipoUsuarioService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await TipoUsuarioService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Tipo de Usuario no encontrado' });
};

const create = async (req, res) => {
    const result = await TipoUsuarioService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await TipoUsuarioService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await TipoUsuarioService.remove(req.params.id);
    return res.status(200).json({ message: 'Tipo de Usuario eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
