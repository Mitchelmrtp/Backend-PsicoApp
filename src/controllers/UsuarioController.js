import UsuarioService from '../services/usuarioService.js';
import { Usuario, Paciente, Psicologo } from '../models/index.js';
import sequelize from '../config/database.js';  

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
      historial: historial || '', 
      Usuario_id_usuario: newUsuario.id_usuario, 
    }, { transaction });

    if (rol === 'Psicologo') {        console.log("Verificando especialidad:", especialidad);
  
      if (!especialidad || especialidad.trim() === '') {
        throw new Error("La especialidad es requerida para psicólogos");
      }

      const newPsicologo = await Psicologo.create({
        especialidad: especialidad,
        Usuario_id_usuario: newUsuario.id_usuario,  
      }, { transaction });

      console.log("Psicologo creado con ID:", newPsicologo.id_Psicologo);
    }

    await transaction.commit();
    return res.status(201).json(newUsuario);

  } catch (error) {
    await transaction.rollback();
    console.error("Error al crear el usuario, psicólogo o especialista:", error);
    return res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
  }
};



const getContrasenaByEmailAndDNI = async (req, res) => {
  const { correo, dni } = req.body;  

  try {
    const usuario = await Usuario.findOne({ where: { correo, DNI: dni } });

    if (usuario) {
      return res.status(200).json({ contrasena: usuario.contrasena });
    } else {
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
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    if (usuario.contrasena !== contrasenaActual) {
      return res.status(400).json({ message: 'Contraseña actual incorrecta' });
    }

    usuario.contrasena = nuevaContrasena;
    await usuario.save();

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
