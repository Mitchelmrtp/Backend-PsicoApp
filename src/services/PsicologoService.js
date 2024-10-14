import Psicologo from '../models/Psicologo.js';

const PsicologoService = {
  // Obtener todos los psicólogos generales
  findAll: async () => {
    try {
      return await Psicologo.findAll();
    } catch (error) {
      console.error('Error al obtener psicólogos:', error);
      throw new Error('Error al obtener psicólogos');
    }
  },

  // Obtener un psicólogo por su ID
  findOne: async (id) => {
    try {
      return await Psicologo.findByPk(id);
    } catch (error) {
      console.error('Error al obtener el psicólogo:', error);
      throw new Error('Error al obtener el psicólogo');
    }
  },

  // Crear un nuevo psicólogo
  create: async (data) => {
    try {
      return await Psicologo.create(data);
    } catch (error) {
      console.error('Error al crear el psicólogo:', error);
      throw new Error('Error al crear el psicólogo');
    }
  },

  // Actualizar un psicólogo existente
  update: async (id, data) => {
    try {
      const psicologo = await Psicologo.findByPk(id);
      if (!psicologo) {
        throw new Error('Psicólogo no encontrado');
      }
      await psicologo.update(data);
      return psicologo;
    } catch (error) {
      console.error('Error al actualizar el psicólogo:', error);
      throw new Error('Error al actualizar el psicólogo');
    }
  },

  // Eliminar un psicólogo
  remove: async (id) => {
    try {
      return await Psicologo.destroy({ where: { id_psicologo: id } });
    } catch (error) {
      console.error('Error al eliminar el psicólogo:', error);
      throw new Error('Error al eliminar el psicólogo');
    }
  },
};

export default PsicologoService;
