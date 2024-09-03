import { Model, DataTypes } from "sequelize"

const CourseChapter = (sequelize) => {
    class CourseChapter extends Model {
        static associate(models) {
            CourseChapter.belongsTo(models.Course, {
                foreignKey: "courseId",
                as: "course",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        }
    }
    CourseChapter.init({
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: {
                arg: true,
                msg: 'UUID is already taken.'
            }
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        chapterTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        num_of_reading: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        num_of_video: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        num_of_assignment: {
            type: DataTypes.INTEGER,
            allowNullL: false
        }
    }, {
        sequelize,
        modename: "CourseChapter"
    })
    return CourseChapter
}

export default CourseChapter