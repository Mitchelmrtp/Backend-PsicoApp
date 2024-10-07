import Historial from '../models/historial.js';

const findAll = async () => {
    return await Historial.findAll();
};

const findOne = async (id) => {
    return await Historial.findByPk(id);
};

const create = async (data) => {
    return await Historial.create(data);
};

const update = async (id, data) => {
    const historial = await Historial.findByPk(id);
    if (!historial) throw new Error('Historial no encontrado');
    await historial.update(data);
    return historial;
};

const remove = async (id) => {
    return await Historial.destroy({ where: { idHistorial: id } });
};

export default { findAll, findOne, create, update, remove };
