'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: "admin1",
        email: "admin1@mail.com",
        password: "$2a$10$/FPxDV9LiITXXJ3d24ImHurYvhNF5qjT7mICdPhgFqZu5vPh6vpFS",
        role: "admin",
        address: "Bandung",
        createdAt: new Date(),
        updatedAt:new Date()
      },
      {
        username: "user1",
        email: "user1@mail.com",
        password: "$2a$10$MEIzXlazio6KH9PZtY6yWuDVLPlp.iVBZ.NRap.7inNGXE20j.7ee",
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
