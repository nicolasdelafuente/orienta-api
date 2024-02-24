const BaseTest = require('./BaseTest.js');

class InstitutosTests extends BaseTest {
  constructor() {
    super('institutos', 'instituto');
    this.data = { "nombre": "Instituto Test" };
  }
}

module.exports = InstitutosTests;
