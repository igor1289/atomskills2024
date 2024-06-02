//INITIALIZATION
require("dotenv").config();
const express = require("express");

const app = express();

//ADDITIONAL SETUP
app.use(express.json());

//USE ROUTERS
app.use("/user", require("./controllers/user.js"));

//STATIC
app.use(express.static("./app/views"));

//START
app.listen(process.env.PORT);
