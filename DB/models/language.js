import { Model, DataTypes } from "sequelize"

const language = (sequelize) => {
    class language extends Model {
        static associate(models) {

        }
    }
    language.init({
        uuid: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: {
                msg: 'UUID is already taken.'
            },
        },
        name: {
            type: DataTypes.UUID,
            allowNull: false
        }
    })
}