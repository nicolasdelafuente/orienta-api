const BaseTest = require('./BaseTest.js');

class CarrerasTests extends BaseTest {
  constructor() {
    super('carreras', 'carrera');
    this.data = { "nombre": "carrera Test" };
  }
}

module.exports = CarrerasTests;