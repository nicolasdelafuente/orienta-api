const { Carrera } = require("../models");
const BaseController = require('./BaseController');

class CarreraController extends BaseController {
  constructor() {
    super(Carrera);
  }
}

module.exports = new CarreraController();