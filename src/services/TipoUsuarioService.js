import TipoUsuario from '../models/tipoUsuario.js';

const findAll = async () => {
    try {
        return await TipoUsuario.findAll();
    } catch (err) {
        console.error(err);
        return null;
    }
};

const findOne = async (id) => {
    try {
        return await TipoUsuario.findByPk(id);
    } catch (err) {
        console.error(err);
        return null;
    }
};

const create = async (data) => {
    try {
        return await TipoUsuario.create(data);
    } catch (err) {
        console.error(err);
        return null;
    }
};

const update = async (id, data) => {
    try {
        const tipoUsuario = await TipoUsuario.findByPk(id);
        if (!tipoUsuario) throw new Error('TipoUsuario no encontrado');
        await tipoUsuario.update(data);
        return tipoUsuario;
    } catch (err) {
        console.error(err);
        return null;
    }
};

const remove = async (id) => {
    try {
        const result = await TipoUsuario.destroy({ where: { idTipoUsuario: id } });
        return result === 1;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export default { findAll, findOne, create, update, remove };
