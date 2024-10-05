import PsicologoGeneralService from '../services/psicologogeneralService.js';

const findAll = async (req, res) => {
    try {
        const doctors = await PsicologoGeneralService.findAll();
        return res.status(200).json(doctors);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los psicólogos generales', error });
    }
};

const findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await PsicologoGeneralService.findOne(id);
        return doctor
            ? res.status(200).json(doctor)
            : res.status(404).json({ message: 'Psicólogo general no encontrado' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el psicólogo general', error });
    }
};

const create = async (req, res) => {
    try {
        const newDoctor = await PsicologoGeneralService.create(req.body);
        return res.status(201).json(newDoctor);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el psicólogo general', error });
    }
};

const update = async (req, res) => {
    try {
        const updatedDoctor = await PsicologoGeneralService.update(req.params.id, req.body);
        return res.status(200).json(updatedDoctor);
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
