const { Sequelize } = require('sequelize');

const database = process.env.DB_NAME;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOSTNAME;
const dialect = process.env.DB_DIALECT;

const sequelize = new Sequelize(
    database,
    username,
    password, {
    host: host,
    dialect: dialect,
}
);

const dbConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log("MySQL connected");
    } catch (e) {
        console.error("MySQL ERROR connected", e);
    }
};

module.exports = { sequelize, dbConnect };
