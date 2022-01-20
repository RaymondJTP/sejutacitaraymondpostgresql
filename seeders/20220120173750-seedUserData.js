'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: "user1",
        email: "user1@gmail.com",
        password: "iniuser1",
        role: "admin",
        address: "Bandung",
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        username: "user2",
        email: "user2@gmail.com",
        password: "iniuser2",
        role: "admin",
        address: "Jakarta",
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        username: "user3",
        email: "user3@gmail.com",
        password: "iniuser3",
        role: "user",
        address: "Medan",
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        username: "user4",
        email: "user4@gmail.com",
        password: "iniuser4",
        role: "user",
        address: "Jakarta",
        createdAt: new Date(),
        updatedAt:new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null)
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
