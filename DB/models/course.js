import { Model, DataTypes } from "sequelize"


const course = (sequelize) => {
    class course extends Model {
        static associate(models) {

        }
    }
    course.init({
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: {
                arg: true,
                msg: 'UUID is already taken.'
            }
        },
        courseTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        courseBrief: {
            type: DataTypes.STRING,
            allowNull: false
        },
        numOfChapters: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        instructorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        courseFee: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        languageId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}