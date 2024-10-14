import UsuarioService from '../services/usuarioService.js';
import { Usuario, Paciente, Psicologo } from '../models/index.js';
import sequelize from '../config/database.js';  // Importamos sequelize para transacciones
import usuarioService from '../services/usuarioService.js';

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
  const { nombre, apellido, correo, DNI, NumCelular, contrasena, fecha_nacimiento, especialidad, historial } = req.body;

  console.log("Datos recibidos:", req.body);

  let rol = 'Paciente';
  if (correo.endsWith('@cpi.com')) {
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


    const newPaciente = await Paciente.create({
      historial: historial || '', // Puedes manejar el historial como opcional o vacío
      Usuario_id_usuario: newUsuario.id_usuario, // Relacionar con el usuario recién creado
    }, { transaction });

    if (rol === 'Psicologo') {        console.log("Verificando especialidad:", especialidad);
  
      if (!especialidad || especialidad.trim() === '') {
        throw new Error("La especialidad es requerida para psicólogos");
      }

      // Insertar en Psicologo si el rol es Psicologo
      const newPsicologo = await Psicologo.create({
        especialidad: especialidad,
        Usuario_id_usuario: newUsuario.id_usuario,  // Relacionar con el usuario recién creado
      }, { transaction });

      console.log("Psicologo creado con ID:", newPsicologo.id_Psicologo);
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



const getContrasenaByEmailAndDNI = async (req, res) => {
  const { correo, dni } = req.body;  // Asumimos que correo y dni vienen en el cuerpo de la solicitud

  try {
    // Buscar el usuario por correo y DNI
    const usuario = await Usuario.findOne({ where: { correo, DNI: dni } });

    if (usuario) {
      // Retornar la contraseña
      return res.status(200).json({ contrasena: usuario.contrasena });
    } else {
      // Si no se encuentra el usuario, retornamos un 404
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener la contraseña', error });
  }
};


const updatePassword = async (req, res) => {
  const { id } = req.params;
  const { contrasenaActual, nuevaContrasena } = req.body;

  try {
    // Buscar al usuario por su ID
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Verificar que la contraseña actual coincida
    if (usuario.contrasena !== contrasenaActual) {
      return res.status(400).json({ message: 'Contraseña actual incorrecta' });
    }

    // Actualizar la contraseña con la nueva
    usuario.contrasena = nuevaContrasena;
    await usuario.save();

    // Verificar si el cambio se realizó correctamente
    const usuarioActualizado = await Usuario.findByPk(id);
    console.log(`Nueva contraseña almacenada: ${usuarioActualizado.contrasena}`);

    return res.status(200).json({ message: 'Contraseña actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar la contraseña:', error);
    return res.status(500).json({ message: 'Error al actualizar la contraseña', error });
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

// Obtener los pacientes de un psicólogo
const getPacientesByPsicologo = async (req, res) => {
  const { id_psicologo } = req.params;
  try {
      const pacientes = await UsuarioService.getPacientesByPsicologo(id_psicologo);
      return res.status(200).json(pacientes);
  } catch (error) {
      return res.status(500).json({ message: 'Error al obtener los pacientes', error });
  }
};

// Obtener el psicólogo de un paciente
const getPsicologoByPaciente = async (req, res) => {
  const { idPaciente } = req.params;
  try {
      const psicologo = await UsuarioService.getPsicologoByPaciente(idPaciente);
      return res.status(200).json(psicologo);
  } catch (error) {
      return res.status(500).json({ message: 'Error al obtener el psicólogo', error });
  }
};

export default { findAll, findOne, create, update, remove, validate, getPacientesByPsicologo, getPsicologoByPaciente, getContrasenaByEmailAndDNI, updatePassword };
