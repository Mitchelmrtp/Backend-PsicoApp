import Reporte from '../models/reporte.js';

const findAll = async () => {
    return await Reporte.findAll();
};

const findOne = async (id) => {
    return await Reporte.findByPk(id);
};

const create = async (data) => {
    return await Reporte.create(data);
};

const update = async (id, data) => {
    const reporte = await Reporte.findByPk(id);
    if (!reporte) throw new Error('Reporte no encontrado');
    await reporte.update(data);
    return reporte;
};

const remove = async (id) => {
    return await Reporte.destroy({ where: { id_reporte: id } });
};

export default { findAll, findOne, create, update, remove };
