import PacienteService from "../services/pacienteService.js";

const findAll = async (req, res) => {
    const result = await PacienteService.findAll();
    return sendResponse(result, res);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await PacienteService.findOne(id);
    return sendResponse(result, res);
};

const create = async (req, res) => {
    const result = await PacienteService.create(req.body);
    return sendResponse(result, res);
};

const update = async (req, res) => {
    const result = await PacienteService.update(req.body);
    return sendResponse(result, res);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await PacienteService.remove(id);
    return sendResponse(result, res);
};

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error' });
};

const PacienteController = { findAll, findOne, create, update, remove };

export default PacienteController;
