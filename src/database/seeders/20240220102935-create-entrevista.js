'use strict';
const data = require('../data/entrevista.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //await queryInterface.bulkInsert('Entrevistas', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Entrevistas', null, {});
  }
};
