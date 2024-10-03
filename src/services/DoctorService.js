import Doctor from '../models/doctor.js';

const findAll = async () => {
    return await Doctor.findAll();
};

const findOne = async (id) => {
    return await Doctor.findByPk(id);
};

const create = async (data) => {
    return await Doctor.create(data);
};

const update = async (id, data) => {
    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
        throw new Error('Doctor no encontrado');
    }
    await doctor.update(data);
    return doctor;
};

const remove = async (id) => {
    const doctor = await Doctor.findByPk(id);
    if (!doctor) {
        throw new Error('Doctor no encontrado');
    }
    await doctor.destroy();
};

export default { findAll, findOne, create, update, remove };
