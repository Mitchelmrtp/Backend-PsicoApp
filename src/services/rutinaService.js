// src/services/rutinaService.js
import Rutina from '../models/Rutina.js';

const findAll = async () => {
    return await Rutina.findAll();
};

const findOne = async (id) => {
    return await Rutina.findByPk(id);
};

const create = async (data) => {
    return await Rutina.create(data);
};

const update = async (id, data) => {
    const rutina = await Rutina.findByPk(id);
    if (!rutina) throw new Error('Rutina no encontrada');
    await rutina.update(data);
    return rutina;
};

const remove = async (id) => {
    return await Rutina.destroy({ where: { idRutina: id } });
};

export default { findAll, findOne, create, update, remove };