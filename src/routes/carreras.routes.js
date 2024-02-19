const express = require('express');
const router = express.Router();
const { getItems, getItem } = require("../controllers/carrera.controllers.js");

router.get("/", getItems);
router.get("/:id", getItem);

module.exports = router;