import UsuarioService from '../services/usuarioService.js';

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
  try {
    const newUsuario = await UsuarioService.create(req.body);
    return res.status(201).json(newUsuario);
  } catch (error) {
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
      return res.status(200).json(usuario);  
    } else {
      return res.status(404).json({ message: 'Usuario o contraseña incorrectos' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error en la validación del usuario', error });
  }
};

export default { findAll, findOne, create, update, remove, validate };
