const express = require('express');
const router = express.Router();
const carreraController = require("../controllers/carrera.controller.js");

/**
 * @route GET /orientacion/carreras
 * @description Obtener todas las carreras
 * @access Public
 */
router.get("/", carreraController.getItems.bind(carreraController));

/**
 * @route GET /orientacion/carreras/:id
 * @description Obtener una carrera por ID
 * @access Public
 */
router.get("/:id",  carreraController.getItem.bind(carreraController));

/**
 * @route POST /orientacion/carreras
 * @description Crear una nueva carrera
 * @access Public
 */
router.post("/", carreraController.createItem.bind(carreraController));

/**
 * @route PUT /orientacion/carreras/:id
 * @description Actualizar una carrera por ID
 * @access Public
 */
router.put("/:id", carreraController.updateItem.bind(carreraController));

/**
 * @route DELETE /orientacion/carreras/:id
 * @description Eliminar una carrera por ID
 * @access Public
 */
router.delete("/:id", carreraController.deleteItem.bind(carreraController));

/**
 * @route PUT /orientacion/carreras/restore/:id
 * @description Restaurar una carrera por ID
 * @access Public
 */
router.put("/restore/:id", carreraController.restoreItem.bind(carreraController)); 

module.exports = router;
