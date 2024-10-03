import Paciente from '../models/paciente.js';

const findAll = async () => {
    try {
        return await Paciente.findAll();
    } catch (err) {
        console.error(err);
        return null;
    }
};

const create = async (paciente) => {
    try {
        return await Paciente.create(paciente);
    } catch (err) {
        console.error(err);
        return null;
    }
};

const findOne = async (id) => {
    try {
        return await Paciente.findOne({ where: { id } });
    } catch (err) {
        console.error(err);
        return null;
    }
};

const update = async (paciente) => {
    try {
        const foundPaciente = await Paciente.findByPk(paciente.id);
        if (!foundPaciente) return null;

        await foundPaciente.update(paciente);
        return foundPaciente;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const remove = async (id) => {
    try {
        const result = await Paciente.destroy({ where: { id } });
        return result === 1;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default { findAll, create, findOne, update, remove };
