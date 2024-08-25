import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("e-learning", "root", "12345678", {
    host: "localhost",
    dialect: "mysql",
});

export const connectDB = async () => {
    return await sequelize.sync().then(() => {
        console.log("DB connected successfully!");
    });
};
