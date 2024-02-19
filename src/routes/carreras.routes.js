const express = require('express');
const router = express.Router();
const { getItems } = require("../controllers/carrera.controllers.js");

router.get("/", getItems);

module.exports = router;