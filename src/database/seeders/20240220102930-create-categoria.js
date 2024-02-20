'use strict';
const data = require('../data/categoria.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categorias', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Categorias', null, {});
  }
};
