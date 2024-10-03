import Cita from '../models/cita.js';

const findAll = async () => {
    try {
        return await Cita.findAll();
    } catch (err) {
        console.error(err);
        return null;
    }
};

const create = async (cita) => {
    try {
        return await Cita.create(cita);
    } catch (err) {
        console.error(err);
        return null;
    }
};

const findOne = async (id) => {
    try {
        return await Cita.findOne({ where: { id } });
    } catch (err) {
        console.error(err);
        return null;
    }
};

const update = async (cita) => {
    try {
        const foundCita = await Cita.findByPk(cita.id);
        if (!foundCita) return null;

        await foundCita.update(cita);
        return foundCita;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const remove = async (id) => {
    try {
        const result = await Cita.destroy({ where: { id } });
        return result === 1;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default { findAll, create, findOne, update, remove };
