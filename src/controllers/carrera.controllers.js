const { Carrera } = require("../models");
const logSqlErrorAndQuery  = require('../helpers/logSqlError.js');
const { handleHttpError } = require("../utils/handleError.js");

/**
 * Obtener lista de Base de datos
 * @param {*} req 
 * @param {*} res 
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

module.exports = { getItems };