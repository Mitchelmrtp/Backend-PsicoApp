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

  console.log("Datos recibidos:", req.body);

  let rol = 'Paciente';
  if (correo.endsWith('@validamente.cpi.com')) {
    rol = 'Psicologo';
  }

  const transaction = await sequelize.transaction();

  try {
    // Insertar en Usuario
    const newUsuario = await Usuario.create({
      nombre,
      apellido,
      correo,
      DNI,
      NumCelular,
      contrasena,
      fecha_nacimiento,
      rol,
    }, { transaction });

    if (rol === 'Psicologo') {
      console.log("Verificando especialidad:", especialidad);

      if (!especialidad || especialidad.trim() === '') {
        throw new Error("La especialidad es requerida para psicólogos");
      }

      // Insertar en PsicologoGeneral
      const newPsicologo = await PsicologoGeneral.create({
        Usuario_id_usuario: newUsuario.id_usuario, // Relacionar con el usuario recién creado
      }, { transaction });

      // Insertar en Especialista usando el ID del PsicologoGeneral creado
      const newEspecialista = await Especialista.create({
        especialidad: especialidad,
        PsicologoGeneral_id_psicologogeneral: newPsicologo.id_psicologogeneral,  // Usar el ID de PsicologoGeneral
      }, { transaction });

      console.log("Especialista creado con ID:", newEspecialista.id_especialista);
    }

    // Confirmar la transacción
    await transaction.commit();
    return res.status(201).json(newUsuario);

  } catch (error) {
    // Revertir la transacción si ocurre un error
    await transaction.rollback();
    console.error("Error al crear el usuario, psicólogo o especialista:", error);
    return res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
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
