const { Carrera } = require("../models");
const logSqlErrorAndQuery = require('../helpers/logSqlError.js');
const { handleHttpError } = require("../utils/handleError.js");

const attributes = [
    "id",
    "nombre",
    "createdAt",
    "updatedAt"
];

/**
 * Obtener una lista de todas las carreras.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express utilizado para enviar la respuesta.
 */
const getItems = async (req, res) => {
    try {
        const data = await Carrera.findAll();
        res.send({ data });
    } catch (error) {
        logSqlErrorAndQuery(error); 
        handleHttpError(res, error.message, 'ERROR_GET_ITEMS', 500);
    }
};

/**
 * Obtener una carrera por su ID.
 * @param {Object} req - Objeto de solicitud de Express que contiene los parámetros de la solicitud.
 * @param {Object} res - Objeto de respuesta de Express utilizado para enviar la respuesta.
 */
const getItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Carrera.findByPk(id);
        if (!data) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }
        res.send({ data });
    } catch (error) {
        logSqlErrorAndQuery(error); 
        handleHttpError(res, error.message, 'ERROR_GET_ITEM', 500);
    }
};

/**
 * Crear un nuevo registro de carrera en la base de datos.
 * @param {Object} req - El objeto de solicitud HTTP que debe contener los datos de la carrera a crear.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const createItem = async (req, res) => {
    try {
        const data = await Carrera.create(req.body);
        res.status(201).json({ success: true, data });
    } catch (error) {
        logSqlErrorAndQuery(error); 
        handleHttpError(res, error.message, 'ERROR_CREATE_ITEM', 500);
    }
};

/**
 * Actualizar un registro de carrera en la base de datos.
 * @param {Object} req - El objeto de solicitud HTTP que debe contener el ID de la carrera y los nuevos datos.
 * @param {Object} res - El objeto de respuesta HTTP.
 */
const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const carrera = await Carrera.findByPk(id);
        if (!carrera) {
            return res.status(404).json({ error: 'Carrera no encontrada' });
        }
        const updatedCarrera = await carrera.update(req.body);
        res.status(200).json({ success: true, data: updatedCarrera });
    } catch (error) {
        logSqlErrorAndQuery(error); 
        handleHttpError(res, error.message, 'ERROR_UPDATE_ITEM', 500);
    }
};

module.exports = { getItems, getItem, createItem, updateItem };
