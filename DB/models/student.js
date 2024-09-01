import { Model, DataTypes } from 'sequelize';

const Student = (sequelize) => {
  class Student extends Model {
    static associate(models) {
      // define association here
    }
  }
  Student.init({
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: {
        msg: 'UUID is already taken.'
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
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
    num_of_courses_enrolled: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    num_of_courses_completed: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};


export default Student;