import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection';




class Instructor extends Model { }

Instructor.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: 'Instructor',
    },
);

// the defined model is the class itself
console.log(Instructor === sequelize.models.Instructor); // true