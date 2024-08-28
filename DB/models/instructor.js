import { Model, DataTypes } from 'sequelize';

const Instructor = (sequelize) => {
  class Instructor extends Model {
    static associate(models) {
      // Define associations here
    }

  }
  Instructor.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: {
        arg: true,
        msg: 'UUID is already taken.',
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.ENUM('male', 'female'),
      allowNull: false
    },
    num_of_published_courses: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_of_enrolled_students: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    average_review_rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_of_reviews: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    introduction_brief: {
      type: DataTypes.STRING,
      allowNull: false
    },
    qualification: {
      type: DataTypes.STRING,
      allowNull: false
    }



  }, {
    sequelize,
    modelName: 'Instructor',
  });
  return Instructor;
};

export default Instructor;