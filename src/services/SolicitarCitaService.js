import SolicitarCita from '../models/SolicitarCita.js';

const findAll = async () => {
  return await SolicitarCita.findAll();
};

const findOne = async (id) => {
  return await SolicitarCita.findByPk(id);
};

const create = async (data) => {
  try {
    return await SolicitarCita.create(data);
  } catch (error) {
    console.error('Error al crear la cita:', error);
    throw error;
  }
};

const update = async (id, data) => {
  const cita = await SolicitarCita.findByPk(id);
  if (!cita) throw new Error('Cita no encontrada');
  await cita.update(data);
  return cita;
};

const remove = async (id) => {
  return await SolicitarCita.destroy({ where: { idSolicitarCita: id } });
};

export default { findAll, findOne, create, update, remove };
