const { Instituto } = require("../models");
const BaseController = require('./BaseController');

class CarreraController extends BaseController {
  constructor() {
    super(Instituto);
  }
}

module.exports = new CarreraController();