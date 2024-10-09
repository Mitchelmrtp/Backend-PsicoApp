import EspecialistaService from '../services/EspecialistaService.js';

const findAll = async (req, res) => {
    const result = await EspecialistaService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await EspecialistaService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Especialista no encontrado' });
};

const create = async (req, res) => {
    try {
        const newEspecialista = await EspecialistaService.create(req.body);
        return res.status(201).json(newEspecialista);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el especialista', error });
    }
};

const update = async (req, res) => {
    const result = await EspecialistaService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await EspecialistaService.remove(req.params.id);
    return res.status(200).json({ message: 'Especialista eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
