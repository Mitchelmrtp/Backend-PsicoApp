import RutinaService from "../services/rutinaService.js";

const findAll = async (req, res) => {
    const result = await RutinaService.findAll();
    return sendResponse(result, res);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await RutinaService.findOne(id);
    return sendResponse(result, res);
};

const create = async (req, res) => {
    const result = await RutinaService.create(req.body);
    return sendResponse(result, res);
};

const update = async (req, res) => {
    const { id } = req.params;
    const result = await RutinaService.update(id, req.body);
    return sendResponse(result, res);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const result = await RutinaService.remove(id);
    return sendResponse(result, res);
};

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error' });
};

export default { findAll, findOne, create, update, remove };