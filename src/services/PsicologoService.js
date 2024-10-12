import Psicologo from '../models/Psicologo.js';

const findAll = async () => {
  return await Psicologo.findAll();
};

const findOne = async (id) => {
  return await Psicologo.findByPk(id);
};

const create = async (data) => {
  return await Psicologo.create(data);

};


const update = async (id, data) => {
  const Psicologo = await Psicologo.findByPk(id);
  
  if (!Psicologo) {
    throw new Error('Psicologo no encontrado');
  }

  await Psicologo.update(data);
  return Psicologo;
};

const remove = async (id) => {
  return await Psicologo.destroy({ where: { id_Psicologo: id } });
};

export default { findAll, findOne, create, update, remove };
