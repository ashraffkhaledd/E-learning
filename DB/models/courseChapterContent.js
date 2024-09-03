import { Model, DataTypes } from "sequelize"

const CourseChapterContent = (sequelize) => {
    class CourseChapterContent extends Model {
        static associate(models) {
            CourseChapterContent.belongsTo(models.ChapterCourse, {
                foreignKey: "courseChapterId",
                as: "courseChapter",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        }
    }
    CourseChapterContent.init({
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: {
                arg: true,
                msg: 'UUID is already taken.'
            }
        },
        courseChapterId: {
            type: DataTypes.INTEGER,
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
        modename: "CourseChapterContent"
    })
    return CourseChapterContent
}

export default CourseChapterContent