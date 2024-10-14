import Sesion from "../models/sesion.js"; 

const SesionService = {
  // Crear una nueva sesión
  createSesion: async (data) => {
    try {
      const nuevaSesion = await Sesion.create(data);
      return nuevaSesion;
    } catch (error) {
      console.error('Error al crear la sesión:', error);
      throw new Error('Error al crear la sesión');
    }
  },

  // Obtener todas las sesiones
  findAll: async () => {
    try {
      return await Sesion.findAll();
    } catch (error) {
      console.error('Error al obtener sesiones:', error);
      throw new Error('Error al obtener sesiones');
    }
  },

  // Obtener una sesión por su ID
  findOne: async (id) => {
    try {
      return await Sesion.findByPk(id);
    } catch (error) {
      console.error('Error al obtener la sesión:', error);
      throw new Error('Error al obtener la sesión');
    }
  },

  // Actualizar una sesión existente
  updateSesion: async (id, data) => {
    try {
      const sesion = await Sesion.findByPk(id);
      if (!sesion) {
        throw new Error('Sesión no encontrada');
      }
      await sesion.update(data);
      return sesion;
    } catch (error) {
      console.error('Error al actualizar la sesión:', error);
      throw new Error('Error al actualizar la sesión');
    }
  },

  // Eliminar una sesión
  removeSesion: async (id) => {
    try {
      return await Sesion.destroy({ where: { idSesion: id } });
    } catch (error) {
      console.error('Error al eliminar la sesión:', error);
      throw new Error('Error al eliminar la sesión');
    }
  },
};

export default SesionService;
