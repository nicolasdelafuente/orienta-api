const logSqlErrorAndQuery = require("../helpers/logSqlError.js");
const { handleHttpError } = require("../utils/handleError.js");
const { handleNotFound } = require("../utils/handleNotFound.js");

/**
 * @class
 * @classdesc Controlador base que contiene operaciones CRUD genéricas.
 */
class BaseController {
    /**
     * @constructor
     * @param {Object} Model Modelo de Sequelize para interactuar con la base de datos.
     */
    constructor(Model) {
        /**
         * @type {Object}
         * @description Modelo de Sequelize para interactuar con la base de datos.
         */
        this.Model = Model;
        /**
         * @type {string}
         * @description Nombre del modelo.
         */
        this.modelName = Model.name;
    }

    /**
     * @async
     * @function getItems
     * @description Obtiene todos los elementos no eliminados.
     * @param {Object} req Objeto de solicitud.
     * @param {Object} res Objeto de respuesta.
     * @returns {Promise<void>}
     */
    async getItems(req, res) {
        try {
            const data = await this.Model.findAll({
                where: {
                    deleted: false
                },
                attributes: { exclude: ['deleted'] }
            });

            res.send({ data });

        } catch (error) {
            logSqlErrorAndQuery(error);
            handleHttpError(res, error.message, 'ERROR_GET_ITEMS', 500);
        }
    }

    /**
     * @async
     * @function getItem
     * @description Obtiene un elemento por su ID.
     * @param {Object} req Objeto de solicitud.
     * @param {Object} res Objeto de respuesta.
     * @returns {Promise<void>}
     */
    async getItem(req, res) {
        try {
            const { id } = req.params;
            const data = await this.findItemById(id, false);

            if (!data) {
                return handleNotFound(res, this.modelName);
            }

            res.send({ data });

        } catch (error) {
            logSqlErrorAndQuery(error);
            handleHttpError(res, error.message, 'ERROR_GET_ITEM', 500);
        }
    }

    /**
     * @async
     * @function createItem
     * @description Crea un nuevo elemento.
     * @param {Object} req Objeto de solicitud.
     * @param {Object} res Objeto de respuesta.
     * @returns {Promise<void>}
     */
    async createItem(req, res) {
        try {
            const data = await this.Model.create(req.body);

            res.status(201).json({ success: true, data });

        } catch (error) {
            logSqlErrorAndQuery(error);
            handleHttpError(res, error.message, 'ERROR_CREATE_ITEM', 500);
        }
    }

    /**
     * @async
     * @function updateItem
     * @description Actualiza un elemento existente por su ID.
     * @param {Object} req Objeto de solicitud.
     * @param {Object} res Objeto de respuesta.
     * @returns {Promise<void>}
     */
    async updateItem(req, res) {
        try {
            const { id } = req.params;
            const data = await this.findItemById(id, false);

            if (!data) {
                return handleNotFound(res, this.modelName);
            }

            const updatedItem = await data.update(req.body);
            res.status(200).json({ success: true, data: updatedItem });

        } catch (error) {
            logSqlErrorAndQuery(error);
            handleHttpError(res, error.message, 'ERROR_UPDATE_ITEM', 500);
        }
    }

   /**
     * @async
     * @function deleteItem
     * @description Elimina lógicamente un elemento por su ID.
     * @param {Object} req Objeto de solicitud.
     * @param {Object} res Objeto de respuesta.
     * @returns {Promise<void>}
     */
    async deleteItem(req, res) {
        try {
            const { id } = req.params;
            const data = await this.findItemById(id, false);

            if (!data) {
                return handleNotFound(res, this.modelName);
            }

            await data.update({ deleted: true });

            res.status(200).json({ success: true, message: `${this.modelName} item deleted successfully` });

        } catch (error) {
            logSqlErrorAndQuery(error);
            handleHttpError(res, error.message, 'ERROR_SOFT_DELETE_ITEM', 500);
        }
    }

    /**
     * @async
     * @function restoreItem
     * @description Restaura lógicamente un elemento eliminado por su ID.
     * @param {Object} req Objeto de solicitud.
     * @param {Object} res Objeto de respuesta.
     * @returns {Promise<void>}
     */
    async restoreItem(req, res) {
        try {
            const { id } = req.params;
            const data = await this.findItemById(id, true);

            if (!data) {
                return handleNotFound(res, this.modelName);
            }

            await data.update({ deleted: false });

            res.status(200).json({ success: true, message: `${this.modelName} item restored successfully` });
        } catch (error) {
            logSqlErrorAndQuery(error);
            handleHttpError(res, error.message, 'ERROR_RESTORE_ITEM', 500);
        }
    }

    /**
     * @private
     * @async
     * @function findItemById
     * @description Busca un elemento por su ID y estado de eliminación.
     * @param {number} id ID del elemento a buscar.
     * @param {boolean} deleted Estado lógico del elemento (aceptado: 0, eliminado: 1).
     * @returns {Promise<Object>} El elemento encontrado.
     */
   async findItemById(id, deleted) {
        try {
            const data = await this.Model.findOne({
                where: {
                    id,
                    deleted
                },
                attributes: {
                    exclude: ['deleted']
                }
            });
            return data;
        } catch (error) {
            console.error('Error in findItemById:', error);
            throw error;
        }
    }

}

module.exports = BaseController;