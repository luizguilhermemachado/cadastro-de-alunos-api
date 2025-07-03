/* eslint-disable no-undef */
const bcrypstjs = require('bcryptjs')
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

     await queryInterface.bulkInsert('users', [{
       nome: 'Luiz',
       email: 'zliing@gmail.com',
       password_hash: await bcrypstjs.hash('guiwhio', 8),
       created_at: new Date(),
       updated_at: new Date()
     },
    {
       nome: 'Mari',
       email: 'Mari@gmail.com',
       password_hash: await bcrypstjs.hash('guiwhio', 8),
       created_at: new Date(),
       updated_at: new Date()
     }], {});

  },

  async down () {
  }
};
