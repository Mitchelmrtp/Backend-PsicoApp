import { Usuario, Paciente, PsicologoGeneral } from '../models/index.js';

const findAll = async () => {
  return await Usuario.findAll();
};

const findOne = async (id) => {
  return await Usuario.findByPk(id);
};

const create = async (data) => {
  try {
    const newUsuario = await Usuario.create(data);

    // Si el rol es "Paciente", creamos un registro en Paciente
    if (data.rol === 'Paciente') {
      await Paciente.create({ Usuario_id_usuario: newUsuario.id_usuario });
    }

    // Si el rol es "Psicologo", creamos un registro en PsicologoGeneral
    if (data.rol === 'Psicologo') {
      await PsicologoGeneral.create({ Usuario_id_usuario: newUsuario.id_usuario });
    }

    return newUsuario;
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
  try {
    const usuario = await Usuario.findOne({ where: { correo, contrasena } });

    if (usuario) {
      return usuario;  // Devolveremos el objeto usuario con el rol
    } else {
      return null;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

export default { findAll, findOne, create, update, remove, validate };
