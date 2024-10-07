import Horario from '../models/horario.js';

const findAll = async () => {
    return await Horario.findAll();
};

const findOne = async (id) => {
    return await Horario.findByPk(id);
};

const create = async (data) => {
    return await Horario.create(data);
};

const update = async (id, data) => {
    const horario = await Horario.findByPk(id);
    if (!horario) throw new Error('Horario no encontrado');
    await horario.update(data);
    return horario;
};

const remove = async (id) => {
    return await Horario.destroy({ where: { id_horario: id } });
};

export default { findAll, findOne, create, update, remove };
