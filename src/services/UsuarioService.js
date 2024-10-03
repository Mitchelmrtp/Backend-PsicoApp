import Usuario from '../models/usuario.js';

const findAll = async () => {
  return await Usuario.findAll();
};

const findOne = async (id) => {
  return await Usuario.findByPk(id);
};

const create = async (data) => {
  try {
      return await Usuario.create(data);
  } catch (err) {
      console.error(err);
      return null;
  }
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

const validate = async (correo, contrasena) => {
  return await Usuario.findOne({ where: { correo, contrasena } });  // Busca el usuario por correo y contraseña
};


export default { findAll, findOne, create, update, remove, validate };
