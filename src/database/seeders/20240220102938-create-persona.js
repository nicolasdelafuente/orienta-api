'use strict';
const data = require('../data/persona.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Personas', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Personas', null, {});
  }
};
