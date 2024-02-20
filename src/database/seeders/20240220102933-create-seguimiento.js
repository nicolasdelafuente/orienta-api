'use strict';
const data = require('../data/seguimiento.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //await queryInterface.bulkInsert('Seguimientos', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Seguimientos', null, {});
  }
};
