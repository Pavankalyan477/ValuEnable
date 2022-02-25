const express = require("express");
const app = express();
app.use(express.json());

const signup= require("./controllers/signup.controller.js")






app.use("/", signup);



module.exports = app