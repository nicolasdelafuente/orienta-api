const { Sequelize } = require('sequelize');
const { config } = require('./config');

const { database, username, password, host, dialect } = config;

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
