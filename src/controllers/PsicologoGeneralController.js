import PsicologoGeneralService from '../services/psicologogeneralService.js';

const findAll = async (req, res) => {
    try {
        const psicologogenerals = await PsicologoGeneralService.findAll();
        return res.status(200).json(psicologogenerals);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los psicólogos generales', error });
    }
};

const findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const psicologogeneral = await PsicologoGeneralService.findOne(id);
        return psicologogeneral
            ? res.status(200).json(psicologogeneral)
            : res.status(404).json({ message: 'Psicólogo general no encontrado' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el psicólogo general', error });
    }
};

const create = async (req, res) => {
    try {
        const newpsicologogeneral = await PsicologoGeneralService.create(req.body);
        return res.status(201).json(newpsicologogeneral);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el psicólogo general', error });
    }
};

const update = async (req, res) => {
    try {
        const updatedpsicologogeneral = await PsicologoGeneralService.update(req.params.id, req.body);
        return res.status(200).json(updatedpsicologogeneral);
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el psicólogo general', error });
    }
};

const remove = async (req, res) => {
    try {
        await PsicologoGeneralService.remove(req.params.id);
        return res.status(200).json({ message: 'Psicólogo general eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el psicólogo general', error });
    }
};

export default { findAll, findOne, create, update, remove };
