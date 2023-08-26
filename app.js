const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

/* APP CONFIGURATIONS */

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

module.exports = app;