const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('students', [
      {
        id: uuidv4(),
        firstName: 'mohamed',
        lastName: 'khaled',
        email: 'mohamedkhaleed000@gmail.com',
        password: bcrypt.hashSync("12345678", 8),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {});
  },
};
