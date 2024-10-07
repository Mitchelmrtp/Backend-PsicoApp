import ReporteService from '../services/reporteService.js';

const findAll = async (req, res) => {
    const result = await ReporteService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await ReporteService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Reporte no encontrado' });
};

const create = async (req, res) => {
    const result = await ReporteService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await ReporteService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await ReporteService.remove(req.params.id);
    return res.status(200).json({ message: 'Reporte eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
