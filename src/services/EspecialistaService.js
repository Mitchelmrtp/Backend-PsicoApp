import Especialista from '../models/especialista.js';
import PsicologoGeneral from '../models/psicologogeneral.js';

const findAll = async () => {
  return await Especialista.findAll();
};

const findOne = async (id) => {
  return await Especialista.findByPk(id);
};

const create = async (data) => {
  try {
    // Verificar que el PsicologoGeneral_id_psicologogeneral sea válido antes de insertar
    const psicologoGeneral = await PsicologoGeneral.findByPk(data.PsicologoGeneral_id_psicologogeneral);
    
    if (!psicologoGeneral) {
      throw new Error(`PsicologoGeneral con ID ${data.PsicologoGeneral_id_psicologogeneral} no encontrado.`);
    }

    // Si la validación es exitosa, crear el especialista
    return await Especialista.create(data);
    
  } catch (error) {
    console.error('Error al crear el especialista:', error);
    throw error;
  }
};

const update = async (id, data) => {
  const especialista = await Especialista.findByPk(id);
  
  if (!especialista) {
    throw new Error('Especialista no encontrado');
  }

  await especialista.update(data);
  return especialista;
};

const remove = async (id) => {
  return await Especialista.destroy({ where: { id_especialista: id } });
};

export default { findAll, findOne, create, update, remove };
