'use strict';
const data = require('../data/pais.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Paises', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Paises', null, {});
  }
};
