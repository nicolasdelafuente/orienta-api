'use strict';
const data = require('../data/genero.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Generos', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Generos', null, {});
  }
};
