const { Carrera } = require("../models");
const logSqlErrorAndQuery  = require('../helpers/logSqlError.js');
const { handleHttpError } = require("../utils/handleError.js");

const attributes = [
    "id",
    "nombre",
    "createdAt",
    "updatedAt"
]

/**
 * Obtener una lista de carreras..
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express utilizado para enviar la respuesta.
 */
const getItems = async (req, res) => {
    try {
        const data = await Carrera.findAll();
        res.send({ data });
    } catch (e) {  
        logSqlErrorAndQuery(e); 
        handleHttpError(res, e.message, 'ERROR_GET_ITEMS', 403);
    }
};


/**
 * Obtener una carrera por su ID.
 * @param {Object} req - Objeto de solicitud de Express que contiene los parámetros de la solicitud.
 * @param {Object} res - Objeto de respuesta de Express utilizado para enviar la respuesta.
 */
const getItem = async (req, res) => {
    try {
        const id = req.params.id;
        data = await Carrera.findByPk(id);
        res.send({ data });

    } catch (e) {
        logSqlErrorAndQuery(e); 
        handleHttpError(res, e.message, 'ERROR_GET_ITEM', 403);
    }
}


/**
 * Obtener un registro de Base de datos
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const data = await Carrera.create({ req });
        res.send({ data });
    } catch (e) {
        logSqlErrorAndQuery(e); 
        handleHttpError(res, e.message, 'ERROR_CREATE_ITEMS', 403)
    }
}

module.exports = { getItems, getItem, createItem };