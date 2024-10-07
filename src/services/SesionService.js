import Sesion from '../models/sesion.js';

const findAll = async () => {
    return await Sesion.findAll();
};

const findOne = async (id) => {
    return await Sesion.findByPk(id);
};

const create = async (data) => {
    return await Sesion.create(data);
};

const update = async (id, data) => {
    const sesion = await Sesion.findByPk(id);
    if (!sesion) throw new Error('Sesión no encontrada');
    await sesion.update(data);
    return sesion;
};

const remove = async (id) => {
    return await Sesion.destroy({ where: { id_sesion: id } });
};

export default { findAll, findOne, create, update, remove };
