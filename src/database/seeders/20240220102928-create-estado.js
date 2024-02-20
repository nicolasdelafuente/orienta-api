'use strict';
const data = require('../data/estado.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Estados', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Estados', null, {});
  }
};
