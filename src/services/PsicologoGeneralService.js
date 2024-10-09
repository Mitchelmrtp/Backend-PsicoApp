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
    const psicologogeneral = await PsicologoGeneral.findByPk(id);
    if (!psicologogeneral) {
        throw new Error('Psicólogo general no encontrado');
    }
    await psicologogeneral.update(data);
    return psicologogeneral;
};

const remove = async (id) => {
    const psicologogeneral = await PsicologoGeneral.findByPk(id);
    if (!psicologogeneral) {
        throw new Error('Psicólogo general no encontrado');
    }
    await psicologogeneral.destroy();
};

export default { findAll, findOne, create, update, remove };
