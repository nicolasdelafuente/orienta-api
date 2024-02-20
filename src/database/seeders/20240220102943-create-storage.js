'use strict';
const data = require('../data/storage.js');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //await queryInterface.bulkInsert('Storage', data, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Storage', null, {});
  }
};
