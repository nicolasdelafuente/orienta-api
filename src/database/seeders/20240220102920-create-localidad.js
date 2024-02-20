'use strict';
const data = require('../data/localidad.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Localidades', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Localidades', null, {});
  }
};
