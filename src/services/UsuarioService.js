import Usuario from '../models/usuario.js';

const findAll = async () => {
    return await Usuario.findAll();
};

const findOne = async (id) => {
    return await Usuario.findByPk(id);
};

const create = async (data) => {
    return await Usuario.create(data);
};

const update = async (id, data) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        throw new Error('Usuario no encontrado');
    }
    await usuario.update(data);
    return usuario;
};

const remove = async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
        throw new Error('Usuario no encontrado');
    }
    await usuario.destroy();
};

const validate = async (email, password) => {
    const usuario = await Usuario.findOne({ where: { correo: email, contrasena: password } });
    return usuario ? usuario : null;
};

export default { findAll, findOne, create, update, remove, validate };
