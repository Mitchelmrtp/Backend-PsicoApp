import Cuestionario from '../models/cuestionario.js';

const findAll = async () => {
    return await Cuestionario.findAll();
};

const findOne = async (id) => {
    return await Cuestionario.findByPk(id);
};

const create = async (data) => {
    return await Cuestionario.create(data);
};

const update = async (id, data) => {
    const cuestionario = await Cuestionario.findByPk(id);
    if (!cuestionario) throw new Error('Cuestionario no encontrado');
    await cuestionario.update(data);
    return cuestionario;
};

const remove = async (id) => {
    return await Cuestionario.destroy({ where: { id_cuestionario: id } });
};

export default { findAll, findOne, create, update, remove };
