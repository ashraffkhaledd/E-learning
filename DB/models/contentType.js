import { Model, DataTypes } from "sequelize"

const ContentType = (sequelize) => {
    class ContentType extends Model {
        static associate(models) {

        }
    }
    ContentType.init({
        content_type_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: {
                msg: 'UUID is already taken.'
            },
        },
        content_type_name: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        sequelize,
        mode: "ContentType"
    })
    return ContentType
}

export default ContentType