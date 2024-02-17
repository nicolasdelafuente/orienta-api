require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 4000;
const publicUrl = process.env.PUBLIC_URL || 'http://localhost:'

app.listen(port, () => {
    console.log(`The server has started successfully at ${publicUrl}${port}`);
});
