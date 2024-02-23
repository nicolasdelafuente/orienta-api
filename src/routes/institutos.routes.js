const express = require('express');
const router = express.Router();
const institutoController = require("../controllers/instituto.controller.js");

/**
 * @route GET /orientacion/institutos
 * @description Obtener todas las institutos
 * @access Public
 */
router.get("/", institutoController.getItems.bind(institutoController));

/**
 * @route GET /orientacion/institutos/:id
 * @description Obtener una instituto por ID
 * @access Public
 */
router.get("/:id",  institutoController.getItem.bind(institutoController));

/**
 * @route POST /orientacion/institutos
 * @description Crear una nueva instituto
 * @access Public
 */
router.post("/", institutoController.createItem.bind(institutoController));

/**
 * @route PUT /orientacion/institutos/:id
 * @description Actualizar una instituto por ID
 * @access Public
 */
router.put("/:id", institutoController.updateItem.bind(institutoController));

/**
 * @route DELETE /orientacion/institutos/:id
 * @description Eliminar una instituto por ID
 * @access Public
 */
router.delete("/:id", institutoController.deleteItem.bind(institutoController));

/**
 * @route PUT /orientacion/institutos/restore/:id
 * @description Restaurar una instituto por ID
 * @access Public
 */
router.put("/restore/:id", institutoController.restoreItem.bind(institutoController)); 

module.exports = router;
