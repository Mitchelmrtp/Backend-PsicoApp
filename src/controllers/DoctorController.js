import DoctorService from '../services/doctorService.js';

const findAll = async (req, res) => {
    try {
        const doctors = await DoctorService.findAll();
        return res.status(200).json(doctors);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener los doctores', error });
    }
};

const findOne = async (req, res) => {
    const { id } = req.params;
    try {
        const doctor = await DoctorService.findOne(id);
        return doctor ? res.status(200).json(doctor) : res.status(404).json({ message: 'Doctor no encontrado' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener el doctor', error });
    }
};

const create = async (req, res) => {
    try {
        const newDoctor = await DoctorService.create(req.body);
        return res.status(201).json(newDoctor);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el doctor', error });
    }
};

const update = async (req, res) => {
    try {
        const updatedDoctor = await DoctorService.update(req.params.id, req.body);
        return res.status(200).json(updatedDoctor);
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el doctor', error });
    }
};

const remove = async (req, res) => {
    try {
        await DoctorService.remove(req.params.id);
        return res.status(200).json({ message: 'Doctor eliminado correctamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar el doctor', error });
    }
};

export default { findAll, findOne, create, update, remove };
