import { Model, DataTypes } from 'sequelize';

const Token = (sequelize) => {
    class Token extends Model {
        static associate(models) {
            Token.belongsTo(models.Instructor, {
                foreignKey: 'userId',
                constraints: false,
                scope: {
                    userType: 'Instructor',
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
            Token.belongsTo(models.Student, {
                foreignKey: 'userId',
                constraints: false,
                scope: {
                    userType: 'Instructor',
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        }
    }
    Token.init({
        token: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        userType: {
            type: DataTypes.ENUM('Instructor', 'Student'),
            allowNull: false
        },
        isValid: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        agent: DataTypes.STRING,
        expiredAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: "Token"
    });
    return Token;
}

export default Token;