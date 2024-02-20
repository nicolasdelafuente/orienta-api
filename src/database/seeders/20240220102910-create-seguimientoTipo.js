'use strict';
const data = require('../data/seguimientoTipo.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SeguimientosTipo', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SeguimientosTipo', null, {});
  }
};
