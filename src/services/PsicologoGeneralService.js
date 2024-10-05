import PsicologoGeneral from '../models/psicologogeneral.js';

const findAll = async () => {
    return await PsicologoGeneral.findAll();
};

const findOne = async (id) => {
    return await PsicologoGeneral.findByPk(id);
};

const create = async (data) => {
    return await PsicologoGeneral.create(data);
};

const update = async (id, data) => {
    const doctor = await PsicologoGeneral.findByPk(id);
    if (!doctor) {
        throw new Error('Psicólogo general no encontrado');
    }
    await doctor.update(data);
    return doctor;
};

const remove = async (id) => {
    const doctor = await PsicologoGeneral.findByPk(id);
    if (!doctor) {
        throw new Error('Psicólogo general no encontrado');
    }
    await doctor.destroy();
};

export default { findAll, findOne, create, update, remove };
