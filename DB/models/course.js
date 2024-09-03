import { Model, DataTypes } from "sequelize"


const Course = (sequelize) => {
    class Course extends Model {
        static associate(models) {
            Course.belongsTo(models.Instructor, {
                foreignKey: "instructorId",
                as: "instructor",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        }
    }
    Course.init({
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
    }, {
        sequelize,
        modelName: "Course"
    });
    return Course
}

export default Course