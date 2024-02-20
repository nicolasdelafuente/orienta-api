'use strict';
const data = require('../data/provincia.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Provincias', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Provincias', null, {});
  }
};
