import RevisionDiagnosticaService from '../services/revisionDiagnosticaService.js';

const findAll = async (req, res) => {
    const result = await RevisionDiagnosticaService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await RevisionDiagnosticaService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Diagnóstico no encontrado' });
};

const create = async (req, res) => {
    const result = await RevisionDiagnosticaService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await RevisionDiagnosticaService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await RevisionDiagnosticaService.remove(req.params.id);
    return res.status(200).json({ message: 'Diagnóstico eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
