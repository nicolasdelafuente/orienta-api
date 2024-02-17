require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./src/config/connect.js");

const port = process.env.PORT || 4000;
const publicUrl = process.env.PUBLIC_URL || 'http://localhost:'

app.use(cors());
app.listen(port, () => {
    console.log(`The server has started successfully at ${publicUrl}${port}`);

    sequelize.sync({ force: false }).then(() => {
        console.log("The connection has been established");
    });
});