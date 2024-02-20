'use strict';
const data = require('../data/carrera.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Carreras', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Carreras', null, {});
  }
};
