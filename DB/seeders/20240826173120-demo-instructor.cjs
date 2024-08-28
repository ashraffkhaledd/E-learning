const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Instructors', [
      {
        id: uuidv4(),
        firstName: 'ashraf',
        lastName: 'khaled',
        email: 'ashrafkhaleed000@gmail.com',
        password: bcrypt.hashSync("12345678", 8),
        phone: '01025771169',
        address: 'abasyaa',
        profileImage: 'https://www.wikihow.com/Get-the-URL-for-Pictures#/Image:Get-the-URL-for-Pictures-Draft-Step-1.jpg',
        gender: 'male',
        num_of_published_courses: 5,
        num_of_enrolled_students: 150,
        average_review_rating: 4,
        num_of_reviews: 25,
        introduction_brief: 'Experienced instructor in web development.',
        qualification: 'MSc in Computer Science',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Instructors', null, {});
  },
};
