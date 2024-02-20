'use strict';
const data = require('../data/documentoTipo.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('DocumentosTipo', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('DocumentosTipo', null, {});
  }
};
