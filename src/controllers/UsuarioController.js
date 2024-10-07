import UsuarioService from '../services/usuarioService.js';
import { Usuario, Paciente, PsicologoGeneral, Especialista } from '../models/index.js';
import sequelize from '../config/database.js';  // Importamos sequelize para transacciones

const findAll = async (req, res) => {
  try {
    const usuarios = await UsuarioService.findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await UsuarioService.findOne(id);
    return usuario ? res.status(200).json(usuario) : res.status(404).json({ message: 'Usuario no encontrado' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

const create = async (req, res) => {
  const { nombre, apellido, correo, DNI, NumCelular, contrasena, fecha_nacimiento, especialidad } = req.body;

  // Identificar el rol basado en el dominio del correo electrónico
  let rol = 'Paciente';  // Por defecto es paciente
  if (correo.endsWith('@validamente.cpi.com')) {
    rol = 'Psicologo';
  }

  // Iniciamos una transacción para asegurarnos de que los datos se guarden correctamente
  const transaction = await sequelize.transaction();

  try {
    // Crear el usuario
    const newUsuario = await Usuario.create({
      nombre,
      apellido,
      correo,
      DNI,
      NumCelular,
      contrasena,
      fecha_nacimiento,
      rol,  // Asignamos el rol
    }, { transaction });

    // Si es paciente, insertamos en la tabla Paciente
    if (rol === 'Paciente') {
      await Paciente.create({
        Usuario_id_usuario: newUsuario.id_usuario,  // Vinculamos con el usuario creado
        historial: '',  // El historial puede estar vacío inicialmente
      }, { transaction });
    }

    // Si es psicólogo, insertamos en las tablas PsicologoGeneral y Especialista
    if (rol === 'Psicologo') {
      // Crear PsicologoGeneral
      const newPsicologo = await PsicologoGeneral.create({
        Usuario_id_usuario: newUsuario.id_usuario,  // Vinculamos con el usuario creado
      }, { transaction });

      // Verificar si la especialidad no está vacía antes de crear el Especialista
      if (especialidad && especialidad.trim() !== '') {
        await Especialista.create({
          especialidad,
          PsicologoGeneral_id_psicologogeneral: newPsicologo.id_psicologogeneral,
        }, { transaction });
      }
    }

    // Confirmamos la transacción
    await transaction.commit();
    
    return res.status(201).json(newUsuario);

  } catch (error) {
    // Si hay algún error, revertimos la transacción
    await transaction.rollback();
    console.error('Error al crear el usuario:', error);
    return res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};

const update = async (req, res) => {
  try {
    const updatedUsuario = await UsuarioService.update(req.params.id, req.body);
    return res.status(200).json(updatedUsuario);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
};

const remove = async (req, res) => {
  try {
    await UsuarioService.remove(req.params.id);
    return res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
};

const validate = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await UsuarioService.validate(correo, contrasena);

    if (usuario) {
      return res.status(200).json(usuario);  // Devolveremos el objeto usuario con el rol
    } else {
      return res.status(404).json({ message: 'Usuario o contraseña incorrectos' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error en la validación del usuario', error: err });
  }
};

export default { findAll, findOne, create, update, remove, validate };
