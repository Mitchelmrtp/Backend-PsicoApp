import CitaService from "../services/citaService.js";

const findAll = async (req, res) => {
    const result = await CitaService.findAll();
    return sendResponse(result, res);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await CitaService.findOne(id);
    return sendResponse(result, res);
};

const create = async (req, res) => {
    const result = await CitaService.create(req.body);
    return sendResponse(result, res);
};

const update = async (req, res) => {
    const result = await CitaService.update(req.body);
    return sendResponse(result, res);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await CitaService.remove(id);
    return sendResponse(result, res);
};

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error' });
};

const CitaController = { findAll, findOne, create, update, remove };

export default CitaController;
