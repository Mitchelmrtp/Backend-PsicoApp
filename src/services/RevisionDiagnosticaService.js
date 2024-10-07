import RevisionDiagnostica from '../models/revisionDiagnostica.js';

const findAll = async () => {
    return await RevisionDiagnostica.findAll();
};

const findOne = async (id) => {
    return await RevisionDiagnostica.findByPk(id);
};

const create = async (data) => {
    return await RevisionDiagnostica.create(data);
};

const update = async (id, data) => {
    const diagnostico = await RevisionDiagnostica.findByPk(id);
    if (!diagnostico) throw new Error('Diagnóstico no encontrado');
    await diagnostico.update(data);
    return diagnostico;
};

const remove = async (id) => {
    return await RevisionDiagnostica.destroy({ where: { idDiagnostico: id } });
};

export default { findAll, findOne, create, update, remove };
