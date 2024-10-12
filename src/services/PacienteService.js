import Paciente from '../models/paciente.js';

const findAll = async () => {
    try {
        return await Paciente.findAll();
    } catch (err) {
        console.error(err);
        return null;
    }
};

const create = async (data) => {
    return await Paciente.create(data);
  
  };

const findOne = async (id) => {
    try {
        return await Paciente.findOne({ where: { idPaciente: id } });
    } catch (err) {
        console.error(err);
        return null;
    }
};

const update = async (paciente) => {
    try {
        const foundPaciente = await Paciente.findByPk(paciente.idPaciente);
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
        const result = await Paciente.destroy({ where: { idPaciente: id } });
        return result === 1;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default { findAll, create, findOne, update, remove };
