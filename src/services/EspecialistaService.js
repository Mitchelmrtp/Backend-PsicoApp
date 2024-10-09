import Especialista from '../models/Especialista.js';

const findAll = async () => {
  return await Especialista.findAll();
};

const findOne = async (id) => {
  return await Especialista.findByPk(id);
};

const create = async (data) => {
  return await Especialista.create(data);

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
